var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#start")
var questionEl = document.querySelector(".quiz");
var askEl = document.querySelector(".ask");
var answerEl = document.querySelectorAll(".answers");
var startEl = document.querySelector(".starter");
var optionsEl = document.querySelector(".options");

var secondsLeft = 60;
var score = 0;
var timerInterval;

var questions = [
    {
        ask: "Which of the following best describes a Web API?",
        answer: ["Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions.",
            "Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.",
            "Web APIs are a part of the JavaScript language itself and are built into your browser.",
            "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."],
        correct: "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript.",
    },
    {
        ask: "Which of the following would change an element's background to red?",
        answer: ['element.setAttribute("class", "background: red");',
            'element.setAttribute("red");',
            'element.setAttribute("style", "red");',
            'element.setAttribute("style", "background-color: red");'],
        correct: 'element.setAttribute("style", "background-color: red");',
    },
    {
        ask: 'How would you append the following to the DOM? var myDiv = document.createElement(""div"");',
        answer: ["myDiv.appendChild.document.body;",
            "document.body.appendChild = myDiv;",
            'document.body.appendChild("div");',
            "document.body.appendChild(myDiv);"],
        correct: "document.body.appendChild(myDiv);",
    },
    {
        ask: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
        answer: ["setInterval(myTimer, 3)",
            "setInterval(myTimer, 3000)",
            "setInterval(myTimer, 300)",
            "setInterval(myTimer, 30)"],
        correct: "setInterval(myTimer, 3000)",
    },
    {
        ask: "Which attribute would we use to send an alert to the user when they click a specific element?",
        answer: ["ontoggle=\"alert('You clicked me.')\"",
            "onclick=\"alert('You clicked me.')\"",
            "onclose=\"alert('You clicked me.')\"",
            "onchange=\"alert('You clicked me.')\""],
        correct: "onclick=\"alert('You clicked me.')\"",
    },
    {
        ask: "While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?",
        answer: ["event.stopPropagation()",
            "event.preventDefault()",
            "event.dispatchEvent()",
            "event.stopAction()"],
        correct: "event.preventDefault()",
    },
    {
        ask: "You need to add an event listener to an element, pressEl, that checks to see if the element has been clicked and then runs myFunction(). Which of the following would you add to your code?",
        answer: ['pressEl.addEventListener("keydown", myFunction())',
            'pressEl.addEventListener("click", myFunction)',
            'addEventListener(pressEL, "click", myFunction)',
            'addEventListener(pressEL, "mouseover", myFunction())'],
        correct: 'pressEl.addEventListener("click", myFunction)',
    },
    {
        ask: "Your colleague notices that when she clicks on a <p> element on her page, handlers run on <p> and on <p>'s parent elements as well. She asks you to help her debug. Which of the following is most likely?",
        answer: ['The parent node of <p> is triggering a bubbling event that is bubbling down towards <p> when it is clicked.',
            'She added an event listener in the wrong place in her html file.',
            'She forgot to add event.preventDefault() in her script.js file.',
            "A bubbling event is occurring that starts with the target element, <p>, and is then running handlers on <p>'s parent and other ancestors."],
        correct: "A bubbling event is occurring that starts with the target element, <p>, and is then running handlers on <p>'s parent and other ancestors.",
    },
    {
        ask: "Which property can you use in order to implement event delegation?",
        answer: ['event.preventDefault()',
            'event.target',
            'event.stopPropagation()',
            'event.addEventListener()'],
        correct: 'event.target',
    },
    {
        ask: "Which statement best describes what is happening to data when it is persisted to local storage.",
        answer: ['The data is stored in the client or browser.',
            'The data is stored under the Applications tab in Chrome Dev Tools.',
            'The data is stored in the database in the backend.',
            'The data is stored in the window called localStorage.'],
        correct: 'The data is stored in the client or browser.',
    },
]

// timer displayed (upper right hand corner perhaps) 
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timesOut();
        }
    }, 1000);
}


function message(test) {
    // passes "correct" or "wrong" depending on user's choice 
    document.getElementById("message").innerHTML = "<hr>" + test
    // message will display for one second before disappearing 
    setTimeout(function () {
        document.getElementById("message").innerHTML = "";
    }, 1000);

}
startButton.addEventListener("click", function () {
    setTime();
    // Hides starting text 
    startEl.style.visibility = "hidden";
    questionEl.style.display = "block";
    generateQuestion(0);
})

