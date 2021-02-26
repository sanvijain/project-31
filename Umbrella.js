class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true,

        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image=loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        World.add(world,this,body);

    }
   display(){
       var pos= this.body.position;
       imageMode(CENTER);
       this.image(this.image,pos.x,pos.y,300,300);

    }
}