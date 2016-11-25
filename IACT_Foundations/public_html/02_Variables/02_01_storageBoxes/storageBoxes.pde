/**************************************
 * Storage Boxes
 ***************************************


Shows how variables may be understood as 'storage boxes' 
in computer memory which hold values.

Liam O'Sullivan - lmosulli@tcd.ie

*/

int boxA = 10; //create a 'box' called a and write a value to it
int boxB = 666; //create a 'box' called b and write a value to it

println(boxA); //read the value from box a and print it out - NOTICE NO DOUBLE QUOTES
println(boxB); 

println("The value in boxA is: "+boxA); //read the value from box a and print it out with a message as preamble
println("The value in boxB is: "+boxB); 

boxA = -1234;
boxB = 5678;

println("The value in Box A has changed to: "+boxA); //read the current value from box a and print it out with a message as preamble
println("The value in Box B has changed to: "+boxB); 

boxA = boxB; //take the value from boxB and put it in BoxA

println("The value in Box A has changed again, to: "+boxA); 
println("The value in Box B has now changed to: "+boxB); 





