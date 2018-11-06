const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'red';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if(!isDrawing) return;
    // console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener('mousemove', (e)=> {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseout', () => isDrawing = false);



  // "b" (66) - change pen color to blue
  // "g" (71) - change pen color to green
  // "r" (82) - change pen color to red
  // "y" (89) - change pen color to yellow
  // "up arrow" (38) - make pen size larger
  // "down arrow" (40) - make pen size smaller
  // "space bar" (32) - clear the canvas (other than the current pen tip)



window.addEventListener("keydown", changeColor);

// var event = window.event;

  function changeColor(event){
    // console.log(event);
    var x = event.which || event.keyCode;
    // console.log(x);
    if (x == 66){
        ctx.strokeStyle = 'blue';
      }

    if (x == 71){
        ctx.strokeStyle = 'green';
      }

    if (x == 82){
        ctx.strokeStyle = 'red';
      }

    if (x == 89){
        ctx.strokeStyle = 'yellow';
      }

    if (x == 38){
        ctx.lineWidth += 5;
        if (ctx.lineWidth > 50){
          ctx.lineWidth = 50;
        }
      }

    if (x == 40){
        ctx.lineWidth -= 5;
        if (ctx.lineWidth <= 5){
          ctx.lineWidth = 5;
        }

      }

      console.log(ctx.lineWidth)

      if (x == 32){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
}




canvas.addEventListener('touchmove', (e)=> {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);
