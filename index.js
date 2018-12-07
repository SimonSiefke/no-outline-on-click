const styleElement = document.createElement('style')
document.getElementsByTagName('head')[0].appendChild(styleElement)
const hideOutline = () =>
  (styleElement.innerHTML = ':focus{outline:0}::-moz-focus-inner{border:0;}')
const showOutline = () => (styleElement.innerHTML = '')
window.addEventListener('mousedown', hideOutline)
window.addEventListener('keydown', showOutline)
