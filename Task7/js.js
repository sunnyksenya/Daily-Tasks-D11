function f1(event) {
  var a = document.querySelector('.test');

  console.log(event);
  if (event.key == 'Escape') {
    a.style.display = 'none';
  }
  if (event.key == 'm') {
    a.style.display = 'block';
  }
}
document.addEventListener('keydown', f1);
