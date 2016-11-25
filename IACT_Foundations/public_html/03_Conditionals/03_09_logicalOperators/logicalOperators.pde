/**************************************
 Logical Operators
*****************************************************
This sketch shows how to use variables of the boolean
data type with logical operators.

When these operators are tabularised it is called a 
truth table. This is sometimes called 'Boolean Logic'.

****************************************************
by Liam O'Sullivan: lmosulli@tcd.ie

*/

boolean value1 = true; //declare a variable of type boolean and assign it 'true'
boolean value2 = false; //declare a variable of type boolean and assign it 'false'

println("Value 1 is: "+value1); //print the value of the variable 'value1'

println("Logical NOT (Inversion) of Value 1 is: "+ !value1); //print the inverted (NOT) value 
//of the variable 'value1'
println("Value 2 is: "+value2); //print the value of the variable 'value2'

println("Value 1 AND Value 2 is: "+(value1&&value2));//perform the AND
//operation on the variables and print the result. If ***both*** variables are true, 
//the result will be true, otherwise it will be false.

println("Logical NOT of Value 1 AND Value 2 is: "+(!(value1 && value2)));//perform the AND
//operation on the (inverse of selection 1) and value2 and print the result. 
//If value1 is false it will be inverted to true. If value2 is also true, the result 
//will be true. In all other cases the result will be false.

println("Value 1 OR Value 2 is: "+(value1 || value2));//perform the OR
//operation on the variables and print the result. If ***either*** variable is true, 
//the result will be true, otherwise it will be false.
