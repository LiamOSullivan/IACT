/**************************************
Exercise 1.2
***************************************
The rect() function can be used to draw rectangles.

Write a sketch that draws a square of side 200 pixels to the display window. 
Draw a circle of half that size in front of the square (ensure the display 
window is big enough). 

Add a black background and try to colour the shapes using the PDE colour picker.

Do not print anything to the console.

***************************************
by Liam O Sullivan- lmosulli@tcd.ie
***************************************/

size(400,400); 
background(0); 
fill(229,39,12);     //set a fill colour
rectMode(CENTER);    // use the co-ordinates supplied to rect() as its center
//We are going to draw a square to the window using another function: rect()
//The rect() function takes the following arguments:
//rect(x-position, y-position, horizontal size, vertical size)
rect(200,200, 200,200); //draw the square
fill(62,212,219);     //set a different fill colour
ellipse(200,200, 100,100); //draw the circle
