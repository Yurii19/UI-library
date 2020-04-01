window.onload = init;

function init() {
  let flagShow = false;
  let Modal = document.getElementById("modal-padding");

  let closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  closeButton.className = 'close';

  let modalHeader = document.createElement('h4');
  modalHeader.innerHTML = 'Warning !';
  modalHeader.className = 'modal-header';

  let modalMessage = document.createElement('div');
  modalMessage.className = 'modalMes';

  let modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
 
  let acceptButton = document.createElement('button');
  acceptButton.innerHTML = 'Accept';
  acceptButton.className = 'footer-button';

  let rejectButton = document.createElement('button');
  rejectButton.innerHTML = 'Reject';
  rejectButton.className = 'footer-button';


  const modalSend = document.getElementById('send');

  modalSend.prepend(closeButton);
  closeButton.after(modalHeader);
  modalHeader.after(modalMessage);
  modalMessage.after(modalFooter);
  modalFooter.append(acceptButton, rejectButton);

  checkFlag(Modal, flagShow);

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-trigger')) {
      modalMessage.innerText = event.target.dataset.target;
      flagShow = true;
      checkFlag(Modal, flagShow);
    }
  });

  closeButton.addEventListener('click', closeModal);
  acceptButton.addEventListener('click', closeModal);
  rejectButton.addEventListener('click', closeModal);

  function closeModal() {
    flagShow = false;
    checkFlag(Modal, flagShow);
  }
}

function checkFlag(el, flag) {
  if (flag) {
    el.style.visibility = 'visible';
  } else {
    el.style.visibility = 'hidden';
  }
}