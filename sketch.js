var shipImage , seaImage , sea;
function preload(){
shipImage = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" 
,"ship-4.png");

seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImage);
  sea.scale = 0.3;

  sea.velocityX = -2;
  sea.x = sea.width/8;

  ship = createSprite(200,200);
  ship.addAnimation("movingShip", shipImage);
  ship.scale = 0.3

}

function draw() {
  background("blue");
 
  if (sea.x<0)
  {
    sea.x = sea.width/8;
  }

  drawSprites();
}