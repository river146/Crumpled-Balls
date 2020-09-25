var ball1,ground,b1,b2,b3;

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
	ground=new Ground(400,690,800,20);
	ball1=new Ball(60,200,20,40);
	b1=new buckets(660,640,20,100,PI/2)
	b2=new buckets(715,680,100,20,PI/4)
	b3=new buckets(770,640,20,100,PI/2)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();


  keypressed();

  drawSprites();
 
}
function keypressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}



