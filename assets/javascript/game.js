
var computerChoices = ["a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"]

var numGuesses = 10
var wins = 0
var losses = 0
var userLettersGuessed = []

// GENERATE COMPUTER GUESS
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

// Connect IDs to HTML
var getKeyChoice = document.getElementById('userGuessIDhtml')
var computerChoiceText = document.getElementById('computerGuess')
var userLettersGuessed = document.getElementById('userLettersGuessed')
var displayNumGuesses = document.getElementById('displayNumGuesses')

var displayWins = document.getElementById('displayWins')
var displayLosses = document.getElementById('displayLosses')

// GENERATE COMPUTER GUESS - before any key is pressed
computerChoiceText.textContent = computerGuess



// onKeyDown - Gets User getKeyChoice key entered & Starts Game Logic
// ~
document.onkeyup = function (event) {

  // assign the key choice (and key choice value) from to the HTML element-?varaiable
  var userGuessIDhtml = event.key
  getKeyChoice.textContent = userGuessIDhtml

  // add each keypressed-event.key to show the user the Array of their guesses -displayUserGuesses
  userLettersGuessed.append(event.key)


  // Game Logic Conditions
  if (userGuessIDhtml === computerGuess) {
    // If WIN - User guessed the computer's choice before the number of user guesses ran out.
    wins++
    alert("WIN")

    // RESET Game for Winner
    // writes the TEXTCONTEXT _ FORGOT to put .textContent at FIRST
    numGuesses = 10
    displayNumGuesses.textContent = numGuesses
    userLettersGuessed.textContent = []
    getKeyChoice.textContent = []
    // displayNumGuesses.textContext = 10

    displayWins.textContent = wins
    displayLosses.textContent = losses

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

    computerChoiceText.textContent = computerGuess
  }

  
  if (userGuessIDhtml !== computerGuess) {
    numGuesses--

    displayNumGuesses.textContent = numGuesses

    if (numGuesses === 0) {
      alert("Lose")
      losses--

      // RESET Game for Loser
      numGuesses = 10
      displayNumGuesses.textContent = numGuesses
      userLettersGuessed.textContent = []
      getKeyChoice.textContent = []
      // displayNumGuesses.textContext = 10

      displayWins.textContent = wins
      displayLosses.textContent = losses

      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

      computerChoiceText.textContent = computerGuess


    }
    displayLosses.textContent = losses

  }



}




