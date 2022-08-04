/**************************
 * Variables and data types
 */
console.log('Jennifer is learning');

var firstName = 'John';
console.log(firstName); // John

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge); //true

var job;
console.log(job); //undefined

job = 'Teacher';
console.log(job); //Teacher

// Variable naming rules
// Variables cannot start with a number or symbol except for the dollar sign ($) or the underscore(_). If you do otherwise, you'll get an error.
var _3years = 3;
//The same rule is applicable to not using a symbol in the middle of a variable name. Symbols like slash (/).
var johnMark = 'John and MArk';
// You cannot use reserved JavaScript keywords as variable names. e.g function, delete, if, etc. For instance, using var function = 23; will give unexpected token.

/***********
 * Varable mutation and type coercion
 */

var firstName = 'John';
var age = 28;

/********** 
*This works through the use of type coercion. JavaScripts automatically converts types from 
one another as it is needed. So in this case, it converts age (in number) to a string in order to be 
able to join the three string (firstName, space and the age which will be automatically converted from
a number to a string). The console below is an example of type coercion. 
*/
console.log(firstName + ' ' + age); //John 28

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); //John is a 28 year old Teacher. Is he married? false

// Variable mutation
age = 'twenty eight';
job = 'driver';

//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried) //John is a twenty eight year old driver. Is he married? false

//var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName); //John Smith

/******************
* Basic Operators
*/
// You can declare all of this variables in one line in order not to keep repeating var.
year = 2018;
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn); //1990
console.log(yearMark); //1985

//Math Operators
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(now + 2); //2020
console.log(now * 2); //4036
console.log(now / 10); //201.8

//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); //false
var johnOlder = ageJohn < ageMark;
console.log(johnOlder); //true

//typeof Operator
console.log(typeof johnOlder); //Boolean
console.log(typeof ageJohn); //Number
console.log(typeof 'Mark is older than John'); //String
var x; 
console.log(typeof x); //Undefined

/******
 * Operator Precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true
 console.log(isFullAge); //John is of full age.

 //Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); //32

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //  8 * 4 - 6 //32 - 6 // 26
//The assignment operator works from the right to the left and not from the left to the right. From the above expression, y will be solved first before x.
console.log(x, y);

//More operators
x *= 2; //x = x * 2
console.log(x);
x += 10; //x = x + 10;
console.log(x);
x++; //x = x + 1, x +=1, and x++ are examples of increment.
console.log(x);
x--;
console.log(x);













