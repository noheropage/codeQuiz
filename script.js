var timeEl = document.querySelector(".time");
var secondsLeft = 10;

setTime();



// TODO: timer displayed (upper right hand corner perhaps) 
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            // TODO: 
            // timesOut();
        }
    }, 1000);
}
// TODO: start button 

// TODO: generate question with multiple answers 

// TODO: end when timer hits 0 or run outta Qs 

// TODO: save score via initials 