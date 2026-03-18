class Entity{
    constructor(iterations){
        this.dots = [];
        this.sticks = [];
        this.iterations = iterations || 16;
    }

    addDot(x, y, vx, vy){
        this.dots.push(new Dot(x, y, vx, vy));
    }

    addStick(p1, p2, length){
        this.sticks.push(new Stick(this.dots[p1], this.dots[p2], length));
    }

    updatePoints(){
        for(let i = 0; i < this.dots.length; i++){
            this.dots[i].update();
        }
    }

    updateSticks(){
        for (let i = 0; i < this.sticks.length; i++) {
            this.sticks[i].update();
        }
    }

    updateConstrains(){
        for (let i = 0; i < this.dots.length; i++) {
            this.dots[i].constrain();
        }
    }

    renderPoints(){
        for(let i = 0; i < this.dots.length; i++){
            this.dots[i].render(ctx);
        }
    }

    renderSticks(){
        for (let i = 0; i < this.sticks.length; i++) {
            this.sticks[i].render(ctx);
        }
    }

    update(){
        this.updatePoints();
        for (let j = 0; j < this.iterations; j++) {
            this.updateSticks();
            this.updateConstrains();
        }

        this.renderPoints(ctx);
        this.renderSticks(ctx);
    }
}