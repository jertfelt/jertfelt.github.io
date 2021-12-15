document.documentElement.classList.add('preparation');

window.onload = function() {
  document.documentElement.classList.remove('preparation');
};

//Menu button mobile
let menuButton = document.getElementById("menutoggle");
let menuMobile = document.querySelector("#drop-down");

menuButton.addEventListener("click", dropdown);

function dropdown(){
 if (menuMobile.classList.contains("drop-down"))
 {menuMobile.classList.remove("drop-down");
}
else 
menuMobile.classList.add("drop-down");
}


let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(carousel, 6000); 
}