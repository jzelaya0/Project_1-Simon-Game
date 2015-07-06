$(function(){

var computerSequence = [];
var playerSequence = [];
var round = 0;

//ADD EVENT LISTENER TO COLORED SQUARES
$('.square').click(function(){
  console.log(this);
});

//ADD EVENT LISTENER TO RESET
$('#reset').click(function () {
  console.log(this);
});

//ADD EVENT LISTENER TO CHALLENGE MODE
$('#challenge_mode').click(function () {
  console.log(this);
});


//1. WHEN START BUTTON IS CLICKED START THE GAME
$('#start').click(generateNum);

  //1a. GAME WILL GENERATE RANDOM NUMBER
  function generateNum() {
    var randomNumber = Math.floor(Math.random() * 9);
      //a.IF NUMBER <= 2 IT WILL REFER TO RED SQUARE
      if (randomNumber <= 2) {
        computerSequence.push('RED');
      //b. IF NUMBER <= 4 IT WILL REFER TO GREEN SQUARE
      }else if (randomNumber <= 4) {
        computerSequence.push('GREEN');
      //c. IF NUMBER <= 6 IT WILL REFER TO BLUE SQUARE
      }else if (randomNumber <= 6) {
          computerSequence.push('BLUE');
      //d. IF NUMBER <= 8 IT WILL REFER TO YELLOW SQUARE
      }else {
          computerSequence.push('YELLOW');
      }
      console.log(computerSequence);
  }

});
