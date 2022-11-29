const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var option = {
    restitution:0.95
  }
  ball = Bodies.circle(200,20,20,option)
  World.add (world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  button1=createImg("up.png")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(vforce)
  button2=createImg("right.png")
  button2.position(30,50)
  button2.size(50,50)
  button2.mouseClicked(hforce)

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse (ball.position.x,ball.position.y,20,20)
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}

