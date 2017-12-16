$(document).ready(function(){
	var gameScore = 0;
	var gameMatchNum = Math.floor(Math.random() * 120 + 19);
	var gameWins = 0;
	var gameLosses = 0;
	var gemOneNum = Math.floor(Math.random() * 11 + 1);
	var gemTwoNum = Math.floor(Math.random() * 11 + 1);
	var gemThreeNum = Math.floor(Math.random() * 11 + 1);
	var gemFourNum = Math.floor(Math.random() * 11 + 1);

	$('#matchNumber').text(gameMatchNum);
	
	

	var reset = function (){

		gameMatchNum = Math.floor(Math.random() * 120 + 19);
		gameScore = 0;
		$('#matchNumber').text(gameMatchNum);
		gemOneNum = Math.floor(Math.random() * 11 + 1);
		gemTwoNum = Math.floor(Math.random() * 11 + 1);
		gemThreeNum = Math.floor(Math.random() * 11 + 1);
		gemFourNum = Math.floor(Math.random() * 11 + 1);
		
		
	}
	var winner = function (){
		// alert ("You Won!");
		gameWins ++;
		$('#winLoseAlert').html("<h2>You Won!</h2>");
		$('#aggWins').text(gameWins);
		reset();
	}
	var loser = function(){
		// alert ("You Lost!");			
		gameLosses ++;	
		$('#winLoseAlert').html("<h2>You Lost!</h2>");
		$('#aggLosses').text(gameLosses);
		reset();
	}


		$('#gemOne').on ('click', function() {
			gameScore += gemOneNum;
			$('#aggScore').text(gameScore);
			if (gameScore == gameMatchNum) {
				winner();
				
			} else if (gameScore > gameMatchNum){
				loser();
				
			}
		});
		$('#gemTwo').on ('click', function() {
			gameScore += gemTwoNum;
			$('#aggScore').text(gameScore);
			if (gameScore == gameMatchNum) {
				winner();
				
			} else if (gameScore > gameMatchNum){
				loser();
				
			}

		});
		$('#gemThree').on ('click', function() {
			gameScore += gemThreeNum;
			$('#aggScore').text(gameScore);
			if (gameScore == gameMatchNum) {
				winner();
				
			} else if (gameScore > gameMatchNum){
				loser();
				
			}

		});
		$('#gemFour').on ('click', function() {
			gameScore += gemFourNum;
			$('#aggScore').text(gameScore);
			if (gameScore == gameMatchNum) {
				winner();
				
			} else if (gameScore > gameMatchNum){
				loser();
				
			}

		});

			// if (gameScore === gameMatchNum) {
			// gameWins ++;
			// $('#winLoseAlert').html("<h2>You Won!</h2>");
			// reset ();
			// }
			// if (gameScore > gameMatchNum) {
			// gameLosses ++;
			// $('#winLoseAlert').html("<h2>You Lost!</h2>");

			// reset ();
			// }


});