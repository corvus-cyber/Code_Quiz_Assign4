var countdownEl = document.querySelector("#Timer");
var questionbox = document.getElementById("questions");
var HighScore = document.querySelector("dropdown-menu")
var body = document.getElementById("body");
var begintest = document.getElementById("begin-test");
const answerbox = document.getElementById('answer-buttons')
var secondsLeft = 60;
var score = 0;
var index = 0;


begintest.addEventListener("click", function(){
    //This will make the start button disappear when the test begins
    begintest.classList.add('evaporate');
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
    showQuestions();
     

    //Create multiple choice questions 

    //Make it so that it scores the rounds

})

function showQuestions(){
    questionbox.textContent= questions[index].question
    var myDiv= document.createElement("div")
    myDiv.setAttribute("class","row")
    //JSON.stringify(answers);
    for (var i=0;i<questions[index].answers.length; i++){
        var button =document.createElement("button")
        button.setAttribute("type","button")
        button.textContent =questions[index].answers[i]
        myDiv.appendChild(button)
        
    }
    answerbox.appendChild(myDiv)
}

answerbox.addEventListener("click", function(event){
    if (event.target.innerHTML === questions.correct) {
        console.log("you've got it right")
        alert("You've got it right");
        
    }
})




var questions = [
    {
      question: 'What does CSS stand for?',
      answers: ['Cascading Style Sheet', 'Corrective Syntex System'],
      correct: ['Cascading Style Sheet']
      
    },
    // {
    //   question: 'Inside which HTML element do we put the Javascript?',
    //   answers: [
    //     { text: '<js>', correct: false },
    //     { text: '<script>', correct: true },
    //     { text: '<javascript>', correct: false },
    //     { text: '<scripting>', correct: false }
    //   ]
    // },
    // {
    //   question: 'What does HTML stand for?',
    //   answers: [
    //     { text: 'Home Tool Markup Language', correct: false },
    //     { text: 'Hyper Text Markup Language', correct: true },
    //     { text: 'Hyperlinks and Text Markup Language', correct: false }
    //   ]
    // },
    // {
    //   question: 'what property is used to change the font of an element in css?',
    //   answers: [
    //     { text: 'font-family', correct: true },
    //     { text: 'font-weight', correct: false },
    //     { text: 'font-style', correct: false}
    //   ]
    // }
  ]



//Present final score to user within a function


//Loop the timer in so that if the timer === 0 it will take user here 

//Place the option in for the User to put in Initals and score for their score to be recorded 

//Score will be loaded to the local storage 


