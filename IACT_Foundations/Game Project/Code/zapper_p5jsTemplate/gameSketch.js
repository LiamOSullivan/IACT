var state=0; //state of game: 0-welcome, 1-game, 2-endscreen
var bugX, bugY, bugWidth=30, halfBugWidth=bugWidth/2, bugSpeed=10;
var playerX, playerY, playerWidth=30, halfPlayerWidth=playerWidth/2, playerSpeed=halfBugWidth;
var score=0, lives =3;


function preload() {
  zapSound = loadSound("sounds/Laser_Shoot.wav");
  splosion = loadSound("sounds/Explosion2.wav");
  die = loadSound("sounds/die.wav");
}

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
  playerY=height-50
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
}

function draw() {
  background(0);
  if (frameCount % 25 == 0){
    moveBug();
  }
  drawBug();
  drawPlayer();

  if(keyIsDown(LEFT_ARROW)){
    if(playerX>playerWidth){
      playerX-=playerSpeed;
    }    
    console.log("LEFT");
  }
  else if(keyIsDown(RIGHT_ARROW)){
    if(playerX<width-playerWidth){
      playerX+=playerSpeed;
    }
    console.log("RIGHT");
  }
  else if(keyIsDown(UP_ARROW)){
    console.log("FIRE"); //TODO: Better laser/ missile launch
    if((playerX > (bugX-halfBugWidth)) && (playerX < (bugX+halfBugWidth))){
      line(playerX+halfPlayerWidth, playerY, playerX+halfPlayerWidth, bugY+20); //laser to bug
      if( !splosion.isPlaying() ){
        splosion.play();
      }
      score+=1;
      resetBug();
    }
    else{
      line(playerX+halfPlayerWidth, playerY, playerX+halfPlayerWidth, 0);; //laser miss
    }
    if( !zapSound.isPlaying() ){
     zapSound.play();
   }
 }

 text("Score: "+score, 50,50);
 text("Lives: "+lives, 50, 100);

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
  var moveAmt = 0;
  //choose a random direction to move
  if(random(1.0)>0.5){
    moveAmt = -halfBugWidth;
  }
  else{
   moveAmt = halfBugWidth; 
 }
 //check if bug is going off canvas, and nudge back
 if(bugX > width-bugWidth){
  bugX -= bugWidth; 
}
else if(bugX < bugWidth){
  bugX += bugWidth; 
}
else{
    bugX += moveAmt; //move bug
  }
  //check if bug reaches player
  if(bugY < playerY)
  {
    bugY += bugSpeed;
  }
  else{
    resetBug();
    if(lives>0){
      lives-=1;
      if( !die.isPlaying() ){
        die.play();}
      }
      else{
      state=3; //game over, maaan
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


// function keyPressed(){
//   console.log(key);
//   if(keyCode==UP_ARROW){
//     console.log("FIRE");
//     fire(playerX);
//   }
// }


