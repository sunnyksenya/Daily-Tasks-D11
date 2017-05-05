function f1(event) {
  console.log(event.type);
  if (event.key == 'm' || event.type == "mouseover") {
    document.querySelector('.test').style.left = 0 + 'px';
  }
}
document.addEventListener('keydown', f1);
document.querySelector('.test').addEventListener('mouseover', f1);

function f2(event) {
  // console.log('f2 event');
  if (event.key == 'Escape' || event.type == "mouseout") {
    document.querySelector('.test').style.left = -200 + 'px';
  }
}
document.addEventListener('keydown', f2);
document.querySelector('.test').addEventListener('mouseout', f2);
