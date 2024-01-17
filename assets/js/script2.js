var boardName = document.querySelector("#highName");
var boardScore = document.querySelector("#highScore");
var localScore = JSON.parse(localStorage.getItem("scoreslog"));

if (localScore === null) {
    boardName.textContent = ("No scores here yet");
} else {
boardName.textContent = (localScore.nameLocal  + "  " + localScore.scoreHere);
}
