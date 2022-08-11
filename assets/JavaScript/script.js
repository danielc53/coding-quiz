// Selects element by id
var timeEl = document.getElementById("time");
//Sets initial time of the timer
var secondsLeft = 60;
//declares a function to handle the countdown of the timer
function setTime() {
// Sets interval in variable
  var timerInterval = setInterval(function() {
//tells the variable 'seconds left' to decrement
    secondsLeft--;
//displays the countdown timer with text
    timeEl.textContent = "Activity Timer: " + secondsLeft;
//if statement is evaluated when seconds left reaches zero
    if(secondsLeft === 0) {
// Stops execution of action at set interval
      clearInterval(timerInterval);
    }
//determines the time (in ms) that the timer interval is set to
  }, 1000);
}

setTime();

const startButton = document.getElementById("startBtn");
const questionContainerEl = document.getElementById("question-container")

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started properly")
  startButton.classList.add("question-container")
  questionContainerEl.classList.remove('question-container')
}

function setNextQuestion() {

}

function selectAnswer() {

}






//MULTIPLE CHOICE LOGIC
//selects the choice buttons from HTML
var choiceOne = document.getElementById("choice-1");
var choiceTwo = document.getElementById("choice-2");
var choiceThree = document.getElementById("choice-3");
var choiceFour = document.getElementById("choice-4");


























//declares function name WORKS BUT NECESSARY?
//function hideContent() {
  //grabs start button from HTML
 // var startButton = document.getElementById("startQuiz")

  //var displaySetting = startButton.style.display;
//};

//if (displaySetting == 'block') {
//  hideContent();
//};
























