

var computerSequence = [];
var playerSequence = [];
var round = 0;
var simon = true;


// WHEN START BUTTON IS CLICKED START THE GAME
$('#start').click(randomColor);


// GAME WILL GENERATE RANDOM Color
  function randomColor() {
    var randomNumber = Math.floor(Math.random() * 9);
      //IF NUMBER <= 2 IT WILL REFER TO RED SQUARE
      if (randomNumber <= 2) {
        computerSequence.push('red');
      // IF NUMBER <= 4 IT WILL REFER TO GREEN SQUARE
      }else if (randomNumber <= 4) {
        computerSequence.push('green');
      // IF NUMBER <= 6 IT WILL REFER TO BLUE SQUARE
      }else if (randomNumber <= 6) {
          computerSequence.push('blue');
      // IF NUMBER <= 8 IT WILL REFER TO YELLOW SQUARE
      }else {
          computerSequence.push('yellow');
      }
      console.log(computerSequence);
  }


  $('.square').click(animate);

  //PUSH PLAYERS SEQUENCE INTO AN ARRAY
  function playerClick() {
    var name = this;
    playerSequence.push(this.id);
    console.log(playerSequence);

  }

  function animate() {
    $(this).animate({opacity: '0.2' }, 'fast');
    $(this).animate({opacity: '1' }, 'fast');
    $('audio',this).trigger('play');
    console.log(name);
  }


  function newRound() {
    if (simon === true) {
      //CONTINUE TO PLAY GAME
    }
  }


  function checkMatch() {
    if (computerSequence == playerSequence) {
      //START A NEW ROUND
    }else {
      //RESTART THE GAME
    }
  }
