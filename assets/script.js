var countdownEl = document.querySelector("Timer");
var HighScore = document.getElementById("Scores")
var body = document.getElementById("body");
var button = document.getElementById("begin-test");
var secondsLeft = 60;


function Timer(){
    var timerInterval = setInterval(function(){
        secondsLeft --;
        countdownEl.textContent = secondsLeft + "seconds";

        if (secondsLeft===0){
            clearInterval(timerInterval);
            //Create a function for the final score
        }
    }, 1000);

}