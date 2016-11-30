/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function preload() {
  mySound = loadSound('sounds/laser1.wav');
}

function setup() {
  mySound.setVolume(0.5);
  mySound.play();
}

function keyPressed(){
    mySound.play();

}
