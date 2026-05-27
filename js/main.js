/* ====================================================================
   SLOTSFREEUSA FRONTEND BEHAVIOR
   Safe static JS: menu support, click labeling, timed education modal.
   ==================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const conversionTimeoutMs = 120000;
  const modalOverlay = document.getElementById('conversionModal');
  const closeModalBtn = document.getElementById('closeModal');

  if (modalOverlay) {
    setTimeout(() => {
      if (!sessionStorage.getItem('slotsfreeusaModalDismissed')) {
        modalOverlay.classList.add('active');
      }
    }, conversionTimeoutMs);

    function closeModal() {
      modalOverlay.classList.remove('active');
      sessionStorage.setItem('slotsfreeusaModalDismissed', 'true');
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });
  }

  document.querySelectorAll('a[data-track]').forEach((link) => {
    link.addEventListener('click', () => {
      const label = link.getAttribute('data-track');
      console.info('SlotsFreeUSA click:', label);
    });
  });
});
