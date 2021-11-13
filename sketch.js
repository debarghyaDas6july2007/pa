
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var down;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  down = new Ground(600,600,700,20)

	//Create the Bodies Here.
  var ball_options={
	  restitution:0.3
	  density:1.2
	  friction:0
	  isStatic:false
  }
  ball = Bodies.circle(200,200,20,bal_options)
  World.add(world,ball)

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 down.Display()
 ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}



