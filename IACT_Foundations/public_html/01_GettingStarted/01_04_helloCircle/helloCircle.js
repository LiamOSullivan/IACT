/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

function setup() {
    createCanvas(400, 400); //set the size of the display window
    background(0); //set the background colour of the display
    fill(255);     //fill any drawn shapes with the colour specified in grayscale colourspace (number between 0 and 255)
    ellipse(200, 200, 100, 100); //draw an ellipse with the associated parameters (x-position, y-position, width, height)
    println("Hello Circle!"); //print the the phrase to the console window, followed by an 'endline' character
}