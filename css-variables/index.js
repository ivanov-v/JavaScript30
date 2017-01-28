window.addEventListener('load', () => {
  const inputs = document.querySelectorAll('input');
  
  inputs.forEach(input => input.addEventListener('mousemove', handler));
  inputs.forEach(input => input.addEventListener('change', handler));
  
  function handler() {
    const name = this.name;
    const value = this.value;
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${name}`, `${value}${sizing}`);
  }
});