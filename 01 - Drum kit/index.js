window.addEventListener('load', () => {
  window.addEventListener('keydown', (evt) => {
    const code = evt.keyCode;
    const audio = document.querySelector(`audio[data-key="${code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  });
});