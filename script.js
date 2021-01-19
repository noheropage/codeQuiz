var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#start")
var questionEl = document.querySelector(".quiz");
var askEl = document.querySelector(".ask");
var answerEl = document.querySelectorAll(".answers");
var startEl = document.querySelector(".starter");
var optionsEl = document.querySelector(".options");

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
})

// TODO: generate question with multiple answers 
function generateQuestion() {
    for (var i = 0; i < questions.length; i++) {
        askEl.textContent = questions[i].ask;
        var rightAnswer = questions[i].correct;
        console.log(rightAnswer);
        for (var n = 0; n < questions[i].answer.length; n++) {
            answerEl[n].textContent = questions[i].answer[n]
        }
        optionsEl.addEventListener("click", function (event) {
            var element = event.target;
            if (element.matches("button")) {
                var input = element.textContent;
                if (input === rightAnswer) {
                    console.log("Winner!")
                }
            }
        })

    }
}


// TODO: end when timer hits 0 or run outta Qs 

// TODO: save score via initials 