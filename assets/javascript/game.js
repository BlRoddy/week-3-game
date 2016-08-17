//list of words
var wordList = ['ocarina', 'harpsichord', 'banjo', 'digeridoo', 'theramin'];	

// randomly selects word from list
var word = wordList[Math.floor(Math.random()*wordList.length)];	
console.log(word);

var guesses = 15;

var wins = 0;



//catches keystroke of user
document.onkeyup = function(event){

	//keystroke to lower case
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letter);

	//reduces guesses by 1 on each keystroke
	if(letter){
		guesses--;
	}
	console.log(guesses);

	//resets the page after all guesses are lost
	if(guesses === 0){

		alert("You have no guesses left! Try Again!");
		location.reload();
	}

}