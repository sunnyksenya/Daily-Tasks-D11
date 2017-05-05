function f1(event) {
  var a = document.querySelector('.image')
  a.style.left = event.offsetX + 'px';
  a.style.top = event.offsetY + 'px';
  // this.innerHTML = event.offsetX;
}
document.querySelector('.test').addEventListener('mousemove', f1);
