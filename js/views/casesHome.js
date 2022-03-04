const homePageWrapper = document.getElementById("gridCasesHomePage");

let casesArray = [];

const homePageGrid = document.createElement("div");
homePageGrid.classList.add("cases__article--content")
homePageWrapper.appendChild(homePageGrid);

const drawHomeCases = (casesInfo) => {

  casesInfo.forEach(item => {
    const listRole = document.createElement("div");
    listRole.classList.add("w-dyn-list");

    homePageGrid.appendChild(listRole);

    const listItem = document.createElement("div");
    listItem.classList.add("w-dyn-item");

    listRole.appendChild(listItem);

    const articleItem = document.createElement("article");
    articleItem.classList.add("case-item");
    articleItem.classList.add("border-item--third");
    articleItem.classList.add("background--grid");
    articleItem.style.backgroundImage=`url(${item.extra.extraimages.file01.url})`

    

    listItem.appendChild(articleItem);

    articleItem.innerHTML=`
    <div class="case-number">
    <a href="${item.sources.link}"
    target="_blank">
    <h4 class="text--white">
    ${item.headings.title}
    </h4>
    <p class="text--white text--xs text--bold">
    ${item.headings.subtitle}</p>
    </a>
    <span class="wrapper-button-case-item">
    <a href="${item.sources.link}"
    class="text-button
    w-inline-block"
    target="_blank">
    <div class="wrapper-button-text">
    <p class="text-style-button text--white text--xs">
    Se mer
    </p>
    </div>
    </a>
    </span>
    </div>

    `
  })
  
}



//*----fetching json
async function fetchingJsonHome() {
  const response = await fetch("./js/data/cases.json");
  const casesInfo = await response.json();
  casesArray = [...casesInfo.cases];
  console.log(casesArray);
  const caseHomeDraw = casesArray.map(item => {
    return item;
  })
  drawHomeCases(caseHomeDraw);

  }
  
  fetchingJsonHome();