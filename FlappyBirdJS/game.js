let cvs = document.getElementById('screen');
let ctx = cvs.getContext('2d');





var posY = 10;
document.addEventListener("keydown", (event) => {
    if(event.keyCode == 38) {
        birdSettings.yPos -= 35
    }
    if(event.keyCode == 40) {
        birdSettings.yPos += 25
    }
});


var pipes = [];
pipes[0] = {
    x: cvs.width,
    y: 0
}
// Audio
let scoreAudio = new Audio();
scoreAudio.src = 'sounds/score.mp3'
// Images
let bird = new Image(),
    bg = new Image(),
    fg = new Image(),
    pipeTop = new Image(),
    pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeTop.src = 'img/pipeTop.png';
pipeBottom.src = 'img/pipeBottom.png';

let pipeGap = 90;
let score = 0;
let birdSettings = {
    xPos: 10, // Start Position X
    yPos: 150, // Start Position Y
    gravity: 1.5 // Gravity
}

let draw = () => {
    ctx.drawImage(bg,0,0);

    for(let i = 0; i < pipes.length; i++) {
       // console.log(pipes)
        ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y);
        ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeTop.height + pipeGap);

        pipes[i].x -= 1;
        //console.log(pipes[i].x)
        if(pipes[i].x == 125) {

            pipes.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height
            });
        }
        // if(pipes.length > 6) {
        //     pipes.splice(0,2);
        // }
        // Pipe Bump
        if(birdSettings.xPos + bird.width >= pipes[i].x 
            && birdSettings.xPos <= pipes[i].x + pipeTop.width
            && (birdSettings.yPos <= pipes[i].y + pipeTop.height 
                || birdSettings.yPos + bird.height >= pipes[i].y + pipeTop.height + pipeGap)) {
                location.reload();
        }
        // Bottom Bump
        else if(birdSettings.yPos + bird.height >= cvs.height - fg.height || birdSettings.yPos < 10) {
            location.reload();
        }

        if (pipes[i].x == 5) {
            score++;
            scoreAudio.play();
        }

    }


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, birdSettings.xPos, birdSettings.yPos);
    birdSettings.yPos += birdSettings.gravity;

    ctx.fillStyle='#000';
    ctx.font = "24px Arial";
    ctx.fillText(`Score ${score}`, 10, cvs.height - 20)

    
    requestAnimationFrame(draw);
}

pipeBottom.onload = () => {
    draw();
}