$(function(){



//ADD EVENT LISTENER TO COLORED SQUARES
$('.square').click(function(){
  console.log(this);
});

//ADD EVENT LISTENER TO THE BUTTONS
$('#start').click(function () {
  console.log(this);
});

$('#reset').click(function () {
  console.log(this);
});

$('#challenge_mode').click(function () {
  console.log(this);
});


//1. WHEN START BUTTON IS CLICKED START THE GAME

  //1a. GAME WILL GENERATE RANDOM NUMBER
  var randomNumber = Math.floor(Math.random() * 9);
    //a.IF NUMBER <= 2 IT WILL REFER TO RED SQUARE
      //i. ANIMATE THE SQUARE AND PLAY SOUND
    //b. IF NUMBER <= 4 IT WILL REFER TO GREEN SQUARE
      //i. ANIMATE THE SQUARE AND PLAY SOUND
    //c. IF NUMBER <= 6 IT WILL REFER TO BLUE SQUARE
      //i. ANIMATE THE SQUARE AND PLAY SOUND
    //d. IF NUMBER <= 8 IT WILL REFER TO YELLOW SQUARE
      //i. ANIMATE THE SQUARE AND PLAY SOUND



});
