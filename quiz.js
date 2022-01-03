//* Navigation bar buttons:
let changingButton = document.getElementById("changebutt");
let retryButton = document.getElementById("yestryagain");

//* Changing background colors (with a little help from my friend CSS)

changingButton.addEventListener("click", () => {
if (document.body.style.backgroundColor === "thistle")
  {
    document.body.style.backgroundColor = "#282828";
    document.body.style.color = "#f4f4f4";
}
  else {
document.body.style.backgroundColor = "thistle";
document.body.style.color = "#282828";
}})

//* A button for "retry", which will refresh the page entirely
retryButton.addEventListener("click", () => {
    let refreshing = confirm("Are you sure? This is taking you back to the start of the quiz now!")
    if (refreshing ===true) {
        location.reload();
    }})

//* Quiz structure and questions:
let quiz = document.getElementById("quizHome");

const quizQuestions = [
  {
    question : "Which of the following is not one of Rapunzel's chores?",
    answers : {
      a: "Candle making",
      b: "Crochet", 
      c: "Chess",
    },
    correct : "b"
  },
  {
    question : "How many times does Cinderella loose control over her shoe?",
    answers : {
      a: "1",
      b: "2",
      c: "3",
    },
    correct : "c, that clumpsy bee"
  },
  {
    question : "How goes the dishonor rant that Mushu performs in Mulan?",
    answers : {
      a: "Dishonor on your whole family! Make a note of this: dishonor on you, dishonor on your cow!",
      b: "Dishonor on your whole ancestry line and all of your descendants and their associates",
      c: "Dishonor!! DISHONOR!! DIS-HONOOOOOR!"
    },
    correct : "a"
  },
  {
    question : "What's the first thing Jasmine says in response to Aladdin when he asks if she trusts him?",
    answers : {
      a: "What?",
      b: "I don't know",
      c: "I do",
    },
    correct: "a",
  },
  {
    question: "When was Disney founded?",
    answers: {
      a : "1934",
      b : "1923",
      c : "1945",
    },
    correct: "b",
  },
{
  question: "Who are the 'sinister cats' in Disney? (Sinister, not necessarily evil)",
  answers: {
    a: "Scar, Thomas O'Malley, Cheshire cat, Lucifer, Shere Khan, Felicia",
    b: "Scar, Cheshire cat, Felicia, Shere Khan",
    c: "Scar, Shere Khan, Felicia, Cheshire Cat, Lucifer",
  },
  correct: "c",
},
{
  question: "When was the Hercules movie released?",
  answers: {
    a: "1998",
    b: "1997",
    c: "1996",
  },
  correct: "b"
},
{
  question: "Who is Aladdin's father?",
  answers: {
    a: "A beggar in a cell",
    b: "The king of thieves",
    c: "A foreign prince",
  },
  correct: "b",
},
]

//*put the multiple choices in a separate array for the purpose of creating divs, hence practising two ways of creating buttons and such:
const quizQuestionsMultiple = [ {
// (plot twist: alla är rätt)
question: "Which ones of these great movies were released in the 80s?",
answers: {
  a: "Tron",
  b: "The Great Mouse Detective",
  c: "Who framed Roger Rabbit",
  d: "Oliver & Company",
  e: "The Little Mermaid",
},
correct: {
  a: "Tron",
  b: "The Great Mouse Detective",
  c: "Who framed Roger Rabbit",
  d: "Oliver & Company",
  e: "The Little Mermaid",
},
},
{
question : "Which ones of these are Disney villains?",
answers: {
  a: "Jafar",
  b: "Bruce",
  c: "Hades",
},
correct: {
  a: "Jafar",
  c: "Hades",
},
},]

//* creating an empty array for future divs with separate DIVs per question: 
let quizBodyArr = [];

//* creating HTML-radiobuttons for each available answer through looping through the object-array

quizQuestions.forEach((currentQuest, questNumb) => {
  let visibleArray = [];
  for (choice in currentQuest.answers){
    //* creating HTML and pushing
    visibleArray.push(`<input type="radio" class= "outLooped" id ="question${questNumb}" name="question${questNumb}" value="${choice}">
    ${currentQuest.answers[choice]}<br>
  `  )} 

  //*Pushing the array into an answers div, along with divs for questions and images, and then appending it by adding it into quizQuestions innerHTML. 
  quizBodyArr.push(
    `<div class="question"> ${currentQuest.question} </div> 
    <div class="answers1"> ${visibleArray.join('')} </div><br>`
  );
});
quiz.innerHTML = quizBodyArr.join('');
//*(see comments.txt) about join, but it's good to compare the answers if they are strings.

//*Checking answers:
let checkAnswersButt = document.getElementById("check");
let resultDiv = document.getElementById("reveal")
let numCorrect = 0;
let hiddenButt = false;

