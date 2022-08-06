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

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried) //John is a twenty eight year old driver. Is he married? false

var lastName = prompt('What is his last Name?');
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
console.log(x); //52
x += 10; //x = x + 10;
console.log(x); //62
x++; //x = x + 1, x +=1, and x++ are examples of increment.
console.log(x); //63
x--;
console.log(x); //62


/************************
 * CODING CHALLENGE 1
 */

/**
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1.Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOODLUCK 
*/

var massMark = 78; //kg
var heightMark = 1.69; //meter

var massJohn = 92;
var heightJohn = 1.95; //meter

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); //27.30... (for mark) 24.19 (for John)

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI); //Is Mark's BMI higher than John's? true.

/**********************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single'; //Civil status states whether one is married, single or divorced.

if (civilStatus === 'married') {
  console.log(firstName + 'is married!'); //When logged into the console, nothing happens, because the if statement happens to be false as John is single and not married.
} else {
  console.log(firstName + ' will hopefully marry soon :)'); //John will hopefully marry soon :)
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!'); //John is married!
} else {
  console.log(firstName + ' will hopefully marry soon :)')
}

var massMark = 78; //kg
var heightMark = 1.69; //meter

var massJohn = 92;
var heightJohn = 1.95; //meter

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher than John\'s. '); //Mark's BMI is higher than John's.
} else {
  console.log('John\'s BMI is higher than Mark\'s. ');
}

/***
 * Boolean Logic
 */

var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy. '); // If John's age is less than 13, he is a boy.
} else if (age >= 13 && age < 20 ) { // Between 13 and 20 === age >= 13 AND < 20.
  console.log(firstName + ' is a teenager. '); //If John's age is greater than 13 but not less than 20, he is a teenager.
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man. '); // If John's age is greater than 20 but not less than 30, he is a young man.
}else {
  console.log(firstName + ' is a man. '); //If John's age is above 30, he is a man.
} 

/**********
 * The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice. '); //The result will be John drinks juice because his age is less than 18.

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice'; //The if else stmt is the same thing with the ternary operator.
}*/ 

// Switch statement
var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.'); //When the job is teacher as declared in the variable, "John teaches kids how to code." will be the result.
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.'); //When the job is driver as declared in the variable, "John drives an uber in Lisbon." will be the result.
    break; 
  case 'designer':
    console.log(firstName + ' designs beautiful websites.'); //When the job is designer as declared in the varaiable, "John designs beautiful websites." will be the result.
    break;
  default:
    console.log(firstName + ' does something else.'); //When other types of jobs like banker, doctor, engineer and the likes is declared in the variable, the result will be "John does something else." This will be the default because their cases were not defined.
}

/***if (age < 13) {
  console.log(firstName + ' is a boy. '); // If John's age is less than 13, he is a boy.
} else if (age >= 13 && age < 20 ) { // Between 13 and 20 === age >= 13 AND < 20.
  console.log(firstName + ' is a teenager. '); //If John's age is greater than 13 but not less than 20, he is a teenager.
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man. '); // If John's age is greater than 20 but not less than 30, he is a young man.
}else {
  console.log(firstName + ' is a man. '); //If John's age is above 30, he is a man.
}*/

//Using switch statement in place of boolean logic
age = 26;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy. ');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager. ');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man. ');
    break;
  default:
    console.log(firstName + ' is a man. ');
}

















