document.addEventListener('DOMContentLoaded', () => {
  // Tab toggle behavior with z-index adjustment
  document.querySelectorAll('.tab-container').forEach(tab => {
    const handle = tab.querySelector('.tab-handle');
    if (!handle) return;

    handle.addEventListener('click', () => {
      const isOpen = tab.classList.toggle('open');
      tab.style.zIndex = isOpen ? '2000' : '1000';
    });
  });

  // Note hover typing effect
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
  // Auto-open "About" tab on first session visit
  if (!sessionStorage.getItem('aboutTabOpened')) {
    const aboutTab = document.querySelector('#tab-text');
    if (aboutTab) {
      aboutTab.classList.add('open');
      aboutTab.style.zIndex = 2000;
      sessionStorage.setItem('aboutTabOpened', 'true');
    }
  }
});
