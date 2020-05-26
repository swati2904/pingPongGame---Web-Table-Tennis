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

//drawRect(x, y, w, h, color)
// for user
drawRect(user.x, user.y, user.width, user.height, user.color);

// for computer module
drawRect(com.x, com.y, com.width, com.height, com.color);


// net object

const net  ={
    x: canvas.width/2 -2/2,
    y: 0,
    width: 2,
    height: 10,
    color: "WHITE",
}
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y+i, net.width, net.height, net.color);

    }
}


// create & draw the ball

const ball ={
    x: canvas.width/2,
    y:canvas.height/2,
    radius: 10,
    color: "WHITE"
}

drawCircle(x, y, r, color)
drawCircle(ball.x, ball.y, ball.r, ball.color);


// score
drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");
drawText(com.score, canvas.width/4, canvas.height/5, "WHITE");




// move the ball

const ball ={
    x: canvas.width/2,
    y: canvas.height/2,
    radius : 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5, //speed + direction
    color: "WHITE"

}




// collision detection ...

function collision(b, p){
    p.top = p.y;
    p.bottom = p.y +p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return b.right > p.left && b.btop < p.bottom && b.left < b.right && b.bottom > p.top;
}

function update(){

     // change the score of players, if the ball goes to the left "ball.x<0" computer win, else if "ball.x > canvas.width" the user win
     if( ball.x - ball.radius < 0 ){
        com.score++;
        comScore.play();
        resetBall();
    }else if( ball.x + ball.radius > canvas.width){
        user.score++;
        userScore.play();
        resetBall();
    }  
    
    ball.x += velocityX; //X+
    ball.y += velocityY; //Y+
    com.y += ((ball.y - (com.y + com.height/2)))*0.1;
    if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
        velocityY = - velocityY;
    }
    // we check that the paddle hit by the user or computer
    let player = ( ball.x < canvas.width/2)? user:com;
    if(collision(ball, player)){
        
        let collidePoint = (ball.y - (player.y + player.height/2));
        collidePoint = collidepoint/ (player.height/2);
        let angleRed = (Math.PI/4) * collidePoint;

        let direction = (ball.x < canvas.width/2)?1:-1;
        ball.velocityX =  ball.speed * Math.cos(angleRed);
        ball.velocityY =  ball.speed * Math.sin(angleRed);

        ball.speed += 0.1;

    }

    }
// render the game

function render(){
    drawRect(0, 0, canvas.width, canvas.height, "BLACK");
    drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");
    drawText(com.score, canvas.width/4, canvas.height/5, "WHITE");
    drawNet();
    drawRect(user.x, user.y,user.width,user.height,user.color);

    drawrect(com.x,com.y,com.width,com.height,com.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

}

function game(){
    render();
}
const framePerSecond = 50;

setInterval(game, 1000/framePerSecond); //call game(); 50 times every 1000ms = 1sec