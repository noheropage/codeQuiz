var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#start")
var questionEl = document.querySelector(".quiz");
var askEl = document.querySelector(".ask");
var answerEl = document.querySelectorAll(".answers");
var startEl = document.querySelector(".starter");

var secondsLeft = 10;
var score = 0;

var questions = [
    {
        ask: "What is your favorite color?",
        answer: ["blue", "red", "yellow", "green"],
        correct: "red",
    },

]

// TODO: timer displayed (upper right hand corner perhaps) 
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            // TODO: 
            // timesOut();
        }
    }, 1000);
}

// TODO: remove time for wrong answers 
function wrongAnswer() {
    // remove time 
    // display message 
    // move to next question 
}

function rightAnswer() {
    // display message 
    // move to next question 
}
// TODO: start button 
startButton.addEventListener("click", function () {
    setTime();
    // Hides starting text 
    startEl.style.visibility = "hidden";
    generateQuestion();
    // console.log(answerEl[1].value)
})

// TODO: generate question with multiple answers 
function generateQuestion() {
    // questionEl.style.visibility = "visible";
    // questionEl.textContent = "Is this working?"
    for (var i=0; i < questions.length; i++) {
        askEl.textContent = questions[i].ask;
        for (var n=0; n < questions[i].answer.length; n++){
            console.log(answerEl[n].textContent)
            console.log(questions[i].answer[n])
            answerEl[n].textContent = questions[i].answer[n]
            console.log(answerEl[n].textContent)
        }  
    }
}

function multipleChoice () {

}
// TODO: end when timer hits 0 or run outta Qs 

// TODO: save score via initials 