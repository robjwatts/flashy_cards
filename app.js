var inquirer = require("inquirer");
var fs = require("fs");

function flashcard(front,back){
	this.question = front;
	this.answer = back;
	this.printfront = function(){
		console.log(front)
	};
	this.printback = function(){
		console.log(back)
	};
	this.flip = function(){

	};
}

//function to enter another flashcard
function enterNew(){
	inquirer.prompt([

		{
		    type: "confirm",
		    name: "enterNewFlash",
		    message: "Care to enter a new flash card?"
	  	}

	]).then(function(user){
		if(user.enterNewFlash === true){
			add();
		} else if (user.enterNewFlash === false){
			console.log("finished entering")
		}
	})
};

//function to add new flashcards
function add(){
	inquirer.prompt([

		{
			type: "input",
			name: "addQuestion",
			message: "Enter text for the front of this card."
		},
		{
			type: "input",
			name: "addAnswer",
			message: "Enter the text for the back of this card."
		},

	]).then(function(card){
		var cardArray = [card.addQuestion, card.addAnswer];
		var jsonCard = JSON.stringify(cardArray);
		
		fs.appendFile("flashcards.txt", jsonCard + ";", function(err) {
			if (err) {
			  console.log(err);
			}
			else {
			    console.log("New card added!");
			}	
		});
		enterNew();
	})
};

//function to review flashcards
function review(){
	console.log("Shuffling...")
	fs.readFile("flashcards.txt", "utf8", function(err, data) {

	var amtCards = data.split(";");
	var card = JSON.parse(amtCards[1]);
	var newCard = new flashcard(card[0],card[1]);
	console.log(newCard)


	});
};


//initial prompt
inquirer.prompt([
	
	{
		type: "input",
		name: "addReview",
		message: "Add or review flashcards?"
	}

]).then(function(user){

	if(user.addReview === "add"){
		add();

	} else if (user.addReview === "review"){
		review();
	};
});
