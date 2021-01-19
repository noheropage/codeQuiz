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
    {
        ask: "What is your quest?",
        answer: ["Holy Grail", "Spinach", "Catch em All", "Dragons"],
        correct: "Holy Grail",
    },
    {
        ask: "Where should we go for dinner?",
        answer: ["Taco Bell", "Pizza Hut", "Combo", "Anywhere else"],
        correct: "Combo",
    }

]

// TODO: timer displayed (upper right hand corner perhaps) 
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            // TODO: 
            timesOut();
        }
    }, 1000);
}

// TODO: remove time for wrong answers 
function message() {
    var feedbackEl = document.createElement("div");
    feedbackEl.textContent = "Winner!";
    optionsEl.appendChild(feedbackEl);
}
// TODO: start button 
startButton.addEventListener("click", function () {
    setTime();
    // Hides starting text 
    startEl.style.visibility = "hidden";
    questionEl.style.display = "block";
    generateQuestion(0);
})

var rightAnswer;
// TODO: generate question with multiple answers 
function generateQuestion(i) {
    if (i == questions.length) {
        timesOut();
    } else {
        askEl.textContent = questions[i].ask;
        rightAnswer = questions[i].correct;
        console.log(rightAnswer);
        for (var n = 0; n < questions[i].answer.length; n++) {
            answerEl[n].textContent = questions[i].answer[n]
        }
        optionsEl.addEventListener("click", function (event) {
            var element = event.target;
            if (element.matches("button")) {
                var input = element.textContent;
                if (input === rightAnswer) {
                    message();
                    score++;
                }
                i++;
                generateQuestion(i);
            } 
        })
    }
}


// TODO: end when timer hits 0 or run outta Qs 
function timesOut() {
    // hide current question
    questionEl.style.display = "none";
    // display score and ask for initials
    startEl.style.visibility = "visible";
    startEl.innerHTML = "<h1> Game Over </h1>"
    var initials = document.createElement("input");
    initials.setAttribute("type", "initials")
    initials.setAttribute("placeholder", "Enter Initials Here")
    startEl.appendChild(initials)
    // display scoreboard 
}

// TODO: save score via initials 