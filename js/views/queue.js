//*Queue system:

//today's date
let divToday = document.querySelector("#todaysDate");
let dagensDatum = document.createElement("p");
let todayDate= new Date().toLocaleDateString();
dagensDatum.innerText = "Dagens datum: "+ todayDate;
divToday.appendChild(dagensDatum);

//queue 
let userInput = document.querySelector("#queue");
let sendNames = document.querySelector("#addPerson");
let fastTracking = document.querySelector("#fastTrackPerson");
let visibleQ = document.querySelector("#queuesystem");
let takeAwayFirst =document.getElementById("takeAwayFirst");
let nameArray = [];
let queueList = document.createElement("ol");
let messageWol = document.createElement("p");
visibleQ.appendChild(queueList);
visibleQ.appendChild(messageWol);
let checkedInCustomers = document.querySelector("#happyCustomers");
let checkoutparagraph = document.createElement("p");
  checkedInCustomers.appendChild(checkoutparagraph);


messageWol.innerText = "Inga personer står i kön" 
messageWol.style.color="coral";

//button 1
sendNames.addEventListener("click", () =>{
if (userInput.value ===""){
  alert ("Du måste fylla i fältet")
}
else {
  let newName = userInput.value;
  nameArray.push(userInput.value);
  let nameList = document.createElement("li");
messageWol.innerText ="";

for (i =0; i <nameArray.length; i++){ 
nameList.innerText = newName.toUpperCase();
queueList.appendChild(nameList)
nameList.style.textAlign ="center";

};
}
})
let count = 0;

//fasttrack
fastTracking.addEventListener("click", () =>{
  let newFirst = document.createElement("li");
  let firstName = userInput.value;
  messageWol.innerText ="";
 
  let reply = confirm("Placerar " + firstName + " först i kön. Gå vidare?")
  if (reply ==true) {
  
    nameArray.unshift(firstName) 
    queueList.prepend(newFirst);
    newFirst.innerText = userInput.value.toUpperCase() + " (Fast Tracked)"
    newFirst.style.color ="coral";
    newFirst.style.textAlign = "center";
    }  }  )

//checking in
takeAwayFirst.addEventListener("click", () =>{ 

//change color with js:
  if (takeAwayFirst.style.color === "coral")
  {
    takeAwayFirst.style.color="black";
    takeAwayFirst.style.backgroundColor="rgb(106, 206, 131)";
    takeAwayFirst.innerText= "CHECKA IN";
  }
  else { 
    takeAwayFirst.style.color="coral";
    takeAwayFirst.style.backgroundColor="black";

    //timer:
    setTimeout(function(){
      takeAwayFirst.style.color="black";
    takeAwayFirst.style.backgroundColor="rgb(106, 206, 131)";
    takeAwayFirst.innerText= "CHECKA IN";}, 0005)} 

//if no line:
if (nameArray.length <=0) {
  alert("Inga personer att checka in!")
}
else {
  let checkOutName = nameArray[0];
  let reply = confirm("Tar bort: " + checkOutName + " från listan. Är det OK?")
  if (reply ==true){
   nameArray.shift();
  queueList.removeChild(queueList.childNodes[0]);
   alert ("Incheckad!");

  
  if (queueList.childElementCount ===0)
  {messageWol.innerText ="Just nu är det 0 personer i kön"}

  //happy customers:
  count++;
  checkoutparagraph.innerText = count + " antal incheckade idag!";
}
}})

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

