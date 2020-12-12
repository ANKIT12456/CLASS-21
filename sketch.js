var moving,fixed,ran,rand;
var car,wall;
function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="blue";
  fixed=createSprite(200,200,50,50);
  fixed.shapeColor="green";
  rand=Math.round(random(30,100));
  ran=Math.round(random(50,150));
  fixed.width=rand;
  fixed.height=ran;
  car=createSprite(700,10,50,50);
  car.shapeColor="black";
  car.velocityY=3;
  wall=createSprite(700,200,50,height/2);
  wall.shapeColor="brown";
}
function draw() {
  background("red");  
  moving.y=mouseY;
  moving.x=mouseX;
  if(  istouching(moving,fixed)){
    textSize(25);
    text("YO !!!!",250,250);
  }
  if(istouching(car,wall)){
    car.velocityX=0;
    car.shapeColor="brown";
    wall.shapeColor="black";

  }
  bounceoff(car,wall);
  
  console.log(moving.y-fixed.y);

  drawSprites();
}
