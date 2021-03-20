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
var displayArray = [];

// This function chooses a random word from the list
function wordChooser () {
    var i = Math.floor(Math.random() * passableWords.length) ;
    chosenWord = passableWords[i].toLowerCase().split("");
    var lines = "_".repeat(chosenWord.length);
    lineArray.push(lines)
    console.log(chosenWord);
}

// 
function keyDetector () {
    document.addEventListener("keydown", function(event) {
        var chosenKey = event.key
        if (chosenWord.includes(chosenKey)) {
            if (!newArray.includes(chosenKey)) {
                newArray.push(chosenKey); 
                console.log()
                wordRevealer();
            }
        }
    })
}

function wordRevealer () {
    displayArray = []
    for(var j = 0; j < newArray.length; j++) {
        for(var i = 0; i < chosenWord.length; i++) {
            if (newArray[j] === chosenWord[i]) {
                displayArray.push(chosenWord[i]);
            }
        }
    }
    word.innerHTML = lineArray + displayArray.join("");
}

// Rolls out functions when the start button is clicked
function startGame () {
    startButton.addEventListener("click", function() {
        wordChooser();
        keyDetector();
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

