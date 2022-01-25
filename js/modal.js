(() => {
    const refs = {
      openModalBtn: document.querySelector('.data-modal-open'),
      closeModalBtn: document.querySelector('.data-modal-close'),
      modal: document.querySelector('.modal'),
      body: document.body
    };

    if (refs.modal) {
      refs.modal.style.display = 'none';
    }
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.style.display = 'flex';
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('lockScroll');
    }
  })();