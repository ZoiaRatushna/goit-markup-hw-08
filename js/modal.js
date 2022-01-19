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
    // function toggleModal() {
    //   document.body.classList.toggle ('modal-open');
    //   refs.modal.classList.toggle('is-hidden');
    // }

    // menuBtnRef.addEventListener ("click", () => {
    //   const expended = menuBtnRef.getAttribute ("aria-expended") ==="true" || false;
    
    //   menuBtnRef.classList.toggle ("is-open");
    //   menuBtnRef.setAttribute("aria-expended", !expended);

    //   mobileMenuRef.classList.toggle("is-open");
    // })
  })();