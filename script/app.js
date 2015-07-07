

var computerSequence = [];
var playerSequence = [];
var round = 0;
var simon;


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


  $('.square').click(playerClick);

  //PUSH PLAYERS SEQUENCE INTO AN ARRAY
  function playerClick() {
    playerSequence.push(this.id);
    console.log(playerSequence);
  }

  //ANIMATE COLORED SQUARE
  function animate() {
    var square = $(this);
    square.animate({opacity: '0.2' }, "fast");
    square.animate({opacity: '1' }, 'fast');
    // width: '200px', height: '200px'
  }

  //PLAY SOUND WHEN SQUARE IS CLICKED
  function playSound() {
    $('audio',this).trigger('play');
  }
