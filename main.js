var width=screen.width;
var lastX, lastY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 3;
var newidth=screen.width-70;
var newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", touch_start);
function touch_start(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_line").value;
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    lastX = current_x;
    lastY = current_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }