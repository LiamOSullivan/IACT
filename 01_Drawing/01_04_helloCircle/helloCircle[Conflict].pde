/**************************************
* Foundations in Programming
***************************************
 Hello Circle
 
 Draws a circle to the display window and 
 prints a phrase to the console window
 ***************************************
 by Liam O Sullivan- lmosulli@tcd.ie
 ***************************************/

/* This sketch has multiple statements. Each ends in a semicolon. Statements are executed in order,
 from top to bottom. Each statement contains a function, which carries out a particular task.
 Functions are recognisable as the function name is followed by a set of parentheses (regular brackets).
 Arguments are provided to functions to tell them how to implement their tasks; if a function takes
 multiple arguments, they are seperated by commas.
 
 The Processing help can tell you how to use a function properly- highlight the function name and go to
 'Help>Find in reference.'
 */

size(400, 400); //set the size of the display window
background(0); //set the background colour of the display
//smooth();      //smooth out the drawing of the graphics (note that this is 'commented out' -
//it is treated like a comment and ignored as we don't need it, but want to leave it in the code for now).
fill(255);     //fill any drawn shapes with the colour specified in grayscale colourspace (number between 0 and 255)
ellipse(200, 200, 100, 100); //draw an ellipse with the associated parameters (x-position, y-position, width, height)
println("Hello Circle!"); //print the the phrase to the console window, followed by an 'endline'