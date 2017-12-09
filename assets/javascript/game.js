// Variables needed:
// var gameScore 
// var gameMatchNum -----this number will be the number the computer randomly generates between 19-120
// var gemOneNum   -----this will need to be randomly generated. sum of all gems #s must equal the gameMatchNum
// var gemTwoNum   -----this will need to be randomly generated. sum of all gems #s must equal the gameMatchNum
// var gemThreeNum -----this will need to be randomly generated. sum of all gems #s must equal the gameMatchNum
// var gemFourNum  -----this will need to be randomly generated. sum of all gems #s must equal the gameMatchNum
// var gameWins: Initially set at zero, will add when gameScore = gameMatchNum
// var gameLosses: Initially set at zero, will add when gameScore > gameMatchNum
//define reset value for when the game is over
//what will we need to do?
//when game starts, show a gameMatchNum value between 19-120
// assign a value to the gems when player clicks one (effectively starting the game)
//when clicking, add that value to the gameScore
//if gameScore = gameMatchNum - win++
//if gameScore > gameMatchNum then loss++
//need to make sure that the value of the gems is different?
//or at least that 
$(document).ready(function(){

//changed gameMatchNumb, not an array, so setting the variable to the random number
var gameScore = 0;
var gameMatchNum = Math.floor(Math.random() * 120 + 19);
var gameWins = 0;
var gameLosses = 0;
var gemOneNum = Math.floor(Math.random() * 11 + 1);
var gemTwoNum = Math.floor(Math.random() * 11 + 1);
var gemThreeNum = Math.floor(Math.random() * 11 + 1);
var gemFourNum = Math.floor(Math.random() * 11 + 1);


//Writing to the html:
$('#aggScore').text(gameScore);
$('#matchNumber').text(gameMatchNum);
$('#aggWins').text(gameWins);
$('#aggLosses').text(gameLosses);

//RESET FUNCTION:
function reset(){
	gameMatchNum = Math.floor((Math.random() * 120) + 19);
	gameScore = 0;
	gemOneNum = Math.floor((Math.random() * 11) + 1);
	gemTwoNum = Math.floor((Math.random() * 11) + 1);
	gemThreeNum = Math.floor((Math.random() * 11) + 1);
	gemFourNum = Math.floor((Math.random() * 11) + 1);

}

//defining click events on the gems.

$('#gemOne').on('click', function() {
	gameScore = gameScore + gemOneNum;
});
$('#gemTwo').on('click', function() {
	gameScore = gameScore + gemTwoNum;
});
$('#gemThree').on('click', function() {
	gameScore = gameScore + gemThreeNum;
});
$('#gemFour').on('click', function() {
	gameScore = gameScore + gemFourNum;
});

















}); //THIS CLOSES THE DOCUMENT.READY FUNCTION