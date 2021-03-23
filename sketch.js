const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bob,rop ;
var bgImg;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create();
 world=engine.world;
 roof=new Roof(400,100,400,20);
 bob1=new Bob(250,200,40);
rope1=new Rope(bob1.body,{x:250,y:100})
bob2=new Bob(300,200,40);
rope2=new Rope(bob2.body,{x:300,y:100})
bob3=new Bob(350,200,40);
rope3=new Rope(bob3.body,{x:350,y:100})
bob4=new Bob(400,200,40);
rope4=new Rope(bob4.body,{x:400,y:100})
bob5=new Bob(450,200,40);
rope5=new Rope(bob5.body,{x:450,y:100})
}

function draw() {
  Engine.update(engine)
  background("black");
  roof.display();  
  bob1.display()
  rope1.display()
  bob2.display()
  rope2.display()
  bob3.display()
  rope3.display()
  bob4.display()
  rope4.display()
  bob5.display()
  rope5.display()
  drawSprites();
}