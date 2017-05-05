var x = 0;
var y = 0;
function f1 (event) {
  console.log(event);
  if(event.key == 'ArrowRight' && x<=80) {
    x=x+10;
  }
  if(event.key == 'ArrowLeft'&& x>=10) {
    x=x-10;
  }
  document.querySelector('.hero').style.left = x + 'px';

  if(event.key == 'ArrowUp'&& y>=10) {
    y=y-10;
  }
  if(event.key =='ArrowDown'&& y<=80) {
    y=y+10;
  }
  document.querySelector('.hero').style.top = y + 'px';
}
document.addEventListener('keydown', f1);
