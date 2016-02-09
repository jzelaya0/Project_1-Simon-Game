// ##############################
// FIXES
// 1. If player clicks board before starting game, game alerts a loss
// 2. Disalbe start button once the game starts
// 3. Disable the board while pattern is playing - or alert player sequence is still generating
// 4. Change the square animation
// 5. Challenge mode css needs to be removed when not active
// 6. Disable reset button if game hasn't started
// ##############################

// ##############################
// FEATURES TO ADD
// ##############################
// 1. Remove alerts and replace with modals
// 2. Add dropdown to game rules and challenge mode instructions
// 3. Countdown to start the game
// 4. Timelimit for player to respond

// VARIABLES
// ==================================================
var computerSequence = [];
var playerSequence = [];
var gameRound = 0;
var compIndex = 0;
var rotateCheck = false;

$start         = $('#start');
$squares       = $('.square');
$level         = $('#level');
$reset         = $('#reset');
$challengeMode = $('#challenge_mode');

// CLICK EVENTS
// ==================================================
$start.click(startGame);//Start the game
$squares.click(playerClick);//Push this box's id into playerSequence
$reset.click(resetGame);//Reset the game



// START THE GAME
// =========================
function startGame() {
  // Generate color and first pattern
  generateRandomColor();
  computerPattern();
  if (gameRound === 0) {
    updateRound();
  }
}

// NEW ROUND
// =========================
function newRound() {
  //Add to the pattern and update the round
  computerPattern();
  updateRound();
}

// COMPARE THE PLAYER &
// COMPUTER SEQUENCE
// =========================
function checkForMatch(squareId) {
    // If the player click count matches the computer's current color
    console.log(compIndex);
    if(squareId === computerSequence[compIndex]){
        // And if the two arrays match then move to the next round
        compIndex++;
        if(compIndex === computerSequence.length){
          newRound();
          generateRandomColor();
          playerSequence = [];
          console.log('COMPUTER: ' + computerSequence);
        }
    }
    else {
        openModal(messages.fail[getRandomNum(messages.fail)]);
        resetGame();
    }
}

// COMPUTER PATTERN INTERVAL
// =========================
function computerPattern() {
  if (rotateCheck === true) {
    rotateBoard();
  }
  var i = 0;
  var square = this;
  var interval = setInterval(function(){
    square.animateSquare($(computerSequence[i]));

    i++;
    if (i >= computerSequence.length) {
      clearInterval(interval);
      compIndex = 0;
    }
  },700);
}

// GENERATE COMPUTER'S COLORS
// =========================
function generateRandomColor() {
  var randomNumber = Math.floor(Math.random() * 9);
    //IF NUMBER <= 2 IT WILL REFER TO RED SQUARE
    if (randomNumber <= 2) {
      computerSequence.push('#red');
    // IF NUMBER <= 4 IT WILL REFER TO GREEN SQUARE
    }else if (randomNumber <= 4) {
      computerSequence.push('#green');
    // IF NUMBER <= 6 IT WILL REFER TO BLUE SQUARE
    }else if (randomNumber <= 6) {
        computerSequence.push('#blue');
    // IF NUMBER <= 8 IT WILL REFER TO YELLOW SQUARE
    }else {
        computerSequence.push('#yellow');
    }
}

// PUSH PLAYERS CLICK INTO ARRAY
// =========================
function playerClick() {
  playerSequence.push("#" +this.id);
  console.log("PLAYER: " + playerSequence);
  animateSquare(this);
  checkForMatch("#" + this.id);
}

// ANIMATION FOR COMPUTER AND
// PLAYER SQUARES
// =========================
function animateSquare(square) {
  $(square).animate({opacity: '0.2' }, 100);
  $(square).animate({opacity: '1' }, 100);
  $('audio',square).trigger('play');
}

// RESET THE GAME
// =========================
function resetGame() {
  computerSequence = [];
  playerSequence = [];
  resetCounter();
  $challengeMode.css({"background-color": "", "color": ""});//Remove background color
  rotateCheck = false;
}

// UPDATE THE GAME ROUND
// =========================
function updateRound() {
  $('#level').html(function(){
    return gameRound += 1;
    }
  );
}

// RESET THE GAME ROUND COUTER
// =========================
function resetCounter() {
  $level.html(function(){
      gameRound = 0;
    return gameRound;
    }
  );
}



// CHALLENGE MODE
// ==================================================
$challengeMode.click(setChallengeMode);

function setChallengeMode() {
  if(rotateCheck === false){
    console.log($(this));
    $(this).css({'background-color': 'rgb(254, 73, 83)', "color": "#fff"});
    openModal(messages.game_mode[getRandomNum(messages.game_mode)]);
    rotateCheck = true;
    console.log(rotateCheck);
    return rotateCheck;
  }
}

// BOARD ROTATION
// =========================
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
