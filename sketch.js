var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(233,321)
  weight=random(30,52)
  bullet = createSprite(40,200,40,40)
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue";
  thickness=random(22,83)
  bullet.debug=true;
}

function draw() {
  background("green");
  hasCollided(bullet,wall);
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor = color(255,0,0)
    }
    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
    
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x-30;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  } else {
    return false;
  }
}