document.addEventListener('DOMContentLoaded', () => {
  // Tab toggle behavior with z-index handling
  document.querySelectorAll('.tab-container').forEach(tab => {
    const originalZ = parseInt(getComputedStyle(tab).zIndex) || 0;
    tab.dataset.originalZ = originalZ;

    const handle = tab.querySelector('.tab-handle');
    if (!handle) return;

    handle.addEventListener('click', () => {
      const isOpen = tab.classList.contains('open');
      const baseZ = parseInt(tab.dataset.originalZ);

      if (!isOpen) {
        tab.style.zIndex = baseZ + 1000;
        tab.offsetHeight; // force reflow
        tab.classList.add('open');
      } else {
        tab.classList.remove('open');
        setTimeout(() => {
          tab.style.zIndex = baseZ;
        }, 400); // match transition duration
      }
    });
  });

  // Typing effect on hover for notes
  document.querySelectorAll('.note').forEach(note => {
    const textElement = note.querySelector('.note-text');
    if (!textElement) return;

    const fullText = textElement.textContent;
    let typing = false;
    let interval;

    note.addEventListener('mouseenter', () => {
      if (typing) return;
      typing = true;
      let i = 0;
      textElement.textContent = '';

      interval = setInterval(() => {
        textElement.textContent += fullText[i];
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
          typing = false;
        }
      }, 50);
    });

    note.addEventListener('mouseleave', () => {
      clearInterval(interval);
      textElement.textContent = fullText;
      typing = false;
    });
  });

  // Auto-open "About" tab once per session
  if (!sessionStorage.getItem('aboutTabOpened')) {
    const aboutTab = document.querySelector('#tab-text');
    if (aboutTab) {
      const baseZ = parseInt(getComputedStyle(aboutTab).zIndex) || 0;
      aboutTab.dataset.originalZ = baseZ;
      aboutTab.style.zIndex = baseZ + 1000;
      aboutTab.offsetHeight; // force reflow
      aboutTab.classList.add('open');
      sessionStorage.setItem('aboutTabOpened', 'true');
    }
  }
});
