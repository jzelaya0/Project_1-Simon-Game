// ##############################
// TO DO
// ##############################
// 1. Create variables with html content to append to the body
// 2. Create a function to open the modals
  // 2a. Must be reusable for Game Over alert and Challenge Mode alert
// 3. Create a function to close the modal on click
// 4. Append messages to the modal content

// GAME MESSAGES
// ==================================================
messasges = {
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
var $modalText = $modalContent.children('p')[0];

// Append modal content and close button to modal
$modal.append($modalContent);
$modalContent.append($modalClose);

//Close the modal on click (button or overlay)
$modalClose.click(closeModal);
$overlay.click(closeModal);

// OPEN MODALS
// =========================
function openModal(){
  console.log($modalText);
  $body.append($overlay,$modal);
  $overlay.show();
  $modal.show();
}

// OPEN MODALS
// =========================
function closeModal(){
  $overlay.hide();
  $modal.hide();
}
