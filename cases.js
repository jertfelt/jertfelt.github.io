
//*---variables

let casesArray = [];

//*----fetching json
async function fetchingJson() {
const response = await fetch("./js/data/CSSNamespaceRule.json");
const casesInfo = await response.json();
casesArray = [...casesInfo.cases];
console.log(casesArray);



}