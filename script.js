
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

