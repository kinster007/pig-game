alert('It\'s the fucking PIG GAME!!!!!!\
	GAME RULES:\
\
- The game has 2 players, playing in rounds\
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn\
- The player can choose to HOLD, which means that his ROUND score gets added to his GLOBAL score. After that, it\'s the next player\'s turn\
- The first player to reach 100 points on GLOBAL score wins the game\
');


var roundScore, scores, activePlayer, gamePlaying, lastdice, winningScore;
inIt();



//document.querySelector('#current-' + activePlayer).textContent = dice;		//setter

//document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>';

/*
var x = document.querySelector('#score-0').textContent; //getter
console.log(x);
*/




//document.querySelector('.btn-roll').addEventListener('click', btn); //callback function

document.querySelector('.btn-roll').addEventListener('click', function(){ //Anonymous function
	if (gamePlaying){
		//1. random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		//2. display
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		//3. Update the round score only if the rolled number is NOT the one
		if(dice1 !== 1 && dice2 !==1){
			//Add number
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

		} else{
			//next Player
			nextPlayer();
		}
		/*
		if (dice === 6 && lastdice === 6 || dice === 5 && lastdice === 5 || dice === 4 && lastdice === 4) {
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = '0';
			nextPlayer();
		}	
		else if(dice !== 1){
			//Add number
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

		} else{
			//next Player
			nextPlayer();
		}

		lastdice = dice;
		*/

	}
});
	

document.querySelector('.btn-hold').addEventListener('click', function(){
	// Add CURRENT score the GLOBAL score
	
	if (gamePlaying) {

		scores[activePlayer] += roundScore;

		//Update UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		
		//Undefined 0 or nul or "" are CORECED to false so set the value of the input
		if (input) {
		 winningScore = input;
		} else {
			winningScore = 100;
		}



		//Check if the player Won the Game
		if (scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'I win loser!!!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';			
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('.winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('.active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}

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

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', inIt);

function inIt(){
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';


	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');

}

















