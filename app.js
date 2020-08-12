/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores,roundScore,activePlayer;

var gamePlaying = true;
init();
var btnRoll = document.querySelector('.btn-roll');
diceDOM = document.querySelector('.dice');

//Rolling
btnRoll.addEventListener('click',function () {
  if(gamePlaying)
  {var dice = Math.floor(Math.random()*6)+1;
  diceDOM.style.display = 'block';
  diceDOM.src ='dice-' + dice + '.png';

  if(dice !==1)
  {
    roundScore += dice;
     document.getElementById('current-'+activePlayer).textContent=roundScore;
  }
  else { nextPlayer();
  }}
})

//hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePlaying){
    scores[activePlayer]+=roundScore;
   document.getElementById('score-'+ activePlayer).textContent=scores[activePlayer];
   if(scores[activePlayer]>=100)
   { document.querySelector('#name-'+activePlayer).textContent = 'WINNER';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      gamePlaying = false;
      diceDOM.style.display = 'none';
 }
   else{ nextPlayer();}}

})

// new button
document.querySelector('.btn-new').addEventListener('click',init);


// function for next player
function nextPlayer() {
  diceDOM.style.display = 'none';
    roundScore=0;
    activePlayer === 0? activePlayer =1: activePlayer=0;

    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}

//initializing function
function init() { gamePlaying = true;

 scores = [0,0];
 roundScore = 0;
activePlayer = 0;
 document.getElementById('score-0').textContent=0;
 document.getElementById('score-1').textContent=0;
 document.getElementById('current-0').textContent=0;
 document.getElementById('current-1').textContent=0;
var diceDOM=  document.querySelector('.dice');

diceDOM.style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}