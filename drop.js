class Drop{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restituition : 0.5,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,5,options)
        World.add(world,this.body)
    }

    display(){
        var pos =this.body.position;
        push()
        ellipseMode(CENTER);
        fill(rgb(0,191,255));
        ellipse(pos.x, pos.y, 8);
        pop()
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x : random(0,600), y : random(0,400)})
        }
    }
}