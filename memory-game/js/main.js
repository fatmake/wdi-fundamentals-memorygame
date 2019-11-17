

var cards = [{rank:"qween",suit:"hearts",cardImage:"images/queen-of-hearts.png"},{rank:"qween",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"},{rank:"king",suit:"hearts",cardImage:"images/king-of-hearts.png"},{rank:"king",suit:"diamond",cardImage:"images/king-of-diamonds.png"}];

var cardsInPlay = [];
var cardId;

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} 	else {
  			alert("Sorry, try again.");
			}
} 

var flipCard = function(cardId){


	console.log("User flipped "+ cards[cardId].rank);
	console.log(" "+ cards[cardId].suit);
	console.log(" "+ cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}


}

flipCard(0);
flipCard(2);


