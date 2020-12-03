
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
    block=new Block(200,100,300,100)
	line=new String(block.body,{x:250,y:150})
	line1=new String(block.body,{x:300,y:150})
	line2=new String(block.body,{x:350,y:150})
	line3=new String(block.body,{x:400,y:150})
	line4=new String(bloock.body,{x:450,y:150})
	blob=new Blob(250,450,50);
	blob1=new Blob(300,450,50);
	blob2=new Blob(350,450,50);
	blob3=new Blob(400,450,50);
	blob4=new Blob(450,450,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  block.display()
  line1.display()
  line2.display()
  line3.display()
  line4.display()
  line.display()
  blob.display()
  blob1.display()
  blob2.display()
  blob3.display()
  blob4.display()
  drawSprites();
 
}



