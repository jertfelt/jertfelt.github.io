
//*---variables
const caseSectionAll = document.getElementsByClassName("cases__all")[0];
console.log(caseSectionAll);

const caseArticleElmen = document.createElement("article");
caseArticleElmen.classList.add("cases__article");

caseSectionAll.appendChild(caseArticleElmen);


const caseGridElem = document.createElement("div");
caseGridElem.classList.add("cases__article--content");
caseGridElem.classList.add("container--large");
caseGridElem.classList.add("padding--m");

caseArticleElmen.appendChild(caseGridElem);

let casesArray = [];


//*----draw JSON files in cases
const drawCases = (casesInfo) => {

  casesInfo.forEach(item => {

    const articleContent = document.createElement("article");


  articleContent.innerHTML= `
  <article class="cases__article--item">
  <div class="cases__article--column">
  <span>  <h3 class="text--light text--bold ">
  ${item.headings.title} </h3>
  <h4 class ="text--white">
  ${item.description.subject}</h4>
  </span>
  <div class="cases__article--imgcolumn">
  <a href="
    ${item.sources.link}"
    target="_blank">
      <img class="cases__img"
      src="${item.sources.image.url}"
      alt="${item.sources.imagealt}"
      title="Gå till sidan"
      aria-label="Go to page"></img>
    </a>
    </div>

  </div>

  <div class="cases__article--right">
  <a class="text--s text--light"
  target="_blank"
  href=${item.sources.link}>
  Se projektet här</a>
  <p class=" text--light text--xxs cases__tags">${item.description.tag}</p>
  <p class="text--white text--xs">
  ${item.description.text}
  </p>
  <br>
  <a href="${item.sources.githublinks.github}"
  target="_blank"
  class="text--light text--xs text--center text--bold link--margin">
  <button class="button--square">
  Kolla in projektet på github</button></a>
  </div>
  </article>
  `
  caseGridElem.appendChild(articleContent);

})

}

//*----fetching json
async function fetchingJson() {
const response = await fetch("./js/data/cases.json");
const casesInfo = await response.json();
casesArray = [...casesInfo.cases];

const caseDraw = casesArray.map(item => {
  return item;
})
drawCases(caseDraw);
}

fetchingJson();


/* <a href="
${item.sources.link}"
target="_blank">
  <img class="drop--blue border-item--third"
  src="${item.sources.image.url}"
  alt="${item.sources.imagealt}"
  title="Gå till sidan"
  aria-label="Go to page"></img>
</a> */