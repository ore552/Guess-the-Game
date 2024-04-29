var btn = document.querySelector(".btn");
var remark = document.querySelector(".remark");
var guessedGame = document.getElementById("guessed-game").value;
var scoreCount = document.querySelector(".score-count");
var score = document.querySelector(".score");
var count = document.querySelector(".count");

remark.classList.add("hide");

var scoreCount = document.querySelector(".score-count");
var scoreValue = document.querySelector(".score");
var countValue = document.querySelector(".count");

var count = 0;
var score = 0;

scoreValue.innerHTML = score;
countValue.innerHTML = count;

btn.addEventListener("click", (e)=>{
    e.preventDefault();



    var guessedGame = document.getElementById("guessed-game").value;

    var remark = document.querySelector(".remark");
    var remarkStm = document.querySelector(".remark-stm");
    var gameName = document.querySelector(".game-name");
    var gameImg = document.querySelector(".game-img");
    

    let games = [
    "Chess",
     "Checkers",
      "Ludo",
       "Go Fish",
        "Connect 4",
         "Uno",
          "Minecraft",
           "Fortnite",
            "Roblox",
             "Call of Duty",
              "Smash Bros",
               "Legend of Zelda",
                "Super Mario Kart",
                 "Tetris",
                  "Poker",
                   "Super Mario Land",
                    "Fall Guys",
                     "Among Us",
                     "Subway Surfers",
                     "Temple Run"];

    if (guessedGame == "") {
        setTimeout(()=>{
            remark.classList.remove("hide");
            remarkStm.innerHTML = "Please guess a game";
            remark.style.backgroundColor = "red";

            setInterval(()=>{
                remark.classList.add("hide");
            }, 2000);
        }, 200);
    } else {
       remark.classList.remove("hide");
       var indexNumber = Math.round(Math.random() * (games.length - 1));
       gameName.innerHTML = games[indexNumber];
       guessedGame = guessedGame.toUpperCase();
       count++
       countValue.innerHTML = count;
       if ((gameName.innerHTML.toUpperCase()) == guessedGame) {
        remarkStm.innerHTML = "Congratulations, You got one right! Let's go get the next one too!";
        remark.style.backgroundColor = "green";
        remark.style.color = "white";
        score++
        scoreValue.innerHTML = score;
       } else {
        remarkStm.innerHTML = "Sorry, you didn't get it..."
        remark.style.backgroundColor = "red";
        remark.style.color = "white";
        clear();
       };
       gameImg.src = "images/"+games[indexNumber]+".png";
    };              
});

function clear() {
    document.getElementById("guessed-game").value = "";
    console.log("cleared");
    // guessedCar = " "
}