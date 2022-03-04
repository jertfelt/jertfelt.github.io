(function() {
  //trying animation instead
  window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || 
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimaitonFrame ||
          function (callback) {
             window.setTimeout(callback, 1000/60);
          };
  })();

  //setting up
  let canvas = document.getElementById("drawingboard--canvas");
  let lineTool = canvas.getContext("2d");
  lineTool.lineWith = 5;

//buttons
let clearAllBtn = document.querySelector(".clear");
clearAllBtn.addEventListener("click", () => {
  lineTool.clearRect(0, 0, canvas.width, canvas.height)
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
    lineTool.strokeStyle = color.dataset.clr
})
})




//*pen sizes
let penModal = document.getElementById("pennstorlek--modal");
let penClose = document.getElementsByClassName("pennstorlek__close")[0];

let penSizeButton = document.querySelector(".width");
penSizeButton.addEventListener("click", () => {
penModal.style.display ="block";


let penButtonSmall = document.getElementById("pennstorlek--liten");
penButtonSmall.addEventListener("click", () => {
lineTool.lineWidth = 5;
if (penModal.style.display === "block"){
penModal.style.display ="none";};
})

let penButtonMed = document.getElementById("pennstorlek--mellan");
penButtonMed.addEventListener("click", () => {
lineTool.lineWidth = 10;
if (penModal.style.display === "block"){
penModal.style.display ="none";};

})

let penButtonLg = document.getElementById("pennstorlek--stor");
penButtonLg.addEventListener("click", () => {
lineTool.lineWidth =20;
if (penModal.style.display === "block"){
penModal.style.display ="none";};

})

let penButtonGig = document.getElementById("pennstorlek--gigant");
penButtonGig.addEventListener("click", () =>{
lineTool.lineWidth =100;
if (penModal.style.display === "block"){
penModal.style.display ="none";};
})

})

penClose.addEventListener("click", () =>{
penModal.style.display ="none";
})


let eraser = document.querySelector(".erase");
eraser.addEventListener("click", () =>{
lineTool.strokeStyle = "#f4f4f4";
} )

//*short commands: 
document.addEventListener('keydown', (event) => {
if (event.key === 'e') {
lineTool.strokeStyle = "#f4f4f4";
}
if (event.key === 'p'){
penModal.style.display ="block";
}
if (event.key === 'Delete'){
lineTool.clearRect(0, 0, canvas.width, canvas.height)
}
if (event.key === 's'){
saving();
}
});

//mouse drawing
let drawing = false;
let mouse = { x:0, y:0 };
let lastPos = mouse;

canvas.addEventListener("mousedown", function (e) {
drawing = true; lastPos = getMousePos(canvas, e);}, false);

canvas.addEventListener("mouseup", function (e) {
drawing = false;}, false);

canvas.addEventListener("mousemove", function (e) {
mouse = getMousePos(canvas, e);}, false);

//touch drawing
canvas.addEventListener("touchstart", function (e) {
mouse = getTouchPos(canvas, e);
let touching = e.touches[0];
let mouseEvent = new MouseEvent("mousedown", {
clientX: touching.clientX,
clientY: touching.clientY
});

canvas.dispatchEvent(mouseEvent);
  }, false);

canvas.addEventListener("touchend", function (e) {
let mouseEvent = new MouseEvent("mouseup", {});
canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchmove", function (e) {
let touching = e.touches[0];
var mouseEvent = new MouseEvent("mousemove", {
clientX: touching.clientX,
clientY: touching.clientY
});

canvas.dispatchEvent(mouseEvent);
}, false);

// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
if (e.target == canvas) {
e.preventDefault();
}}, false);

document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

//mouse on canvas position
function getMousePos(canvasDom, mouseEvent) {
let rect = canvasDom.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top
    };
  }

  // touch on canvas position
  function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }

  // FINALLY SOME DRAWING WIIII
  function renderCanvas() {
    if (drawing) {
      lineTool.beginPath();
      lineTool.moveTo(lastPos.x, lastPos.y);
      lineTool.lineTo(mouse.x, mouse.y);
      lineTool.stroke();
      lastPos = mouse;
    }
  }

  // Allow for animation
  (function drawLoop () {
    requestAnimFrame(drawLoop);
    renderCanvas();
  })();


})();


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

