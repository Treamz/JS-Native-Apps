const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

// Load Images
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
ground.src = "img/food.png";

// Create the snake

let snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random()*17+1) * box,
    y: Math.floor(Math.random()*15+3) * box
}


let score = 0;

// draw everything

function draw() {
    ctx.drawImage(ground,0,0);
    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y,box,box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y,box,box);
    }
    ctx.drawImage(foodImg, food.x, food.y);
}


let game = setInterval(draw,100);