const canvas = document.getElementById(pong);
// getContext give the property and Method for drawing the convas.
const context = document.getContext("2d");

context.fillStyle ="black";
context.fillRect(100,200,50,75);
context.beginPath();
cont.contextarc(300,350,  100,   0,  Math.PI*2,false)
// x a position and y  radius starting index.  ending index.

context.closePath();

// function======================

function drawReact(x,y,w,h,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);
}

function drwaCircle(x,y,r,color){
    ctx.fillStyle= color;
    ctx.beginPath();
    ctx.arc('y','x','z',0,math.pi*2,false);
    ctx.closePath();
    ctx.fill();

}

function drawText(text,x,y,color){
    ctx.fillStyle = color;
    ctx.font = "75px fantasy";
    ctx.fillText(text,x,y);
}

// how to move rectangle to the canvas

// drawRect(x,y,w,h,color);


// drawRect(100,100,100,100,'red'); // inside the rectangle


// drawRect(0, 0, 600,400,'black'); //draw the canvas


// drawRect(300,100,100,100,'red');  // change the position of the rectangle

// drawRect(0, 0, 600,400,'black'); //draw the canvas 

// drawRect(300,100,100,100,'red');  // again change the position of the rectangle

let rectX = 0;

function render(){
    
    // clear the canvas first then create a rentangle
    drawRect(0, 0, 600, 400, "black");

    drawRect(0, 100, 100, 100, "red");

    rectX +=100;
}

setInterval(render, 1000);

// craete the computer and user  paddle

const user ={
    x: 0,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "WHITE",
    score: 0
}



const com ={
    x: canvas.width - 10,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "WHITE",
    score: 0
}