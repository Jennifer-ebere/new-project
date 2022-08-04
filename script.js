/**************************
 * Variables and data types
 */
console.log('Jennifer is learning');

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

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
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
















