const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var blueLine, greenLine, yellowLine, redLine;
var waterballoon, waterBalloonImg;
var slingshot;
var boy, boyImg;
var BackgroundImg;
var ground;

var Score=0;
var count=1;
var lineNumber;
var gameState;
var x=0;
var y;
//var launchingForce=70;

function preload(){
  backgroundImg=loadImage("backgroundImg.jpg");
  boyImg=loadImage("boy.png");
  waterBalloonImg=loadImage("waterballoon.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(600, 590, 1200, 20);
  boy=new Boy(150, 495, 150, 200);

  blueLine=new Line(1150, 550, 10, 100, "darkBlue");

  yellowLine=new Line(950, 550, 10,100, "yellow");

  greenLine=new Line(750, 550, 10,100, "green");

  redLine=new Line(550, 550, 10, 100, "red");

  waterballoon= new WaterBalloon(95, 450, 35, 50);

  slingshot=new SlingShot(waterballoon.body,{x:95,y:450})
  gameState="Serve";

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  textSize(25);
  fill(rgb(0, 128, 255));
  text("Score: " + Score, 1050, 50);
  if(gameState==="Serve"){
    textSize(25);
    fill(rgb(0, 128, 255));
    text("Press the space key to get a second chance!", 350, 50);
  }

  textSize(25);
  fill("red");
  text("10", 560, 550);

  fill("green");
  text("20", 760, 550);

  fill("yellow");
  text("30", 960, 550);
  
  fill("Darkblue");
  text("40", 1160, 550);

if(count===4){
  gameState="end";

  if(Score>=130 && gameState==="end"){
    textSize(30);
    text("YOU WIN!!😀", 550, 250);
  }

  else
  if(Score<130 && gameState==="end"){
    textSize(30);
    text("YOU LOSE😔", 550, 250);

  }
}

camera.position.x=displayWidth/2;
camera.position.y=y;

  ground.display();
  blueLine.display();
  greenLine.display();
  yellowLine.display();
  redLine.display();

  boy.display();
  waterballoon.display();
  slingshot.display();
  
  //drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(waterballoon.body, {x:mouseX, y:mouseY});
  console.log("mouseDragged");
  console.log(waterballoon.body.position.x);
  console.log(waterballoon.body.position.y);

  if(waterballoon.body.position.x >= 1150 && waterballoon.body.position.x<=1170 && waterballoon.body.position.y>= 550 && waterballoon.body.position.y<=600){

    console.log("bl");
    lineNumber=4;
  }

  if(waterballoon.body.position.x >= 950 && waterballoon.body.position.x<=970 && waterballoon.body.position.y>= 550 && waterballoon.body.position.y<=600){

    console.log("yl");
    lineNumber=3;
  }

  if(waterballoon.body.position.x >= 750 && waterballoon.body.position.x<=770 && waterballoon.body.position.y>= 550 && waterballoon.body.position.y<=600){

    console.log("gl");
    lineNumber=2
  }

  if(waterballoon.body.position.x >= 550 && waterballoon.body.position.x<=570 && waterballoon.body.position.y>= 550 && waterballoon.body.position.y<=600){

    console.log("rl");
    lineNumber=1
  }
}

function mouseReleased()
{
	slingshot.fly();
  console.log("mouseReleased");
  console.log(waterballoon.body.position.x);
  console.log(waterballoon.body.position.y);

if(lineNumber===4){
  console.log("bl");
  Score=Score+40;
}

if(lineNumber===3){
  console.log("yl");
  Score=Score+30;
}

if(lineNumber===2){
  console.log("gl");
  Score=Score+20;
}

if(lineNumber===1){
  console.log("rl");
  Score=Score+10;
}
}

function keyPressed() {
	if (keyCode === 32) {
	  slingshot.attach(waterballoon.body);
	}
  }