//*Queue system:

//dagens datum:
let divToday = document.querySelector("#todaysDate");
let dagensDatum = document.createElement("p");
let todayDate= new Date().toLocaleDateString();
dagensDatum.innerText = "Dagens datum: "+ todayDate;
divToday.appendChild(dagensDatum);

//appending osv:
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

//bonusdiv:
let checkedInCustomers = document.querySelector("#happyCustomers");
let checkoutparagraph = document.createElement("p");
  checkedInCustomers.appendChild(checkoutparagraph);

//meddelandet:
messageWol.innerText = "There’s currently no people standing in line" 
messageWol.style.color="coral";

//knapp 1:
sendNames.addEventListener("click", () =>{
if (userInput.value ===""){
  alert ("Du måste fylla i fältet")
}
else {
  let newName = userInput.value;
  nameArray.push(userInput.value);
  let nameList = document.createElement("li");
messageWol.innerText ="";

// for loop som pushar ut namnet, går antagligen att göra med forEach också, jag vet, men är mer bekväm med for just nu
for (i =0; i <nameArray.length; i++){ 
nameList.innerText = newName;
queueList.appendChild(nameList)
};
}
})
let count = 0;

//fasttrack
fastTracking.addEventListener("click", () =>{
  let newFirst = document.createElement("li");
  let firstName = userInput.value;
  messageWol.innerText ="";
  //bekräftelseknapp:
  let reply = confirm("Placerar " + firstName + " först i kön. Gå vidare?")
  if (reply ==true) {
    //själva funktionen: 
    nameArray.unshift(firstName) 
    queueList.prepend(newFirst);
    newFirst.innerText = userInput.value + "(Fast Tracked)"
    newFirst.style.color ="coral";
    }  }  )

//checka in-knapp:
takeAwayFirst.addEventListener("click", () =>{ 

//byter färg när man klickar:
  if (takeAwayFirst.style.color === "coral")
  {
    takeAwayFirst.style.color="black";
    takeAwayFirst.style.backgroundColor="rgb(106, 206, 131)";
    takeAwayFirst.innerText= "CHECKA IN";
  }
  else { 
    takeAwayFirst.style.color="coral";
    takeAwayFirst.style.backgroundColor="black";

    //timer så den byter tillbaka efter några mikrosekunder:
    setTimeout(function(){
      takeAwayFirst.style.color="black";
    takeAwayFirst.style.backgroundColor="rgb(106, 206, 131)";
    takeAwayFirst.innerText= "CHECKA IN";}, 0005)} 

//om inga människor i kön:
if (nameArray.length <=0) {
  alert("There are no people in line to check in!")
}
else {
  let checkOutName = nameArray[0];
  let reply = confirm("Tar bort: " + checkOutName + " från listan. Är det OK?")
  if (reply ==true){
   nameArray.shift();
  queueList.removeChild(queueList.childNodes[0]);
   alert ("Incheckad!");

  //och så ta tillbaka meddelandet om det är tomt i listan igen:
  if (queueList.childElementCount ===0)
  {messageWol.innerText ="There’s currently no people standing in line"}

  //antal nöjda kunder:
  count++;
  checkoutparagraph.innerText = count + " antal incheckade idag!";
  checkoutparagraph.style.backgroundColor ="black";


}

}})
