let modalDYK = document.getElementById("didyouknowContainer");
let openDYK = document.getElementById("openDidYouKnow");
let closeDYK = document.getElementById("closeDidYouKnow");

openDYK.addEventListener("click",showBetyg);

function showBetyg(){
  modalDYK.style.display ="block";
}

closeDYK.addEventListener("click", closeBetyg);

function closeBetyg(){
  modalDYK.style.display ="none"};