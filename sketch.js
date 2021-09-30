
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var balloptions={
		restitution:0.95
	
	  }
	  ball=Bodies.circle(200,100,20,balloptions);
	  World.add(world,ball)

	  right=new Ground(1100,600,20,120) 
	  left=new Ground(width/2,670,width,20)
	  
	  rectMode(CENTER);
	  ellipseMode(RADIUS);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



