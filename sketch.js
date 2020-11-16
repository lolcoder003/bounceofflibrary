


var o1, o2;


function setup() {
  createCanvas(1200,800);
  o1 = createSprite(400, 100, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  o2 = createSprite(400, 800,80,30);
  o2.shapeColor = "green";
  o2.debug = true;

  o1.velocityY = 0;
  o2.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(o1,o2);

  drawSprites();
}













