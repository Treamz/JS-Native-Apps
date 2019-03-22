var game = {
    ctx: undefined,
    sprites: {
        background: undefined
    },
    start() {
        let canvas = document.getElementById('mycanvas');
        this.ctx = canvas.getContext('2d');
        canvas.width = document.innerWidth;
        canvas.height = document.innerHeight
        this.sprites.background = new Image();
        this.sprites.background.src = "images/background.png";
        
        this.run();
    },
    render() {
        this.ctx.drawImage(this.sprites.background, 0, 0);
    },
    run() {
        this.render();
        window.requestAnimationFrame(() => {
            this.run();
        });

    }
}

window.addEventListener('load', () => {
    game.start();
});