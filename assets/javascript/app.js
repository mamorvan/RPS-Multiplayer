var player1Choice = "";
var player2Choice = "";

player1Choice = "scissors";
player2Choice = "rock";


function player1Win() {
	console.log("Player 1 wins!");
}

function player2Win() {
	console.log("Player 2 wins!");
}



if (player1Choice === player2Choice) {
	console.log("It's a tie.");
}

else if (player1Choice === "rock") {
	if (player2Choice ==="scissors") {
		player1Win();
	}
	else {
		player2Win();
	}
}

else if (player1Choice === "paper") {
	if (player2Choice === "rock") {
		player1Win();
	}
	else {
		player2Win();
	}
}

else if (player1Choice === "scissors") {
	if (player2Choice === "paper") {
		player1Win();
	}
	else {
		player2Win();
	}
}
