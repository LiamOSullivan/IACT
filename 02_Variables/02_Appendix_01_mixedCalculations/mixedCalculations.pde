/**************************************
 Mixing Data Types in Calculations
*****************************************************
This sketch shows how mixing floating point and integer 
variables can sometimes 'go wrong'.

You should ensure that the variables being operated on
are the same data type as the expected answer.

This can be done by declaring them in the 'target' data 
type or by converting to the 'target' data type during 
the calculation.

****************************************************
by Liam O'Sullivan: lmosulli@tcd.ie

*/

float answer; //This variable will hold the answer

//int x = 11; //The first operand as an int
//int y = 2; //the second operand as an int
//answer = x/y; //divide x by y; gives an answer of 5.0-> Incorrect!

//2 ways to get around this...

//1st way: use floats for input variables
//float x = 11.0; //The first operand as a float
//float y = 2.0; //the second operand as a float
//answer = x/y; // divide x by y; gives an answer of 5.5-> Correct!

//2nd way: use the float() function to convert the int variables
int x = 11; //The first operand as an int
int y = 2; //the second operand as an int
answer = float(x)/float(y); // convert x and y to floats and divide; gives an answer of 5.5-> Correct!

print("The answer is: "+answer);
