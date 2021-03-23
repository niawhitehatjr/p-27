class Bob{
constructor(x,y,r){
    var options={
        restitution:1,
    friction:0.8,
density:0.9}
this.r = r;
this.body=Bodies.circle(x,y,this.r/2,options);
World.add(world,this.body)
}    
display(){
    var pos=this.body.position;
    push ()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill ("pink");
    ellipse(0,0,this.r,this.r);
    pop ();
}
}
