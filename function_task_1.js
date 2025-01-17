/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// function tellFortune (job_title,geographic_location,partners_name,number_of_children){
//   console.log(`you will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} Kids`);
// }
// tellFortune('Software engineer','Jordan','Alice','4');

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// let dog=Number(prompt('What is your dog age ? '));
// function calculateDogAge (dogAge){
//   if(dogAge<=0){
//      console.log('Cant be Negative Value');
//   } else {
//     let ageCalculation = dogAge *7;
//     console.log(`Your doggie is ${ageCalculation } years old in dog years!`);
//   }
// }
// calculateDogAge(dog);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// let userinput = Number(prompt('Enter your age: '));
// let amount = Number(prompt("Enter Your amount"));

// function calculateSupply(userinput,amount){
//   const maxAge =100;
//   console.log(`You will need ${(maxAge-userinput) * (365*amount)} cups of tea to last you untill the ripe old of ${maxAge}  `)
// }
// calculateSupply(userinput,amount);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// let name = prompt("Enter Your Name: ");
// function greet(name){
//   console.log("Hello " + name);
// }
// greet(name); 

/*
5
what is the error:
function double(cat) {
  return 2 * cat;
}

function double() {
  return 2 * 7;
}

function double(x) {
  return 2 * x;
}
*/



/*
6
fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function  double3 (x) {
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// function cube (num){
//   console.log(num ** 3);
// }
// cube(4);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// function multiply(num1,num2){
//   console.log(num1*num2);
// }
// multiply(3,4);
// multiply(5,4);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// function canIGetADrivingLicense(age){
//   if(age>=20){
//     return "yes you can";
//   } else{
//     return `please come back after ${20-age} to get one`;
//   }
// }
// console.log(canIGetADrivingLicense(21));
// console.log(canIGetADrivingLicense(17));
// console.log(canIGetADrivingLicense(20));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// function sameLength (str1,str2){
//   return str1.length===str2.length;
// }
// console.log(sameLength("tree","clue"));
// console.log(sameLength("tree","car"));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// function largerNubmer(number1,number2){
//   if(number1>=number2){
//     return number1;
//   } else{
//     return number2
//   }
// }
// console.log(largerNubmer(5,6));
// console.log(largerNubmer(5,3));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// function smallerNubmer(number1,number2,number3){
//     if(number1<=number2 && number1 <=number3){
//       return number1
//     } else if (number2<=number1 &&  number2<=number3) {
//       return number2
//     } else{
//       return number3
//     }
// }
// console.log(smallerNubmer(8,6,7));
// console.log(smallerNubmer(5,99,34));
// console.log(smallerNubmer(5,3,3));
// console.log(smallerNubmer(5,3,3));
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// function shorterString(str1, str2, str3, str4, str5) {

//   if (str1.length <= str2.length && str1.length <= str3.length && str1.length <= str4.length && str1.length <= str5.length) {
//     return str1;
//   } else if (str2.length <= str1.length && str2.length <= str3.length && str2.length <= str4.length && str2.length <= str5.length) {
//     return str2;
//   } else if (str3.length <= str1.length && str3.length <= str2.length && str3.length <= str4.length && str3.length <= str5.length) {
//     return str3;
//   } else if (str4.length <= str1.length && str4.length <= str2.length && str4.length <= str3.length && str4.length <= str5.length) {
//     return str4;
//   } else {
//     return str5;
//   }
// }
// console.log(shorterString("air", "school", "car", "by", "github"))
// console.log(shorterString("air", "tr", "car", "by", "github"))
// console.log(shorterString("by", "tr", "car", "air", "github"))
// console.log(shorterString("air", "by", "car", "school", "github"))
// console.log(shorterString("air", "tr", "by", "car", "github"))
// console.log(shorterString("air", "tr", "car", "github", "by"))

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
// function longerString(str1, str2, str3, str4) {
//   if (str1.length >= str2.length && str1.length >= str3.length && str1.length >= str4.length) {
//     return str1;
//   } else if (str2.length >= str1.length && str2.length >= str3.length && str2.length >= str4.length) {
//     return str2;
//   } else if (str3.length >= str1.length && str3.length >= str2.length && str3.length >= str4.length) {
//     return str3;
//   } else {
//     return str4;
//   }
// }
// console.log(longerString("air", "school", "car", "github"))
// console.log(longerString("air", "schoo", "car", "github"))
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// function isEven(num) {
//   return num % 2 == 0;
// }

// console.log(isEven(1))
// console.log(isEven(2))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// function isOdd(num) {
//   return num % 2 == 1;
// }

// console.log(isOdd(4))
// console.log(isOdd(5))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// function positive(num) {
//   return Math.abs(num);
// }
// console.log(positive(4))
// console.log(positive(-5))

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// function fullName(fname, lname) {
//   console.log(fname + ' ' + lname);
// }
// fullName("Adam", "McCallen")
// fullName("Alex", "Mercer")

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// function average(num1, num2, num3, num4, num5) {
//   let sum = num1 + num2 + num3 + num4 + num5;
//   let avg = sum / 5;
//   console.log(avg);
// }
// average(1, 2, 3, 4, 5)
// average(5, 7, 9, 3, 5)

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// function randomNumber(){
//   console.log(Math.random());
// }
// randomNumber()
// randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// function randomBetweenNumbers(min, max) {
//   return Math.random() * (max - min ) + min;
// }
// console.log(randomBetweenNumbers(1, 8));
// console.log(randomBetweenNumbers(3, 100));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// function scoreInUniversity(x2) {
//   switch (true) {
//     case x2 >= 95 && x2 <= 100  : return ("youre grade is: A") ;
//     case x2 >= 85 && x2 <= 94 :
//        return("youre grade is: A") ; 
//     case x2 >= 70 && x2 <= 84 :
//        return("youre grade is: C"); 
//     case x2 >= 50 && x2 <= 69 :
//       return("youre grade is: D") ;
//     case x2 >= 0  && x2 <= 49 :
//        return("youre grade is: F" );

//   }
// }
// console.log(scoreInUniversity(96));
// console.log(scoreInUniversity(3));
// console.log(scoreInUniversity(71));


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let countNum = 0;
function counter() {
  return countNum += 1;
}
console.log(counter());
console.log(counter());
console.log(counter());

countNum = 0;

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter() {
  countNum = 0;
}
console.log(counter())
console.log(counter())
console.log(counter())
resetCounter()
console.log(counter())
console.log(counter())
resetCounter()
console.log(counter())