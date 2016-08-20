
var wordList = ['ocarina', 'harpsichord', 'banjo', 'digeridoo', 'theramin'];	
var word = wordList[Math.floor(Math.random()*wordList.length)];	
var wins = 0;
var guessedLetters = [];
var wordLetters = [];
var guesses = 10;
var blank = [];

wordLetters.push(word);

for (var i = 0; i < word.length; i++) {
blank.push(" _ ")
}



$("#word").append(blank);
$("#wins").append(wins);


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

	document.getElementById("letters").innerHTML = "Letters Guessed: " + guessedLetters.join('  ');

	//pushes correct letter into corresponding blank space
	for (var i = 0; i < word.length; i++) {

			if(letter === word.charAt(i)){
				blank[i] = letter;
				console.log(blank);
				document.getElementById("word").innerHTML = blank.join(' ');
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
			document.getElementById("number").innerHTML = "Number of Guesses Left: " + guesses;
	}


	//resets the page after all guesses are lost
	if(guesses === 0){

		alert("You have no guesses left! Try Again!");
		
		
	}

	if(blank.indexOf(" _ ") < 0){

		alert("You win!");
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		
	}


}