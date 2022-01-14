

let canvas = document.getElementById("drawingboard");

//*buttons:
let clearAllBtn = document.querySelector(".clear");

clearAllBtn.addEventListener("click", () => {
    toolDrawing.clearRect(0, 0, canvas.width, canvas.height)
})

let saveButt = document.querySelector(".save");

function saving() {
  let info = canvas.toDataURL("imag/png");
  let a = document.createElement("a");
  a.href = info;
  a.download = "bild-till-tova.png";
  a.click();
}

saveButt.addEventListener("click", () => {
saving();
})

let colors = document.querySelectorAll(".color");
colors = Array.from(colors);
colors.forEach(color => {
    color.addEventListener("click", () => {
        toolDrawing.strokeStyle = color.dataset.clr
    })
})

let eraser = document.querySelector(".erase");
eraser.addEventListener("click", () =>{
  toolDrawing.strokeStyle = "#f4f4f4";
} )

document.addEventListener('keydown', (event) => {
  if (event.key === 'e') {
    toolDrawing.strokeStyle = "#f4f4f4";
  }
  if (event.key === 'p'){
    penModal.style.display ="block";
  }
  if (event.key === 'Delete'){
    toolDrawing.clearRect(0, 0, canvas.width, canvas.height)
  }
  if (event.key === 's'){
saving();
  }
})

//*pen sizes
let penModal = document.getElementById("pennstorlek--modal");
let penClose = document.getElementsByClassName("pennstorlek__close")[0];

let penSizeButton = document.querySelector(".width");
penSizeButton.addEventListener("click", () => {
  penModal.style.display ="block";


let penButtonSmall = document.getElementById("pennstorlek--liten");
penButtonSmall.addEventListener("click", () => {
  toolDrawing.lineWidth = 5;
  if (penModal.style.display === "block"){
    penModal.style.display ="none";};
})

let penButtonMed = document.getElementById("pennstorlek--mellan");
penButtonMed.addEventListener("click", () => {
  toolDrawing.lineWidth = 10;
  if (penModal.style.display === "block"){
    penModal.style.display ="none";};
  
})
let penButtonLg = document.getElementById("pennstorlek--stor");
penButtonLg.addEventListener("click", () => {
  toolDrawing.lineWidth =20;
  if (penModal.style.display === "block"){
    penModal.style.display ="none";};

})

let penButtonGig = document.getElementById("pennstorlek--gigant");
penButtonGig.addEventListener("click", () =>{
  toolDrawing.lineWidth =100;
  if (penModal.style.display === "block"){
  penModal.style.display ="none";};
})

})

penClose.addEventListener("click", () =>{
  penModal.style.display ="none";
})


//*drawing

canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;

var canvas = document.createElement('canvas');
canvas.id = "canvas";
document.body.appendChild(canvas);

document.body.style.margin = 0;
canvas.style.position = 'relative';

var ctx = canvas.getContext('2d');
resize();

var pos = {
  x: 0,
  y: 0
};
var buttonDown = false;

const cvs = document.getElementById("canvas");
cvs.addEventListener('mousedown', getRandomInt);
cvs.addEventListener('touchstart', getRandomInt);

window.addEventListener('resize', resize);

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseup', released);

document.addEventListener('touchstart', setPosition);
document.addEventListener('touchmove', draw);
document.addEventListener('touchend', released);

function getRandomInt() {
  window.randInt = Math.floor(Math.random() * Math.floor(3));
}

function released(e) {
  buttonDown = false;
}

function setPosition(e) {
  if (e.type == "touchstart" || e.type == "mousedown") {
    buttonDown = true;
  }
  if (e.type == "touchstart" || e.type == "touchmove") {
    pos.x = e.touches[0].clientX;
    pos.y = e.touches[0].clientY;
  } else {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  if (!buttonDown) return;

  var color = '';

  switch (window.randInt) {
    case 1:
      color = 'green';
      break;
    case 2:
      color = 'red';
      break;
    case 0:
      color = 'blue';
      break;
  }

  ctx.beginPath();

  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}

// let toolDrawing = canvas.getContext("2d");

// let prevMouseX = null;
// let prevMouseY = null;
// let prevTouchX = null;
// let prevTouchY = null;

// toolDrawing.lineWidth = 5;

// let draw = false;

// window.addEventListener("mousedown", (e) => draw = true);
// window.addEventListener("mouseup", (e) => draw = false);
// window.addEventListener("touchstart", (e) => draw = true);
// window.addEventListener("touchend", (e) => draw =false);

// window.addEventListener("mousemove", (e) => {
//     if(prevMouseX == null || prevMouseY == null || !draw){
//       prevMouseX = e.clientX;
//       prevMouseY = e.clientY;
//         return;
//     }
    
//     let currentMouseX = e.clientX;
//     let currentMouseY = e.clientY;

//     toolDrawing.beginPath();
//     toolDrawing.moveTo(prevMouseX, prevMouseY);
//     toolDrawing.lineTo(currentMouseX, currentMouseY);
//     toolDrawing.stroke()

//     prevMouseX = currentMouseX;
//     prevMouseY = currentMouseY;
// })

// window.addEventListener("touchmove", (e) => {
//   if (prevTouchX ==null|| prevTouchY == null || !draw ){
//     prevTouchX = e.clientX;
//     prevTouchY = e.clientY;
//     return;
//   }

//   let currentTouchX = e.clientX;
//   let currentTouchY = e.clientY;

//   toolDrawing.beginPath();
//   toolDrawing.moveTo(prevTouchX, prevTouchY);
//   toolDrawing.lineTo(currentTouchX, currentTouchY);
//   toolDrawing.stroke()

//   prevTouchX = currentTouchX;
//   prevTouchY = currentTouchY;
  
// })

//*shortcut modal
let shortcutModal = document.getElementById("drawingboard__shortcuts");
let shortcutButt = document.getElementsByClassName("question")[0];
let shortcutClose = document.getElementsByClassName("pennstorlek__close")[1];

shortcutButt.addEventListener("click", () =>{
  shortcutModal.style.display="block";
})
shortcutClose.addEventListener("click", () =>{
  shortcutModal.style.display ="none";
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    penModal.style.display ="none";
    shortcutModal.style.display ="none";
  }
})


//* future project:
// let fillColor = document.querySelector(".filling");
// fillColor.addEventListener("click", () => {

// })
