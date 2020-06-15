var countdownEl = document.querySelector("#Timer");
var questionbox = document.getElementById("questions");
var HighScore = document.querySelector("dropdown-menu")
var body = document.getElementById("body");
var begintest = document.getElementById("begin-test");
const answerbox = document.getElementById('answer-buttons')
var secondsLeft = 60;
var score = 0;
var index = 0;
var secondindex = 0;
var answerindex = 0;

begintest.addEventListener("click", function(){
    //This will make the start button disappear when the test begins
    begintest.classList.add('evaporate');
    function Timer(){
        var timerInterval = setInterval(function(){
            secondsLeft --;
            //Should they answer incorrectly, take 5 seconds away from secondsLeft
            //Should they answer correctly, add 5 seconds to SecondsLeft 
            countdownEl.textContent = secondsLeft + " seconds";
            if (secondsLeft===10){
                alert("Better hurry up, time is running out")
            }

            if (secondsLeft===0){
                clearInterval(timerInterval);
                //Create a function for the final score should secondsLeft === 0 
            }
        }, 1000);   
    }
    Timer (); 
    showQuestions();

})

function showQuestions(){
    questionbox.textContent= questions[index].question;
    myDiv= document.createElement("div");
    myDiv.setAttribute("class","row")
    for (var i=0;i<questions[index].answers.length; i++){
        var button =document.createElement("button")
        button.setAttribute("type","button")
        button.textContent =questions[index].answers[i]
        myDiv.appendChild(button)
        
    }
    answerbox.appendChild(myDiv)
}

answerbox.addEventListener("click", function(event){
    if (event.target.innerHTML === questions[secondindex].correct) {
        console.log("you've got it right")
        alert("You've got it right"); 
        index++;
        secondindex++;
        myDiv.innerHTML = "";
        
    }
    else {secondsLeft -= 5}
    myDiv.innerHTML = "";
    index++;
    
    showQuestions();
})




var questions = [
    {
      question: 'What does CSS stand for?',
      answers: ['Cascading Style Sheet', 'Corrective Syntex System'],
      correct: 'Cascading Style Sheet',
    },
    {
      question: 'Inside which HTML element do we put the Javascript?',
      answers: ['<js>', '<script>', '<javascript>', '<scripting>'],
      correct: '<script>',  
     },
    {
      question: 'What does HTML stand for?',
      answers: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language'],
      correct: 'Hyper Text Markup Language'
    },
    {
      question: 'what property is used to change the font of an element in css?',
      answers: ['font-family', 'font-weight', 'font-style'],
      correct: 'font-family',
    }
  ]



//Present final score to user within a function


//Loop the timer in so that if the timer === 0 it will take user here 

//Place the option in for the User to put in Initals and score for their score to be recorded 

//Score will be loaded to the local storage 


