document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-container').forEach(tab => {
    // Store original z-index
    let originalZ = parseInt(getComputedStyle(tab).zIndex);
    if (!isNaN(originalZ)) {
      tab.dataset.originalZ = originalZ;
    }

    const handle = tab.querySelector('.tab-handle');
    if (!handle) return;

    handle.addEventListener('click', () => {
      const isOpen = tab.classList.contains('open');
      const baseZ = parseInt(tab.dataset.originalZ) || 0;

      if (!isOpen) {
        // Set z-index first, then open
        tab.style.zIndex = baseZ + 1000;

        requestAnimationFrame(() => {
          tab.classList.add('open');
        });
      } else {
        // First close the tab
        tab.classList.remove('open');

        // Then lower z-index after animation
        setTimeout(() => {
          tab.style.zIndex = baseZ;
        }, 400); // Match your CSS transition duration
      }
    });
  });

  // Note hover effect
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
});

document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('aboutTabOpened')) {
    const aboutTab = document.querySelector('#tab-text');
    if (aboutTab) {
      const baseZ = parseInt(aboutTab.dataset.originalZ) || parseInt(getComputedStyle(aboutTab).zIndex) || 0;
      aboutTab.style.zIndex = baseZ + 1000;
      requestAnimationFrame(() => {
        aboutTab.classList.add('open');
      });
      sessionStorage.setItem('aboutTabOpened', 'true');
    }
  }
});
