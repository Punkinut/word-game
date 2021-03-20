var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset");
var word = document.querySelector(".word-guess");
var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
var timer = document.querySelector(".timer-count");

var passableWords = ["Laura", "Wifey", "Girlfriend", "Yummy", "Potato", "Carrot", "Bones", "Rain", "Vitamins"]
var chosenWord;
var lineArray = [];
var newArray = [];
var winScore = 0;
var loseScore = 0;
var time = 9;


// This function chooses a random word from the list
function wordChooser () {
    var i = Math.floor(Math.random() * passableWords.length) ;
    chosenWord = passableWords[i].toLowerCase().split("");
    var lines = "".repeat(chosenWord.length);
    lineArray.push(lines);
    word.innerHTML = lineArray;
    console.log(chosenWord);
}

// 
function keyDetector () {
    document.addEventListener("keydown", function(event) {
        var chosenKey = event.key
        if (chosenWord.includes(chosenKey)) {
            if (!newArray.includes(chosenKey)) {
                newArray.push(chosenKey); 
                wordRevealer();
            }
        }
    })
}

function wordRevealer () {
    for(var j = 0; j < newArray.length; j++) {
        for(var i = 0; i < chosenWord.length; i++) {
            if (newArray[j] === chosenWord[i]) {
                lineArray[i] = newArray[j];
            }
        }
    }
    word.innerHTML = lineArray.join("");
}




var timerInterval = setInterval(function() {
        timer.innerHTML = time;
        time--
        if(time === -1) {
            clearInterval(timerInterval)
            loseScore++
            losses.innerHTML = loseScore;
            window.alert("YOU LOST!")
            time = 9;  
        }
        winGame();
    }, 1000)    


function winGame () {
    if(lineArray.join("") === chosenWord.join("")) {
        clearInterval(timerInterval);
        word.innerHTML = chosenWord.join("");
        winScore++
        wins.innerHTML = winScore;
        window.alert("YOU WON!")
        time = 9;
        }
    }    

function resetTime () {
    resetButton.addEventListener("click", function() {
        winScore = 0;
        loseScore = 0;
        wins.innerHTML = winScore;
    })
}


// Rolls out functions when the start button is clicked
function startGame () {
    startButton.addEventListener("click", function() {
        lineArray = [];
        newArray = [];
        wordChooser();
        keyDetector();
        // resetTime();
    })
}

startGame();








// List of varaibles that select HTML that need to be interacted with
// Start button selection
// reset button selection
// Where the words are selection
// Wins selection
// Losses selection
// Timer selection


// Array of word list

// Start button function FUNCTION
// Reset button FUNCTION


// Array random choice FUNCTION
// You want to display dashed lines depending on the length of the chosen array item
// Then it will run the key detector function

// Key detector and implement FUNCTION

// Win detector FUNCTION

// Loss detector FUNCTION

// Count down time FUNCTION

// Setting storage FUNCTION

