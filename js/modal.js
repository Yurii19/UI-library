
 
let Modal = document.getElementById("modal-padding");

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-trigger')) {
    let modId = event.target.dataset.target;
    Modal.classList.toggle('hide-modal');
    document.getElementById(modId).classList.toggle('hide-modal');
  }
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-close')) {
    Modal.classList.toggle('hide-modal');
    event.target.parentNode.classList.toggle('hide-modal');
  }
});