gameOver = false;
var i=0;
var question = document.querySelector(".question");
var begin = document.querySelector("#startBut");
var boxZero = document.querySelector(".zero");
var boxOne = document.querySelector(".one");
var boxTwo = document.querySelector(".two");
var boxThree = document.querySelector(".three");
var boxContainer = document.querySelector(".boxContainer");
var retRes = document.querySelector(".response");
var displayTimer = document.querySelector("#timer");
var seeScores = document.querySelector(".scoresheet");
var newestScore = document.querySelector(".newScore");
var secTimer = 75;
var numCorrect = 0;
scoreSubmit = document.querySelector("#subUp");
var nameLocal = document.querySelector('.newName');
var notHigh = document.querySelector('#notHigh');
const quizQuest = [
    {
        quest:"Commonly used data types DO NOT include:",
        options:["strings", "booleans", "alerts", "numbers"],
        correct:2
    },
    {
        quest: "Which of the following is a falsy",
        options: ["Nan", "null", "undefined", "all the above"],
        correct: 3
    },
    {
        quest: "Which of the following is a loop statment:",
        options: ["do...while", "read...until", "exit...after", "perform....next"],
        correct: 0
    },
    {
        quest: "How do you properly declare a variable:",
        options: ["set x=0", "var x = 15", "x = 1", "variable x = 12",],
        correct: 1
    },
    {
        quest: "Which is not correct syntax for the storage interface:",
        options: [".setItem", ".getItem", ".clear", "All are acceptable properties"],
        correct: 3
    },
    {
        quest: "Arrays in JavaScript can be used to store:",
        options: ["booleans", "other arrays", "numbers and strings", "all the above"],
        correct: 3
    },
];

function countBack() {
var timer = setInterval(function(){
        displayTimer.textContent ="Time: " + secTimer + " Seconds";
        secTimer--;
        if(secTimer === 0 || gameOver === true){
            displayTimer.textContent ="Time: " + secTimer + " Seconds";
            clearInterval(timer);
        }
    },1000);
}
// Display invitation to begin quiz
// Hide option boxes
seeScores.style.display = "none";
boxZero.style.display = "none";
boxOne.style.display = "none";
boxTwo.style.display = "none";
boxThree.style.display = "none";
question.textContent = ("Try to answer the following code-related questions within the time frame. Keep in mind that incorrect answers will penalize your time by ten seconds!");

//Hide begin button reveal answer elements
function startTest() {
    // event.preventDefault();
    // hide start button
    // Display option boxes
    begin.style.display = "none";
    boxZero.style.display = "block";
    boxOne.style.display = "block";
    boxTwo.style.display = "block";
    boxThree.style.display = "block"; 
    question.textContent = "";
    // start timer
    countBack();
    // Ask Questions
    questionTT();
};
//Display question and possible answers
function questionTT() {
    var displayQuest = document.querySelector("#displayQuestion");
    displayQuest.textContent = quizQuest[i].quest;
    var choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = quizQuest[i].options[index]; 
    });
};
//check the answer, end game if no more questions
function checkAnswer(event) {
    var element = event.target;
    var valueAtt = element.getAttribute("value");
    if (valueAtt == quizQuest[i].correct){
        retRes.textContent ="Correct!";
        numCorrect++;
    }else{
        retRes.textContent ="Incorrect!";
        secTimer= secTimer-10;
    }
    i++;
    if (i === quizQuest.length) {
        gameOver = true;
        endScore();
    } else {
    questionTT();}
    }
// Hide question/answer dialog, 
function endScore() {
    var scoreHere = secTimer++;
    question.textContent = "";
    boxZero.style.display = "none";
    boxOne.style.display = "none";
    boxTwo.style.display = "none";
    boxThree.style.display = "none";
    retRes.textContent=("Quiz Over");
    seeScores.style.display = "block";
    newestScore.textContent = scoreHere;

    scoreSubmit.addEventListener("click", function() {
        var highLocal = JSON.parse(localStorage.getItem('scoreslog'));
        if (highLocal.scoreHere < scoreHere){
        var lsJSON = {
            nameLocal: nameLocal.value,
            scoreHere: scoreHere
        };
        localStorage.setItem("scoreslog", JSON.stringify(lsJSON));
    }else{notHigh.textContent="Sorry, your score is not a high score."}
    })
    
};
// Begin test when start button pressed
begin.addEventListener("click", startTest);
// Check answer when choice is made
boxContainer.addEventListener("click", checkAnswer);