// ##############################
// TO DO
// ##############################
// 1. Create variables with html content to append to the body
// 2. Create a function to open the modals
  // 2a. Must be reusable for Game Over alert and Challenge Mode alert
// 3. Create a function to close the modal on click
// 4. Append messages to the modal content

// MODAL ELEMENTS
// ==================================================
var $body = $('body');
var $overlay = $('<div id="overlay"></div>');
var $modal = $('<div id="modal"></div>');
var $modalContent =  $('<div id="modal-content"></div>');
var $modalClose = $('<div id="modal-close">X</div>');

// Append modal content and close button to modal
$modal.append($modalContent);
$modalContent.append($modalClose);

//Close the modal on click (button or overlay)
$modalClose.click(closeModal);
$overlay.click(closeModal);

// OPEN MODALS
// =========================
function openModal(){
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
