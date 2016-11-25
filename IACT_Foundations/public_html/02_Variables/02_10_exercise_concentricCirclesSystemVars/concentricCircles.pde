/**************************************
 * Concentric Circles
 ***************************************


Draws 6 concentric circles. Variables are 
used to store the center position, rather 
than 'hard coding' the values as args.
The positions of the circles 
can be changed more easily by 
changing the values of the variables.

Liam O'Sullivan - lmosulli@tcd.ie

*/

int xPosition = 300; //variable for x coordinate of circles, as they are concentric
int yPosition = 300; //variable for y coordinate


size(600,600);
background(0);
noFill();
stroke(255);
ellipse(xPosition,yPosition, 600,600); //use the variables as arguments
ellipse(xPosition,yPosition, 500,500);
ellipse(xPosition,yPosition, 400,400);
ellipse(xPosition,yPosition, 300,300);
ellipse(xPosition,yPosition, 200,200);
ellipse(xPosition,yPosition, 100,100);
