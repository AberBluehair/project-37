function setup(){
var monkey = createSprite(40,245,10,10);
monkey.setAnimation("monkey");
monkey.scale=0.15;
var ground = createSprite(200,320,1000,70);
ground.velocityX = -4;
ground.shapeColor = "brown";
var magik = createSprite(200,322,1000,70);
magik.visible = false;
var bananaGroup = createGroup();
var obstacleGroup = createGroup();
var survivalTime=0;
stroke("black");
textSize(20);
fill("black");
}
  bananaGroup;
  obstacleGroup;
function draw() {
 background(255);
  Food();
  Rocks();
  survivalTime=Math.ceil(World.frameCount/4);
text("Survival Time: "+ survivalTime,100,50);
if(keyDown("space")&&(monkey.isTouching(ground)))
{
monkey.velocityY = -15;
}
monkey.velocityY=monkey.velocityY+1;
ground.x = ground.width/2;
magik.x = magik.width/2;
monkey.collide(magik);
drawSprites();
  }
function Food() {
  if(World.frameCount%80===0) {
    var banana = createSprite(400,randomNumber(120,200));
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -8;
    banana.lifetime = 52;
    bananaGroup.add(banana);
  }
}

function Rocks() {
  if(World.frameCount%300==0) {
    var Stone = createSprite(400,270,10,10);
    Stone.setAnimation("Stone");
    Stone.scale = 0.15;
    Stone.velocityX = -8;
    Stone.lifetime = 52;
    obstacleGroup.add(Stone);
  }
}

  
