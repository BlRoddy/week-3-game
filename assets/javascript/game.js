
var wordList = ['ocarina', 'harpsichord', 'banjo', 'digeridoo', 'theramin'];	
var word = wordList[Math.floor(Math.random()*wordList.length)];	
var blank = [];
var guesses = 10;
var wins = 0;
var guessedLetters = [];
var wordLetters = [];

wordLetters.push(word);

for (var i = 0; i < word.length; i++) {
blank.push("_")
}

console.log(word);
console.log(blank);
console.log(wordLetters);

//catches keystroke of user
document.onkeyup = function(event){


	//keystroke to lower case
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letter);

	//pushes letters used into guessed Letters
	guessedLetters.push(letter);


	//pushes correct letter into corresponding blank space
	for (var i = 0; i < word.length; i++) {

			if(letter === word.charAt(i)){
				blank[i] = letter;
				console.log(blank);
				var check = true;
			}
	}
	
	//if else statement checking for key match
	if (check === true){

			console.log(guesses);
			console.log(guessedLetters);
	}
	//reduces guesses left if incorrect letter guessed
	else{
			guesses--;
			console.log(guesses);
			console.log(guessedLetters);
	}



	//resets the page after all guesses are lost
	if(guesses === 0){

		alert("You have no guesses left! Try Again!");
		location.reload();
	}

}