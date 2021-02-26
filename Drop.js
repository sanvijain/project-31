class Drop{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:0.1,
            friction:0.1,
        
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this,body);

    }
    update(){
        if(this.body.position.y > height){
            Matter.body.setPosition(this.body,{x:random(0,500),y: random(0,650)});
        }
    }
    display(){
        noStroke();
        fill(0,0,255);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius);

    }
}