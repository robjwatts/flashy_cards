const inquirer = require('inquirer');
const fs = require('fs');

const cardType = process.argv[2];
const cardAction = process.argv[3];

function BasicCard(front, back, topic) {
	if (!(this instanceof BasicCard)) {
		return new BasicCard(front, back, topic);
	}

	this.front = front;
	this.back = back;
	this.topic - topic;
}
	fs.appendFile('basic-cards.txt', JSON.stringify(this), (err) =>{
		if(err) {
			console.log(err);
		}
	})

}

// if(cardAction === "create") {
//     let cardName = process.argv[4];
//     let cardFront = process.argv[5];
//     let cardBack = process.argv[6];

// }


var cardOne = new BasicCard("Homer", "Simpson", "The Simpsons");

console.log(cardOne.front);

fs.readFile('basic-cards.txt', (err, data) => {
	if (err) throw err;
	var cards = data;
	console.log(JSON.stringify(cards));
});

function ClozeCard(text, cloze, topic) {
	if(!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
	this.topic = topic;
	this.text = text;
	this.cloze = cloze;
	fs.appendFile('cloze-cards.txt', JSON.stringify(this), (err) =>{
		if(err) {
			console.log(err);
		}
	})
}	

ClozeCard.prototype.createPartial = function() {
	return this.partial = (this.text).replace(this.cloze, " ... ");
}

ClozeCard.prototype.fulltext = function() {
	return this.text;
}

// ClozeCard.prototype.printPartial = (item) =>{
//     console.log(item.partial);
// }

var clozeOne = new ClozeCard("hello there we are", "hello");

// clozeOne.printPartial(clozeOne);

console.log(clozeOne.createPartial());

console.log(clozeOne.fulltext());