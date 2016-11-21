var state=0; //state of game: 0-welcome, 1-game, 2-endscreen
var bugX, bugY, bugWidth=30, halfBugWidth=bugWidth/2, bugSpeed=10;
var playerX, playerY, playerWidth=30, playerSpeed =2;
var score=0, lives =3;


function setup() {
  createCanvas(1200, 600);
  background(0);
  noCursor();
  textSize(24);
  textFont("Georgia");
  text("Score: "+score, 50,50);
  // Set colors
  fill(255, 127);
  stroke(255);
  strokeWeight(2);
  fill(0);
  playerY = height-50;
  resetBug();
  playerX=width/2;
  playerY=height-50;

}

function draw() {
  background(0);
  text("Score: "+score, 50,50);
  if (frameCount % 25 == 0){
    moveBug();
  }
  drawBug();
  drawPlayer();
}

function drawBug()
{
  stroke(255);
  var saucerHeight = bugWidth * 0.7;
  line(bugX + halfBugWidth, bugY, bugX, bugY + saucerHeight);
  line(bugX + halfBugWidth, bugY, bugX + bugWidth, bugY + saucerHeight);
  line(bugX, bugY + saucerHeight, bugX + bugWidth, bugY + saucerHeight);
  var feet = bugWidth * 0.2;
  line(bugX + feet, bugY + saucerHeight, bugX, bugY + bugWidth);
  line(bugX + bugWidth - feet, bugY + saucerHeight, bugX + bugWidth, bugY + bugWidth);
  feet = bugWidth * 0.4;
  line(bugX + feet, bugY + saucerHeight, bugX, bugY + bugWidth);
  line(bugX + bugWidth - feet, bugY + saucerHeight, bugX + bugWidth, bugY + bugWidth);
  line(bugX + feet, bugY + feet, bugX + feet, bugY + feet * 1.1);  
  line(bugX + bugWidth - feet, bugY + feet, bugX + bugWidth - feet, bugY + feet * 1.1);
  line(bugX + feet, bugY + feet * 1.4, bugX + bugWidth - feet, bugY + feet * 1.4); 
}

function moveBug(){

  if(bugX < width-bugWidth){
    bugX += random(-width/20, width/20); 
  }else{
    bugX-= bugWidth;
  }
  
  if(bugX > bugWidth){
    bugX += random(-width/20, width/20); 
    //TODO: move bug in more complex way/ with pattern
  }
  else{
    bugX+= bugWidth;
  }


  if(bugY < playerY)
  {
    bugY += bugSpeed;
  }
  else{
    resetBug();
    if(lives>0){
      lives-=1;
    }
    else{
      state=3;
    }
    
  }
}

function resetBug(){
 bugX= random(width);
 bugY = 50;
 bugSpeed = 10;

}

function drawPlayer(){
  var playerHeight = playerWidth / 2;
  line(playerX, playerY + playerHeight, playerX + playerWidth, playerY + playerHeight);
  line(playerX, playerY + playerHeight, playerX, playerY + playerHeight * 0.5);
  line(playerX + playerWidth, playerY + playerHeight, playerX + playerWidth, playerY + playerHeight * 0.5);  
  line(playerX, playerY + playerHeight * 0.5, playerX + playerWidth * 0.2, playerY + playerHeight * 0.3);
  line(playerX + playerWidth, playerY + playerHeight * 0.5, playerX + playerWidth * 0.8, playerY + playerHeight * 0.3);
  line(playerX + playerWidth * 0.2, playerY + playerHeight * 0.3, playerX + playerWidth * 0.8, playerY + playerHeight * 0.3);
  line(playerX + playerWidth * 0.5, playerY, playerX + playerWidth * 0.5, playerY + playerHeight * 0.3); 

}

function movePlayer(){



}

function keypressed(){
  console.write(key);
}


