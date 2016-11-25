/**************************************
 * Concentric Circles - System Variables
 ***************************************
Draws 6 concentric circles. Variables are 
used to store the center position, rather 
than 'hard coding' the values as args.
The positions of the circles 
can be changed more easily by 
changing the values of the variables.

This version uses the width and height 
system variables to set the positions and 
dimensions of the circles. This means
the display will scale properly when it is
resized.

Liam O'Sullivan - lmosulli@tcd.ie

*/
size(800,800); //call size() first, so that width and height are set
float sizeStep = width/6; //divide the width by the number of circles  
int xPosition = width/2; //variable for x coordinate of circles, as they are concentric
int yPosition = height/2; //variable for y coordinate
background(0);
noFill();
stroke(255);
ellipse(xPosition,yPosition, 6*sizeStep,6*sizeStep); //use the variables as arguments
ellipse(xPosition,yPosition, 5*sizeStep,5*sizeStep);
ellipse(xPosition,yPosition, 4*sizeStep,4*sizeStep);
ellipse(xPosition,yPosition, 3*sizeStep,3*sizeStep);
ellipse(xPosition,yPosition, 2*sizeStep,2*sizeStep);
ellipse(xPosition,yPosition, 1*sizeStep,1*sizeStep);