//*Adding eventlistener:
checkAnswersButt.addEventListener("click", ()=> {
//*hiding button to prevent double-insert of points:
  hiddenButt = true;
  if (hiddenButt === true) {
    checkAnswersButt.style.display="none";
  }
  //*the functions in the event:
  scoreResults();
  checkingForBonus();
  checkingForTricks();
  showResult();
}) //*end of addevent

//*Ordinary questions:
function scoreResults(){
 let gettingAnswersFromQuiz = document.querySelectorAll(".answers1"); 
quizQuestions.forEach((currentQ, qNumb) => {
    let gettingAnswers = gettingAnswersFromQuiz[qNumb];
    let userInput = `input[name=question${qNumb}]:checked`; 
    //*  ({}) is an empty object. (see comments.txt) 
    let userChoice = (gettingAnswers.querySelector(userInput) || {}).value; 
    if (userChoice === currentQ.correct){
      numCorrect++;}  
  })}
  
  //*now for the multiple answers nightmare: 
    let userTrick = [];
    let correctBonus = 0;
    let userBonus = [];
    let correctTrick = 0;
 
    function checkingForBonus(){
      let userchoiceBonus = document.querySelectorAll(`[name="Villains"]`);
      userchoiceBonus.forEach((checkbox)=> {
        if (checkbox.checked) {
          userBonus.push(checkbox.value);}
        });
        if (userBonus.indexOf("b") === -1){
                if (userBonus.length ===2){
                  correctBonus = 1;
                }
                else if(userBonus.length >0 && userBonus.length <2) {
                  correctBonus = 0; //*I actually wanted to add 0.5 points here but upon reading instructions, I decided against it, but leaving the else if for future use
                }}
         else {
             console.log("Wrong lever Kronk!");
           }};

  //* function for trickquestion:
  function checkingForTricks(){
  let userchoiceTrick = document.querySelectorAll(`[name="Movies"]`);
  userchoiceTrick.forEach((checkbox) => {
    if (checkbox.checked) {
      userTrick.push(checkbox.value);}
    })
    if (userTrick.length === userchoiceTrick.length){
      correctTrick = 1; 
    }
    else {
      console.log("Why do we even HAVE that lever?")
    }}

  //*Showing results: 
    let resultbox = document.createElement("div");
    let resulttext = document.createElement("p");
    resultDiv.appendChild(resultbox);
    resultbox.appendChild(resulttext);

//*showresult
function showResult(){
  let totalCorr = numCorrect + correctTrick + correctBonus;
  console.log(totalCorr);

  if (totalCorr >=7.5) {
    resulttext.innerHTML =`<b>Well done sir!<br> You got more than 75% right answers! Yay for you!</b><br><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGAyZ5S1-bhNN1utlwTp-OlmT-AOeetrVcw&usqp=CAU" width="500px"/> alt="Kronk is happy and saying mission accomplished" title="Kronk being satisfied with your work`
    resulttext.classList.add("verygoodsir");
  }
  else if (totalCorr >=5 && totalCorr<7.5){
    resulttext.innerHTML =`You got more than 50% right, but not all. Almost there!<br><br> <img src="https://www.boredpanda.com/blog/wp-content/uploads/2019/05/disney-movies-insults-comebacks-5cdeab08094b6__700.jpg" alt="Mushuu being angry at Mulan" title="Mushuu from Mulan insulting her (and you)" width="500px"/>`
    resulttext.classList.add("halfright");
   
  }else if (totalCorr >0 && totalCorr<5){ 
    let imagelosingToaRug = document.createElement("img");
    imagelosingToaRug.setAttribute('src','https://www.boredpanda.com/blog/wp-content/uploads/2019/05/5-5cdea2eba6efb__700.jpg');
    imagelosingToaRug.setAttribute("alt","Cusco being a prick");
    imagelosingToaRug.setAttribute("title","Cusco insulting some ladies");
    imagelosingToaRug.style.width="500px";
    resultbox.appendChild(imagelosingToaRug)
    resulttext.innerHTML ="You got only " + totalCorr + " right answers. With the greatest possible respect, maybe you should try again? <br> <br>"
    resultbox.classList.add("ImLosingToARug");
    
  } else {
    resulttext.innerHTML =`You got 0 right answers.<br> You poor fool, maybe try again?<br><img src="https://www.boredpanda.com/blog/wp-content/uploads/2019/05/disney-movies-insults-comebacks-5cdeb831c9db2__700.jpg" width="500px"
    alt="Scar sitting on a cliff, saying' I'm surrounded by idiots'"
    title="Scar is evil"
    />`
    resulttext.classList.add("youAreASadStrangeLittleManAndYouHaveMyPity");
  }
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

