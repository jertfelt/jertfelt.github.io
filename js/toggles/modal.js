const modalDYK = document.getElementById("didyouknowContainer");
let openDYK = document.getElementById("openDidYouKnow");


openDYK.addEventListener("click", showDYK);

document.getElementById("closeDidYouKnow").addEventListener("click", () => {
  modalDYK.classList.add("hidden");
})


function showDYK(){
  if (modalDYK.classList.contains("hidden") === true ){
  
    modalDYK.classList.remove("hidden");
  }
 else{
  modalDYK.classList.add("hidden");
}
}

//modal in CV: 
let modalCV = document.getElementById("betyg");
let buttModalCV = document.getElementById("openBetyg");
let closeModalCV = document.getElementById("closeBetyg");

buttModalCV.addEventListener("click",showBetyg);

function showBetyg(){
modalCV.style.display ="block";
}

closeModalCV.addEventListener("click", closeBetyg);

function closeBetyg(){
modalCV.style.display ="none"};


//circle animation:
function animatedCircle(opt) {
  let context = opt.canvas.getContext("2d");
  let handle = 0;
  let current = 0;
  let percent = 0;

  this.start = function( percentage ) {
      percent = percentage;
      // start the interval
      handle = setInterval( draw, opt.interval );
  }

  //circle
  context.arc( opt.width / 2, opt.height / 2, opt.radius, 0, 2 * Math.PI, false );
  context.lineWidth = opt.linewidth;
  context.strokeStyle = opt.circlecolor;
  context.stroke();

 //fill circle
  function draw() {
      context.beginPath();
      context.arc( opt.width / 2, opt.height / 2, opt.radius-(opt.linewidth/2), 0, 2 * Math.PI, false );
      context.clip();
   
      let height = ((100-current)*opt.radius*2)/100 + (opt.height-(opt.radius*2))/2;
      context.fillStyle = opt.fillcolor;
      context.fillRect( 0, height, opt.width, opt.radius*2 );

      if ( current < percent ) current+=opt.step;
      else clearInterval(handle);
  }
}
let  canvas = document.getElementById("circle--25");
new animatedCircle({
  'canvas': canvas,
  'width': canvas.width,
  'height': canvas.height,
  'radius': 100,
  'linewidth': 0,        
  'interval': 20,
  'step': 1,
  'circlecolor': 'rgb(190, 229, 245)',
  'fillcolor': 'rgb(190, 229, 245)'
}).start( 26 );

