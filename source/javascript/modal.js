// GAME MESSAGES
// ==================================================
messages = {
  fail: [
    "Game Over!",
    "Sorry, you loose...",
    "Get yo' memory checked!",
    "Nah, not today.",
    "A winner, you are not."
  ],
  game_status: [
    "Hey, game is still going!",
    "Generating pattern...",
    "It's the computer's! turn!",
    "It's not your turn yet...",
    "WAIT!!!",
    "Really? You can't wait?..."
  ],
  game_mode: [
    "Ready for a challenge, eh?",
    "You're a brave one.",
    "Challenge accepted!",
    "Here goes nothing...",
    "Good luck! You're gonna need it..."
  ]
};

// MODAL ELEMENTS
// ==================================================
var $body = $('body');
var $overlay = $('<div id="overlay"></div>');
var $modal = $('<div id="modal"></div>');
var $modalContent =  $('<div id="modal-content"><p></p></div>');
var $modalClose = $('<div id="modal-close">X</div>');
var $modalText = $modalContent.children('p');

// Append modal content and close button to modal
$modal.append($modalContent);
$modalContent.append($modalClose);

//Close the modal on click (button or overlay)
$modalClose.click(closeModal);
$overlay.click(closeModal);

// OPEN MODALS
// =========================
function openModal(message){
  $modalText.html(message);
  $body.append($overlay,$modal);
  $overlay.show();
  $modal.hide().fadeIn('fast');
}

// OPEN MODALS
// =========================
function closeModal(){
  $overlay.fadeOut('fast');
  $modal.fadeOut('fast');
}


// RANDOM NUMBER (FOR MESSAGES)
// =========================
function getRandomNum(array) {
  number = Math.floor(Math.random() * (array.length - 0) + 0);
  return number;
}
