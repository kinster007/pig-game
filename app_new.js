alert('It\'s the fucking PIG GAME!!!!!!\
	GAME RULES:\
\
- The game has 2 players, playing in rounds\
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn\
- The player can choose to HOLD, which means that his ROUND score gets added to his GLOBAL score. After that, it\'s the next player\'s turn\
- The first player to reach 100 points on GLOBAL score wins the game\
');


var roundScore, scores, activePlayer;
inIt();

//document.querySelector('#current-' + activePlayer).textContent = dice;		//setter

//document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>';

/*
var x = document.querySelector('#score-0').textContent; //getter
co nsole.log(x);
*/




//document.querySelector('.btn-roll').addEventListener('click', btn); //callback function

document.querySelector('.btn-roll').addEventListener('click', function(){ //Anonymous function
	//1. random number
	var dice = Math.floor(Math.random() * 6) + 1;

	//2. display
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	//3. Update the round score only if the rolled number is NOT the one
	if(dice !== 1){
		//Add number
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;

	} else{
		//next Player
		nextPlayer();
	}

});

document.querySelector('.btn-hold').addEventListener('click', function(){
	// Add CURRENT score the GLOBAL score
	scores[activePlayer] += roundScore;




	//Update UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	//Check if the player Won the Game
	if (scores[activePlayer] >= 50){
		document.querySelector('#name-' + activePlayer).textContent = 'I win bc!!!';
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('.btn-hold').style.display = 'none';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classlist.add('.winner');
		document.querySelector('.player-' + activePlayer + '-panel').classlist.remove('.active');
	} else {
		nextPlayer();
	}


});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//document.querySelector('.player-0-panel').classList.remove('active');
	//document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', inIt);

function inIt(){
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;

	document.querySelector('.dice').style.display = 'none';		//style method


	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 0';
	document.getElementById('name-1').textContent = 'Player 1';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');





}

















