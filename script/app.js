

var computerSequence = [];
var playerSequence = [];
var round = 0;
var simon = true;


// WHEN START BUTTON IS CLICKED START THE GAME
$('#start').click(startGame);

function startGame() {
  //START THE FIRST ROUND
  // console.log("Game will Begin");
  randomColor();
}



function newRound() {

  //Animate color patterh for computer sequence

}


//CHECKS FOR A MATCH BETWEEN COMPUTER AND PLAYER
function checkForMatch() {
  //Will check if computer and player pattern matches
  //If there is a match... move to a new round.
  //If not then the game will end.
  if (computerSequence.join() == playerSequence.join()) {
      alert('Good Move');
  }else {
      alert('Bad Move');
  }

}

//COMPUTER GENERATES PATTERN
function playPattern(computer) {
  var i = 0;
  var square = this;
  var interval = setInterval(function(){
    square.animate($('#' + computer[i]));

    i++;
    if (i >= computer.length) {
      clearInterval(interval);
    }
  },700);
}



// GAME WILL GENERATE RANDOM Color
  function randomColor() {
    var randomNumber = Math.floor(Math.random() * 9);
      //IF NUMBER <= 2 IT WILL REFER TO RED SQUARE
      if (randomNumber <= 2) {
        computerSequence.push('red');
        animate($('#red'));
      // IF NUMBER <= 4 IT WILL REFER TO GREEN SQUARE
      }else if (randomNumber <= 4) {
        computerSequence.push('green');
        animate($('#green'));
      // IF NUMBER <= 6 IT WILL REFER TO BLUE SQUARE
      }else if (randomNumber <= 6) {
          computerSequence.push('blue');
          animate($('#blue'));
      // IF NUMBER <= 8 IT WILL REFER TO YELLOW SQUARE
      }else {
          computerSequence.push('yellow');
          animate($('#yellow'));
      }
      console.log(computerSequence);
  }


  $('.square').click(playerClick);
  //PUSH PLAYERS SEQUENCE INTO AN ARRAY
  function playerClick() {
    playerSequence.push(this.id);
    animate(this);
    console.log(playerSequence);
  }
  //ANIMATES BOTH COMPUTER AND PLAYER MOVES
  function animate(arg) {
    $(arg).animate({opacity: '0.2' }, 100);
    $(arg).animate({opacity: '1' }, 100);
    $('audio',arg).trigger('play');
  }
