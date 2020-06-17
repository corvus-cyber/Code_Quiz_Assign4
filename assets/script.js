//This accesses where the timer will be stored in html
var countdownEl = document.querySelector("#Timer");
//This accesses the main header of the container
var title = document.getElementById("Header")
//This is where the question will be presented
var questionbox = document.getElementById("questions");
//This dropdown menu will serve as the spot for the highscores to be placed
var HighScore = document.querySelector(".dropdown-menu");
//This accesses the begin test button
var begintest = document.getElementById("begin-test");
//This is where the answer buttons will be placed
const answerbox = document.getElementById('answer-buttons');
//This is the submit form where initials and scores will be placed for submission
var submitform = document.querySelector("form");
//The submit button that will push the scores into local storage
var submitbttn = document.querySelector("#Submitbttn");
//This is the actual box that the initials of the user will be placed in 
var initials = document.querySelector("#initials");


var secondsLeft = 60;
var index = 0;
var timerInterval;

//var scoresList = localStorage.getItem("key") ?  || [
var scoreList = []
if (localStorage.getItem("key")) {
    scoreList = JSON.parse(localStorage.getItem("key"))

}

//This function will present the previous scores recorded and storaged in the local storage 
function showScores() {
    HighScore.innerHTML = "";
    for (var i = 0; i < scoreList.length; i++) {
        console.log("HERE:", scoreList[i][0] + scoreList[i][1])
        var par = document.createElement("p");
        par.innerText = scoreList[i][0] + " " + scoreList[i][1]
        HighScore.appendChild(par)
    }
}

//This is placed here so that the user can immediately see their score on the board without having to reset the page
showScores()

//This function focuses on beginning the test
begintest.addEventListener("click", function () {
    //This will make the start button disappear when the test begins
    begintest.classList.add('evaporate');
    //Timer interval that will count down 1 per second, ending the test when it reaches zero.
    function Timer() {
        timerInterval = setInterval(function () {
            secondsLeft--;
            countdownEl.textContent = "Time: " + secondsLeft + " seconds";
            if (secondsLeft === 10) {
                alert("Better hurry up, time is running out")
            }

            if (secondsLeft === 0) {
                showResults();

            }
        }, 1000);
    }
    Timer();
    //When the timer begins it will call upon the show questions function
    showQuestions();

})

//This function will bring the questions and answers stored within the array below and populate them on the webpage
function showQuestions() {
    questionbox.textContent = questions[index].question;
    //This clears out the answerbox each time the function is called upon to keep from annotating
    answerbox.innerHTML = "";
    //This for loop will bring forward the proper question and potential answers, giving each answer a button and a unique ID
    for (var i = 0; i < questions[index].answers.length; i++) {
        var button = document.createElement("button")
        button.setAttribute("type", "button")
        button.textContent = questions[index].answers[i]
        button.setAttribute("click", i);
        button.setAttribute("index", index);
        button.setAttribute("id", "I" + index + i);
        button.classList.add("bttns");
        answerbox.appendChild(button)
        //This function will listen for the click of a button. 
        //The function will then compare the button with the "correct" integer contained in the array.
        //If the "click" contained in the button clicked equals the correct integer, the user won't be penalized.
        document.getElementById("I" + index + i).addEventListener("click", function (event) {
            console.log("Event target:", event.target)
            var indexQ = event.target.getAttribute("index")
            console.log("correct: ", event.target.getAttribute("click"))
            if (parseInt(event.target.getAttribute("click")) === questions[indexQ].correct) {
                console.log("you've got it right")
                alert("You've got it right");
            }
            //If they click the wrong button, they will have ten seconds taken off their remaing time
            else {
                secondsLeft -= 10;
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
//This function brings forward the submit form, removing the class keeping it hidden
function showResults() {
    clearInterval(timerInterval);
    questionbox.innerHTML = "";
    answerbox.innerHTML = "";
    title.textContent = "Score: " + secondsLeft;
    //this will reveal the submission form hidden in html
    submitform.classList.remove("evaporate")

}
// This will take the users entered initals and their time score and store it within local storage
submitbttn.addEventListener("click", function (e) {
    e.preventDefault();
    var userint = initials.value
    if (userint.length > 2 || initials.value.length == 0) {
        alert("You need at most two characters")
    }
    else {
        var p = " ";
        p = [userint, secondsLeft];
        console.log("P:", p);
        scoreList.push(p);
        localStorage.setItem("key", JSON.stringify(scoreList));
        showScores();
        //This will reload the page to its beginning stage 
        location.reload();
    }
})


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



// TODO - Retrieve local storage high scores and populate the dropdown when the app starts


