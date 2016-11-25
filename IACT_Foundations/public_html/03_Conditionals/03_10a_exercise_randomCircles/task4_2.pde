/****************************************************
MMT: Introduction to Programming
*****************************************************
Task 4.2
*****************************************************
Write a sketch that draws 20 circles to the screen. 
The circles should be drawn in random positions on the display.

Use int variables to store the x and y positions of the drawn circles.
Hint: you must generate random values for these variables for each 
circle being drawn, so the random() function calls will be inside the loop.


*****************************************************
by Liam O'Sullivan: lmosulli@tcd.ie
*/
//Set up the display the usual drawing functions... 
size(400,400);
background(0);
smooth();

//Declare 2 int variables to hold the values of the x and y positions of the circle being drawn
int xPosition;
int yPosition;

//For loop will iterate 20 times
for(int count=0;count<20;count++){
 xPosition = int(random(0,width)); //random() returns a floating point value, 
 //so we must place the whole random() call inside int() to convert the value generated to an integer 
 yPosition = int(random(0, height));
  ellipse(xPosition, yPosition , 50, 50); //use the randomly generated values to position the CURRENT circle
}//remember to close the if statement curly braces!
