document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-container').forEach(tab => {
    // Store original z-index from computed style
    const originalZ = parseInt(getComputedStyle(tab).zIndex) || 0;
    tab.dataset.originalZ = originalZ;

    const handle = tab.querySelector('.tab-handle');
    if (!handle) return;

    handle.addEventListener('click', () => {
      const isOpen = tab.classList.contains('open');
      const baseZ = parseInt(tab.dataset.originalZ);

      if (!isOpen) {
        // Set z-index
        tab.style.zIndex = baseZ + 1000;

        // Force reflow BEFORE opening to apply z-index now
        tab.offsetHeight; // triggers reflow

        tab.classList.add('open');
      } else {
        tab.classList.remove('open');

        // After transition ends, reset z-index
        setTimeout(() => {
          tab.style.zIndex = baseZ;
        }, 400); // Match your CSS transition time
      }
    });
  });

  // Auto-open "About" tab on first session
  if (!sessionStorage.getItem('aboutTabOpened')) {
    const aboutTab = document.querySelector('#tab-text');
    if (aboutTab) {
      const baseZ = parseInt(getComputedStyle(aboutTab).zIndex) || 0;
      aboutTab.dataset.originalZ = baseZ;
      aboutTab.style.zIndex = baseZ + 1000;

      // Force reflow before opening
      aboutTab.offsetHeight;

      aboutTab.classList.add('open');
      sessionStorage.setItem('aboutTabOpened', 'true');
    }
  }
});
