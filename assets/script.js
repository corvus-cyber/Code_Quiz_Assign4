var countdownEl = document.querySelector("#Timer");
var title = document.getElementById("Header")
var questionbox = document.getElementById("questions");
var HighScore = document.querySelector("dropdown-menu")
var body = document.getElementById("body");
var begintest = document.getElementById("begin-test");
const answerbox = document.getElementById('answer-buttons')
var submitform = document.querySelector("form")
var secondsLeft = 60;
var score = 0;
var index = 0;
var secondindex = 0;
var answerindex = 0;
var timerInterval;


begintest.addEventListener("click", function () {
    //This will make the start button disappear when the test begins
    begintest.classList.add('evaporate');
    function Timer() {
        timerInterval = setInterval(function () {
            "Time: ", secondsLeft--;
            //Should they answer incorrectly, take 5 seconds away from secondsLeft
            //Should they answer correctly, add 5 seconds to SecondsLeft 
            countdownEl.textContent = secondsLeft + " seconds";
            if (secondsLeft === 10) {
                alert("Better hurry up, time is running out")
            }

            if (secondsLeft === 0) {
                showResults();

            }
        }, 1000);
    }
    Timer();
    showQuestions();

})

function showQuestions() {
    questionbox.textContent = questions[index].question;
    // myDiv = document.createElement("div");
    // myDiv.setAttribute("class", "row")
    answerbox.innerHTML="";
    for (var i = 0; i < questions[index].answers.length; i++) {
        var button = document.createElement("button")
        button.setAttribute("type", "button")
        button.textContent = questions[index].answers[i]
        button.setAttribute("click", i);
        button.setAttribute("index", index);
        button.setAttribute("id", "I" + index + i);
        button.classList.add("bttns");
        answerbox.appendChild(button)
        document.getElementById("I" + index + i).addEventListener("click", function (event) {
            console.log("Event target:", event.target)
            var indexQ = event.target.getAttribute("index")
            console.log("correct: ", event.target.getAttribute("click"))
            if (parseInt(event.target.getAttribute("click")) === questions[indexQ].correct) {
                console.log("you've got it right")
                alert("You've got it right");
            }
            else {
                secondsLeft -= 5;
                alert("You answered incorrectly; that means less time for you")
            }
            index++;
            answerbox.innerHTML = "";
            
            if (index < questions.length) {
                showQuestions()
            }
            else {
                showResults()
            }
        })
    }    
}


       
    
    

  


function showResults() {
    clearInterval(timerInterval);
    title.textContent = "Score: " + secondsLeft;
    answerbox.innerHTML= "";
    //this will reveal the submission form hidden in html
    submitform.classList.remove("evaporate")



    

}

//Question array that contains objects with the correct answers being recorded as the integer 
var questions = [
    {
        question: 'What does CSS stand for?',
        answers: ['Cascading Style Sheet', 'Corrective Syntex System'],
        correct: 0
    },
    {
        question: 'Inside which HTML element do we put the Javascript?',
        answers: ['<js>', '<script>', '<javascript>', '<scripting>'],
        correct: 1
    },
    {
        question: 'What does HTML stand for?',
        answers: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language'],
        correct: 1
    },
    {
        question: 'what property is used to change the font of an element in css?',
        answers: ['font-family', 'font-weight', 'font-style'],
        correct: 0
    }
]



//Present final score to user within a function


//Loop the timer in so that if the timer === 0 it will take user here 

//Place the option in for the User to put in Initals and score for their score to be recorded 

//Score will be loaded to the local storage 


