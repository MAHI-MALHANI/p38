class WaterBalloon{
    constructor(x, y, width, height){
        var options={
            'friction':2.0,
            'density': 5.0,

        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        this.image=loadImage("waterballoon.png");
        World.add(world, this.body);
    }


   display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       // rect(this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       
    }
}