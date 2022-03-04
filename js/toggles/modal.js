const modalDYK = document.getElementById("didyouknowContainer");
let openDYK = document.getElementById("openDidYouKnow");


openDYK.addEventListener("click", showBetyg);

document.getElementById("closeDidYouKnow").addEventListener("click", () => {
  modalDYK.classList.add("hidden");
})



function showBetyg(){
  if (modalDYK.classList.contains("hidden") === true ){
    console.log(modalDYK);
    modalDYK.classList.remove("hidden");
  }
 else{
  modalDYK.classList.add("hidden");
}
}


