
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

	//Crie os Corpos Aqui.
 var plane_options = {
	isStatic : true
 }
 plane = Bodies.rectangle(800, 700, 1600, 10, plane_options);
 World.add(world, plane);
 	Engine.run(engine);
  var block1_options = {
	restitution: 0.7,
	friction: 0.01, 
	frictionAir: 0.1,
}
 var block2_options = {
	restitution: 0.7,
	friction: 0.01, 
	frictionAir: 0.1,
  }

   var block3_options = {
	restitution: 0.7,
	friction: 0.01, 
	frictionAir: 0.1,
  }

  block1 = Bodies.circle(220, 10, 10, block1_options);
  World.add(world, block1);

    block2 = Bodies.rectangle(110, 50, 10, 10, block2_options);
  World.add(world, block2);

    block3 = Bodies.rectangle(350, 50, 10, 10, block3_options);
  World.add(world, block3);

}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  rect(plane.position.x, plane.position.y, 1600, 10);
  drawSprites();
  ellipse(block1.position.x, block1.position.y, 10, 10);
  rect(block2.position.x, block2.position.y, 10, 10);
  rect(block3.position.x, block3.position.y, 10, 10);
}



