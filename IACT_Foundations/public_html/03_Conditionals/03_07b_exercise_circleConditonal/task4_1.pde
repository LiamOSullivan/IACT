/****************************************************
 MMT: Introduction to Programming
 ****************************************************
 Task 4.1 
 ****************************************************
 Write a sketch that draws a circle to the screen at a random position. 
 Check the reference for how to use random().
 If the circle is drawn to the right hand side of the screen fill it with green, 
 otherwise fill it with red.
 ****************************************************
 by Liam O'Sullivan: lmosulli@tcd.ie 
 */
 
size(400, 400); //Set the display size
background(255); //Set background colour to white
smooth(); //Draw shapes smoothly

//Declare a variable to hold the value of the xposition of the cirecle.
//Generate a random number between 0 and width and assign this value to the variable. 

float xPosition = random(0, width); 

//Set up a if-else statement and choose a fill colour based on the value of xPosition.
//If xPosition is greater than width/2, it will be drawn to the right hand side of the display.
if ( xPosition > width/2) { //Check if the x co-ordinate is on the right hand side of the display
  fill(0, 255, 0);  //Fill with green
}
else {
  fill(255, 0, 0); //Fill with red
}
//Draw the circle, using the x position variable
ellipse(xPosition, height/2, 50, 50);

