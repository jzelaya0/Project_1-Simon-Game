var computerSequence = [];
var playerSequence = [];
var resetPlayerSequence;
var currentClickCount = 0;
var round = 0;
var simon = true;
var rotateCheck = false;




// WHEN START BUTTON IS CLICKED START THE GAME
$('#start').click(startGame);


//INITIATES THE COMPUTER TO GENERATE A RANDOM COLOR FOR FIRST ROUND
function startGame() {
  //START THE FIRST ROUND
  console.log("Game will Begin");
  randomColor();
  playPattern();
  if (round === 0) {
    update();
  }
}


//PLAYS THE COMPUTER PATTERN
function newRound() {
  //Animate color pattern for computer sequence

  playPattern();
  update();
}


//CHECKS FOR A MATCH BETWEEN COMPUTER AND PLAYER
function checkForMatch() {
  //Will check if computer and player pattern matches
  //If there is a match... move to a new round.
  //If not then the game will end.
    var clickCountCheck = computerSequence.length;
    console.log(clickCountCheck + '=' + currentClickCount);
    if(clickCountCheck == currentClickCount){

      if (computerSequence.join() == playerSequence.join()){
        newRound();
        randomColor();
        playerSequence = [];
        currentClickCount = 0;
        console.log('Computer: ' + computerSequence);
        //  alert("Good!");
      }else {
        currentClickCount = 0;
        alert('You Lose!');
        resetGame();
      }
    }
}



//COMPUTER GENERATES PATTERN
function playPattern() {
  if (rotateCheck === true) {
    rotateBoard();
  }
  var i = 0;
  var square = this;
  var interval = setInterval(function(){
    square.animate($(computerSequence[i]));

    i++;
    if (i >= computerSequence.length) {
      clearInterval(interval);
    }
  },700);
}


// GAME WILL GENERATE RANDOM COLOR
  function randomColor() {
    var randomNumber = Math.floor(Math.random() * 9);
      //IF NUMBER <= 2 IT WILL REFER TO RED SQUARE
      if (randomNumber <= 2) {
        computerSequence.push('#red');
        // animate($('#red'));
      // IF NUMBER <= 4 IT WILL REFER TO GREEN SQUARE
      }else if (randomNumber <= 4) {
        computerSequence.push('#green');
        // animate($('#green'));
      // IF NUMBER <= 6 IT WILL REFER TO BLUE SQUARE
      }else if (randomNumber <= 6) {
          computerSequence.push('#blue');
          // animate($('#blue'));
      // IF NUMBER <= 8 IT WILL REFER TO YELLOW SQUARE
      }else {
          computerSequence.push('#yellow');
          // animate($('#yellow'));
      }
  }


  $('.square').click(playerClick);
  //PUSH PLAYERS SEQUENCE INTO AN ARRAY
  function playerClick() {
    playerSequence.push("#" +this.id);
    console.log("Player: " + playerSequence);
    animate(this);
    currentClickCount+=1;
    checkForMatch();
  }

  //ANIMATES BOTH COMPUTER AND PLAYER MOVES
  function animate(arg) {
    $(arg).animate({opacity: '0.2' }, 100);
    $(arg).animate({opacity: '1' }, 100);
    $('audio',arg).trigger('play');
  }


  //RESETS THE GAME
  $('#reset').click(resetGame);
  function resetGame() {
    computerSequence = [];
    playerSequence = [];
    alert('Game has been reset!');
    resetCounter();
    return rotateCheck = false;
  }


  //UPDATES THE ROUND
  function update() {
  $('#level').html(function(){
    return round += 1;
    }
  );
  }

  //RESETS THE ROUND COUNTER
  function resetCounter() {
  $('#level').html(function(){
    return round = 0;
    }
  );
  }


  //SETS UP CHALLENGE MODE
  $('#challenge_mode').click(function(){
    $(this).css('background-color', 'rgb(254, 73, 83)');
      alert("Challenge Mode is Set");
     return rotateCheck = true;
  });


//ROTATES THE BOARD
function rotateBoard(){
  var number = Math.floor(Math.random() * 8);
  var degrees;
  if (number <= 2) {
    degrees = -90;
  }else if (number <= 4) {
    degrees = 90;
  }else if (number <= 6) {
    degrees = -180;
  }else {
    degrees = 180;
  }

  function rotation(degree) {
      $('.board-container').animate({  borderSpacing: degree }, {
        step: function(now) {
          $(this).css('-webkit-transform','rotate('+now+'deg)');
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
        },
        duration:'fast'
    },'linear');

  }

  return rotation(degrees);
}
