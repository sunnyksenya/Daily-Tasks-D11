function f1(event) {
  console.log(event);
  this.innerHTML = event.offsetX;
}
function f2 () {
  alert('2222222');
}
document.querySelector('.test').addEventListener('mousemove', f1);
// document.querySelector('.test').addEventListener('click', f2);
// document.querySelector('.test').removeEventListener('mousemove', f1);
