canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

var mouseevent=" ";
var color=" ";
var width_of_line=" "
var current_posi_of_x, current_posi_of_y;
var last_posi_of_x, last_posi_of_y;

var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if(width<992){
    document.getElementById("MyCanvas").width=new_width;
        document.getElementById("MyCanvas").height=new_height;
        document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    console.log("touchstart");
    last_posi_of_x= e.touches[0].clientX-canvas.offsetLeft;
    last_posi_of_y= e.touches[0].clientY-canvas.offsetTop;
};

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){

    console.log("touchmove");
    current_posi_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_posi_of_y=e.touches[0].clientY-canvas.offsetTop;

    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;

     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;

     console.log("last positions of x and y coordinates-");
     console.log("x- "+last_posi_of_x+ "y- "+last_posi_of_y);
     ctx.moveTo(last_posi_of_x, last_posi_of_y);

     console.log("current positions of x and y coordinates");
     console.log("x- "+current_posi_of_x+"y- "+current_posi_of_y);
     ctx.lineTo(current_posi_of_x, current_posi_of_y);
     ctx.stroke();
    
    last_posi_of_x=current_posi_of_x;
    last_posi_of_y=current_posi_of_y;
};

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    console.log("mousedown");
};
canvas.addEventListener("mousedleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
    console.log("mouseleave");
};
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
    console.log("mouseup");
};
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_posi_of_x=e.clientX-canvas.offsetLeft;
    current_posi_of_y=e.clientY-canvas.offsetTop;

    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;

    if(mouseevent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;

     console.log("last positions of x and y coordinates-");
     console.log("x- "+last_posi_of_x+ "y- "+last_posi_of_y);
     console.log("current positions of x and y coordinates");
     console.log("x- "+current_posi_of_x+"y- "+current_posi_of_y);
     ctx.moveTo(last_posi_of_x, last_posi_of_y);
     ctx.lineTo(current_posi_of_x, current_posi_of_y);
     ctx.stroke();
    }
    last_posi_of_x=current_posi_of_x;
    last_posi_of_y=current_posi_of_y;
};
function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
