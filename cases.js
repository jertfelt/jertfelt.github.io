
//*---variables
const caseSectionAll = document.getElementsByClassName("cases__all");
console.log(caseSectionAll);

const caseArticleElmen = document.createElement("article");
caseArticleElmen.classList.add("cases__article"); 

let casesArray = [];


//*----draw JSON files in cases
const drawCases = (casesInfo) => {

  casesInfo.forEach(item => {

  const articleContent = document.createElement("div");
  articleContent.classList.add("cases__article--content");
  articleContent.classList.add("container--large");
  articleContent.classList.add("padding--m");

  articleContent.innerHTML= `
  <hr>
  <div class="cases__article--column">
  <h2 class="text--light">"${item.headings.title}" </h2>
  <h3 class ="text--light">"${item.description.subject}"</h3> 
    <a href="${item.sources.link}" target="_blank">
      <img class="drop--blue border-item--third"
      src="${item.sources.image.url}"
      alt ="${item.sources.imagealt}"
      title="Gå till sidan"
      aria-label="Go to page"></img>
    </a>
  </div>

  <div class="cases__article">
  <a class="text--xxs text--light text--bold"
  target="_blank"
  href="${item.sources.link}">
  Se projektet här</a>
  <p class="text--white text--xs text--width70 margin-top-xxsmall">
  ${item.description.text}
  </p>
  <br/>
  <a href="${item.sources.githublinks.github}"
  target="_blank"
  class="text--light text--xxs text--center text--bold">
  Github</a>
  </div>
  `
  caseArticleElmen.appendChild(articleContent);

})

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
