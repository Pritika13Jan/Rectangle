var box
function setup() {
  createCanvas(600,600);
box=createSprite(255,245,50,50)
}


function draw() 
{
  background(220);
  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x+7

  }
  if(keyIsDown(LEFT_ARROW))
  {
    box.position.x=box.position.x-7
  }
  drawSprites();
}




