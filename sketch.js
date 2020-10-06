var bullet,wall,bullet_img,wall_img;
var speed,weight,damage,thickness;
var gameState;
var reTest,reTest_img,test;
var gun,gun_img;

function preload(){
  bullet_img = loadImage("bullet.png");
  wall_img = loadImage("wall1.jpg");
  test_img = loadImage("icon.png");
  gun_img = loadImage("gun.jpg");
}
function setup() {
  createCanvas(1000,400);

  gameState = "testing";

  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);

  wall = createSprite(900,200,thickness,400);
  wall.addImage("wall2",wall_img);
  //wall.debug = true;
  wall.scale = 0.5;

  gun = createSprite(100,300,50,50);
  gun.addImage("gun1",gun_img);
  gun.scale = 0.3;

  bullet = createSprite(200, 250, 60, 40);
  bullet.addImage("bull",bullet_img);
  bullet.velocityX = 10;
  bullet.setCollider("rectangle",0,0,300,200);
  //bullet.debug = true;
  bullet.scale = 0.09;

  test = createSprite(600,300,50,50);
  test.scale = 0.3;
  test.addImage("test1",test_img);
}

function draw() {
  background("white");
  test.visible = false;
    if(gameState === "testing"){
    if(bullet.isTouching(wall)){
      bullet.velocityX = 0;
      Damage();
      gameState = "retest";
    }
    }else if(gameState === "retest"){
      test.visible = true;
      if(mousePressedOver(test)){
        reset();
      }
    }
  


  drawSprites();
}

function reset(){
  bullet.x = 200;
  bullet.y = 250;
  bullet.velocityX = 10;
 gameState = "testing";
 test.visible = false;

}
function Damage (){
  var signal = createSprite(600,50,60,200);
  signal.shapeColor = "white";
  

  if(damage>10){
    signal.shapeColor = "green";
  
  }

  if(damage<10 ){
    signal.shapeColor = "red";
  }
  }
