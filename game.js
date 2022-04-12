var gameLetters = ["m", "a", "t"];
var player1Score = 0;
var player2Score = 0;


var player1Img = document.querySelector("#player1Img");
var player2Img = document.querySelector("#player2Img");
var winGame1Panel = document.querySelector("#winGame1Panel");
var winGame2Panel = document.querySelector("#winGame2Panel");
var player1ScorePanel = document.querySelector("#player1ScorePanel");
var player2ScorePanel = document.querySelector("#player2ScorePanel");


function compAttack(arr) {
    var randomNum = Math.floor(Math.random() * arr.length);
    return gameLetters[randomNum];
}

function startGame(e) {
    var userAttack = e.key;
    var comp = compAttack(gameLetters);

    if (gameLetters.indexOf(userAttack) === -1) {
        alert("Please, enter one of 'm a t' letters");
        return;
    }

    if (userAttack === comp) {
        console.log("DRAW-DRAW");

        player1Img.src = `./img/${userAttack}.png`;
        player2Img.src = `./img/${comp}.png`;

        winGame1Panel.innerHTML = "DRAW";
        winGame2Panel.innerHTML = "DRAW";

        winGame1Panel.classList.add("text-dark");
        winGame2Panel.classList.add("text-dark");


    } else if (userAttack === "t" && comp === "m" || userAttack === "m" && comp === "a" || userAttack === "a" && comp === "t") {
        console.log("USER WIN");

        player1Img.src = `./img/${userAttack}.png`;
        player2Img.src = `./img/${comp}.png`;

        player1Score++;
        player1ScorePanel.innerHTML = `Point: ${player1Score}`

        winGame1Panel.innerHTML = "WIN";
        winGame2Panel.innerHTML = "LOSE";

        winGame1Panel.classList.add("text-success");
        winGame2Panel.classList.remove("text-success");
        winGame1Panel.classList.remove("text-dark");
        winGame2Panel.classList.add("text-danger");
        winGame2Panel.classList.remove("text-dark");
        winGame1Panel.classList.remove("text-danger");


    } else if (userAttack === "m" && comp === "t" || userAttack === "t" && comp === "a" || userAttack === "a" && comp === "m") {
        console.log("COMP WIN");

        player1Img.src = `./img/${userAttack}.png`;
        player2Img.src = `./img/${comp}.png`;

        player2Score++;
        player2ScorePanel.innerHTML = `Point: ${player2Score}`

        winGame1Panel.innerHTML = "LOSE";
        winGame2Panel.innerHTML = "WIN";

        winGame1Panel.classList.add("text-danger");
        winGame2Panel.classList.remove("text-danger");
        winGame1Panel.classList.remove("text-dark");
        winGame2Panel.classList.add("text-success");
        winGame2Panel.classList.remove("text-dark");
        winGame1Panel.classList.remove("text-success");

    }

    console.log("------------------------")
    console.log("user", userAttack);
    console.log("comp", comp);
    console.log(player1Score)
    console.log(player2Score)
}


window.onkeypress = startGame;


















































// var player1Img = document.querySelector("#player1Img");
// var player2Img = document.querySelector("#player2Img");
// var winGame1Panel = document.querySelector("#winGame1Panel");
// var winGame2Panel = document.querySelector("#winGame2Panel");
// var player1ScorePanel = document.querySelector("#player1ScorePanel");
// var player2ScorePanel = document.querySelector("#player2ScorePanel");

// var arr = ["m", "a", "t"];

// function compAttack(arr) {

//     var randomNum = Math.floor(Math.random() * arr.length)
//     return arr[randomNum]
// }
// var comp = compAttack(gameArray);

// function startGame(e) {
//     var userAttack = e.key;

//     if (gameArray.indexOf(userAttack) === -1) {
//         alert('Ancaq M A T Heriflerden secin');
//         return;
//     } else if (userAttack === "m" && comp === "a") {
//         alert('User win');
//     } else if (userAttack === "t" && comp === "m") {
//         alert('User win');
//     } else if (userAttack === comp) {
//         alert('Draw-Draw');
//     } else {
//         alert('Comp Win');
//     }
// }
// window.onkeydown = startGame;