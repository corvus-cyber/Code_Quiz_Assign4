var countdownEl = document.querySelector("#Timer");
var HighScore = document.querySelector("dropdown-menu")
var body = document.getElementById("body");
var begintest = document.getElementById("begin-test");
var secondsLeft = 60;
var score = 0;


begintest.addEventListener("click", function(){
    begintest.classList.add('evaporate')
    function Timer(){
        var timerInterval = setInterval(function(){
            secondsLeft --;
            //Should they answer incorrectly, take 5 seconds away from secondsLeft
            //Should they answer correctly, add 5 seconds to SecondsLeft 
            countdownEl.textContent = secondsLeft + " seconds";

            if (secondsLeft===0){
                clearInterval(timerInterval);
                //Create a function for the final score should secondsLeft === 0 
            }
        }, 1000);   
    }
    Timer (); 
    //Issue: timer increases pace when start button is pressed multiple times 

    //Create multiple choice questions 

    //Make it so that it scores the rounds

})

//Present final score to user within a function


//Loop the timer in so that if the timer === 0 it will take user here 

//Place the option in for the User to put in Initals and score for their score to be recorded 

//Score will be loaded to the local storage 


