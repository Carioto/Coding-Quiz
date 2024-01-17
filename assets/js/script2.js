var boardName = document.querySelector("#highName");
var boardScore = document.querySelector("#highScore");
var localScore = JSON.parse(localStorage.getItem("scoreslog"));

boardName.textContent = (localScore.nameLocal);
boardScore.textContent = (localScore.scoreHere);

