
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


//*----fetching json
async function fetchingJson() {
  const response = await fetch("./js/data/cases.json");
  const casesInfo = await response.json();
  casesArray = [...casesInfo.cases];
  console.log(casesArray);
  const caseDraw = casesArray.map(item => {
    return item;
  })
  drawCases(caseDraw);
  }
  
  fetchingJson();