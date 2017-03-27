//---GLOBAL VARIABLES---//

var player1Choice = ""; 
var player2Choice = "";
var player1WinCount = 0;
var player1LossCount = 0;
var player2WinCount = 0;
var player2LossCount = 0;

//---FUNCTIONS---//

function player1Win() {
console.log("Player 1 wins!");
	//update and display counts
	player1WinCount++;
	player2LossCount++;
	$("#wins1").html(player1WinCount);
	$("#losses1").html(player1LossCount);
}

function player2Win() {
console.log("Player 2 wins!");
	//update and display counts
	player2WinCount++;
	player1LossCount++;
	$("#wins2").html(player2WinCount);
	$("#losses2").html(player2LossCount);
}

function play() {

	if (player1Choice === player2Choice) {
console.log("It's a tie.");
	} //end of tie if

	else if (player1Choice === "rock") {
		if (player2Choice ==="scissors") {
			player1Win();
		}
		else {
			player2Win();
		}
	} //end of player 1 rock ifs

	else if (player1Choice === "paper") {
		if (player2Choice === "rock") {
			player1Win();
		}
		else {
			player2Win();
		}
	} //end of player1 paper ifs

	else if (player1Choice === "scissors") {
		if (player2Choice === "paper") {
			player1Win();
		}
		else {
			player2Win();
		}
	} //end of player1 scissors ifs
} //end of play function

//---EXPRESSIONS--//

$(".player1Choice").on("click", function(){
	player1Choice = $(this).text().toLowerCase();
	$("#choices1").html("<h2>" + player1Choice.toUpperCase() + "</h2>");
console.log("choice1-" + player1Choice);
})

$(".player2Choice").on("click", function(){
	player2Choice = $(this).text().toLowerCase();
	$("#choices2").html("<h2>" + player2Choice.toUpperCase() + "</h2>");
console.log("choice2- " + player2Choice);
})

play();


