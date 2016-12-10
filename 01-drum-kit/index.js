window.addEventListener('load', () => {
  const keydownHandler = function(evt) {
    const code = evt.keyCode;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('play');
  };
  
  const transitionendHandler = function(evt) {
    if (evt.propertyName !== 'transform') return;
    this.classList.remove('play');
  };

  const keys = document.querySelectorAll('.key');
  
  [].forEach.call(keys, (key) => key.addEventListener('transitionend', transitionendHandler));
  
  window.addEventListener('keydown', keydownHandler);
});