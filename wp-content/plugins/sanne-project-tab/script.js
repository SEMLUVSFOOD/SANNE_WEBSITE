const tab = document.getElementById('tab'); const handle = tab.querySelector('.tab-handle');
handle.addEventListener('click', () => { tab.classList.toggle('open'); });

document.querySelectorAll('.note').forEach(note => {
    const textElement = note.querySelector('.note-text');
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
