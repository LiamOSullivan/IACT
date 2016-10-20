/**************************************
 Compound Arithmetic, Increment/Decrement and Assignment
*****************************************************

An example of how various math and assignment operators 
may be combined in a series of steps.

Note the use of many print statements throughout the code,
this allows us to check that each calculation is correct and,
in effect, allows us to 'debug' the code.

****************************************************
by Liam O'Sullivan: lmosulli@tcd.ie

*/

int answer; //declare an integer variable
answer = 4; //answer is 4 here
println("After initialisation, the answer is: "+answer);
answer++; // answer = answer+1; answer is 5 here
println("After increment, the answer is: "+answer);
answer -= 2; //answer = answer - 2; answer here is 3
println("After decrement by 2, the answer is: "+answer);
answer =  answer + answer; //answer here is 6
println("The final answer is: "+answer);
