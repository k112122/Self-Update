

var homepage, homepageImg;
var storyImg, story;
var gameState=0;
var desertM, desertMImg;
var desertN, desertNImg;
var migrant, migrantImg;
var background;
function preload(){

homepageImg = loadImage("images/homepage.jpg");
desertMImg = loadImage("images/Morning Landscape.jpg");
desertNImg = loadImage("images/Night day1,2.jpg");
migrantImg = loadImage("images/migrant.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-200);

  form1 = new Form();

  
}

function draw() {
  text (mouseX+","+ mouseY, mouseX, mouseY);

  if(gameState===0){

   background(homepageImg);
    form1.display();  
  }


if(gameState===2){




migrant=createSprite(200, 100);
//migrant= createSprite(displayWidth/4-200, displayHeight/2+150);
migrant.addImage(migrantImg);
migrant.scale=0.3;
background("red");

if(keyDown(UP_ARROW) ) {
migrant.y=migrant.y+10
}
if(keyDown(DOWN_ARROW) ) {
  migrant.y=migrant.y-10

}

}
    drawSprites();
}