const s = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(s);
window.addEventListener(
  'mousedown',
  () => (s.innerHTML = ':focus{outline:0}::-moz-focus-inner{border:0;}')
);
window.addEventListener(
  'keydown',
  event => ![16,17].includes(event.keyCode) && (s.innerHTML = '')
);
