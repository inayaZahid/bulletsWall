var bullet,wall,speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52)
  bullet=createSprite(50,200,50,20);
  wall=createSprite(1200,200,thickness,height/2);
  
bullet.shapeColor="white";
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
 
    if( hasCollided(bullet,wall)){
      bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
    }
    textSize(30)
    fill("white")
    
    text("Bullets and Walls",600,70);
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}