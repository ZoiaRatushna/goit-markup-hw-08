(() => {
    const refs = {
      openModalBtn: document.querySelector('.data-modal-open'),
      closeModalBtn: document.querySelector('.data-modal-close'),
      modal: document.querySelector('.modal'),
    };

    if (refs.modal) {
      refs.modal.style.display = 'none';
    }
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.style.display = 'flex';
      refs.modal.classList.toggle('is-hidden');
    }
  })();