// TODO: eval location of these variables 
var rightAnswer;
var i = 0;
function generateQuestion(i) {
    if (i === questions.length) {
        timesOut();
    } else {
        askEl.textContent = questions[i].ask;
        rightAnswer = questions[i].correct;
        // console.log(rightAnswer);
        for (var n = 0; n < questions[i].answer.length; n++) {
            answerEl[n].textContent = questions[i].answer[n]
        }
    }
}
// TODO: test accuracy of questions with new function setup 
optionsEl.addEventListener("click", function (event) {
    var element = event.target;
    // console.log(element)
    if (element.matches("button")) {
        var input = element.textContent;
        if (input === rightAnswer) {
            message("Correct!");
            score++;
            i++;
            generateQuestion(i)
        } else {
            message("Wrong!")
            secondsLeft -= 10;
            i++;
            generateQuestion(i)
        }
        // i++;
        // console.log(i)
        // generateQuestion(i);
    }
})
var initials;
// var name;
var submit;
var scores = [];


var storedInitials = JSON.parse(localStorage.getItem("Initials"));
var storedScores = JSON.parse(localStorage.getItem("Scores"))
console.log(storedInitials)
console.log(storedScores)
// console.log(storedScores.score)
// storedScores = storedScores || {};
// console.log(storedScores)
if (storedInitials == false || storedInitials == null || storedInitials == undefined) {
    var arrScores = [];
    var arrInitials = [];
    console.log("test");
} else {
    arrScores = [storedScores];
    arrInitials = [storedInitials];
}


console.log(arrInitials)
console.log(arrScores);
// arrInitials.push("anything")
// console.log(arrInitials);
function timesOut() {
    setTimeout(function () {
        timeEl.textContent = "Time: 0";
        // hide current question
        questionEl.style.display = "none";
        // display score and ask for initials
        startEl.style.visibility = "visible";
        startEl.innerHTML = "<h1> Game Over </h1> <br> <h4> Final Score: " + score + "</h4>"
        var initials = document.createElement("input");
        var submit = document.createElement("input");
        submit.setAttribute("type", "submit")
        submit.setAttribute("class", "btn btn-primary")

        initials.setAttribute("type", "text")
        initials.setAttribute("placeholder", "Enter Initials Here")
        startEl.appendChild(initials)
        startEl.appendChild(submit)

        submit.addEventListener("click", function (event) {
            event.preventDefault();
            // var initialText = initials.value;
            // scores.push(initialText);
            // initials.value="";
            // var storedScores = JSON.parse(localStorage.getItem("scores"));
            var scores = {
                initial: initials.value,
                score: score
            }
            console.log(scores)
            arrInitials.push(initials.value);
            arrScores.push(score)
            console.log(arrInitials)
            console.log(arrScores);
            localStorage.setItem("Initials", JSON.stringify(arrInitials))
            localStorage.setItem("Scores", JSON.stringify(arrScores))
            // if (!storedScores) {
            //     storedScores = []
            // }
            // scores.initial += initials.value + " ";
            // scores.score += score + " ";

            // arrInitials = scores.initial.split(" ")
            // arrScores = scores.score.split(" ")
            // console.log(scores.initial[0])
            // console.log(scores.score[0])
            // localStorage.setItem("scores", JSON.stringify(scores))
            // storeScores();
            renderScores();
            // storeScores();

            // var scoreBoard = JSON.parse(localStorage.getItem("scores"))
            // startEl.innerHTML = scoreBoard.initial + " with a score of " + scoreBoard.score

        })

        // display scoreboard 

    }, 500)
}

function storeScores() {
    localStorage.setItem("Initials", JSON.stringify(arrInitials))
    localStorage.setItem("Scores", JSON.stringify(arrScores))

}

var highScores = [];
var clearBtn = document.createElement("button");
function renderScores() {
    startEl.style.display = "none"
    questionEl.style.display = "block"
    questionEl.innerHTML = "<h1> Highscores </h1> <hr>"
    var scoreList = document.createElement("ul");
    questionEl.appendChild(scoreList)

    // var scoreBoard = JSON.parse(localStorage.getItem("scores"))

    // arrInitials = scores.initial.split(" ")
    // arrScores = scores.score.split(" ")
    arrInitials = JSON.parse(localStorage.getItem("Initials"))
    arrScores = JSON.parse(localStorage.getItem("Scores"))
    if (!scores) {
        scoreList.appendChild("Empty!");
    } else {
        for (i = 0; i < arrInitials.length; i++) {
            var li = document.createElement("li")
            // console.log(arrInitials.length);
            li.textContent = arrInitials[i] + " with a score of " + arrScores[i]

            scoreList.appendChild(li);
        }
    }


    // highScores += scoreBoard.initial + " with a score of " + scoreBoard.score;
    // clearBtn = document.createElement("button")
    clearBtn.setAttribute("class", "btn btn-primary")
    clearBtn.textContent = "Clear Scores"
    scoreList.appendChild(clearBtn)


    // console.log(highScores)
    // storeScores()
}
clearBtn.addEventListener("click", function (event) {
    arrInitials = [];
    arrScores = [];
    console.log(arrInitials, arrScores)
    storeScores();
    renderScores();
})


// TODO: get local storage working correctly 
// TODO: make Go Back and Reset Score buttons 
// TODO: pretty up the doc