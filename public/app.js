$(() => {

// ELEMENTS
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');


// EVENT HANDLERS
const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

const collectItem = () => {

}

// EVENT LISTENER
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal)

})
