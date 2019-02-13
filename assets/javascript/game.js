var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
document.onkeyup = function(event) {
var userGuess = event.key;

if (randomLetter === userGuess) {
    alert("Correct! " + userGuess + " was the right answer!");
    guesses = [];
    document.getElementById("guesses").innerHTML = "Guesses so far: ";
    guessesLeft = 9;
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
}
else if (randomLetter !== userGuess) {
    guessesLeft--;
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("guesses").innerHTML = "Guesses so far: " + userGuess;
    guesses.push(" " + userGuess)
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guesses;

    if (guessesLeft === 0) {
        alert("The correct letter was: " + randomLetter)
        losses ++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        guessesLeft = 9;
        document.getElementById("guesses-left").innerHTML = "Guesses left: 9";
        randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
        document.getElementById("guesses").innerHTML = "Guesses so far: "
        guesses = [];
    }
}};

