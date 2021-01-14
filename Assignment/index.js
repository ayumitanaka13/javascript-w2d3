/* ===========================================================
/* ===================== Question 1 ==========================
/* ===========================================================
Define a function called "rant" which accepts a 
string argument called "message". The function 
should print out an uppercased version of "message" 3 
times (with 3 separate calls to console.log) 

For example, rant("I hate beets") should print out:
I HATE BEETS
I HATE BEETS
I HATE BEETS
===========================================================*/

const rant = (message) => {
    return message.toUpperCase();
}
console.log(rant('I hate beets'));
console.log(rant('I hate beets'));
console.log(rant('I hate beets'));

/* ===========================================================
/* ===================== Question 2 ==========================
/* ===========================================================
Write a simple function "multiply" which accepts two 
numerical arguments and returns their product 
(multiply them together).  
Make sure to return the value instead of printing it!

multiply(2,3) //6
multiply(9,9) //81
multiply(5,4) //20
=========================================================== */

const multiply = (x, y) => {
    return x * y;
}
console.log(multiply(2,3));
console.log(multiply(9,9));
console.log(multiply(5,4));

/* ===========================================================
/* ===================== Question 3 ==========================
/* ===========================================================
I often struggle to know whether I should wear shorts or pants 
on a given day. (this is a complete lie.  
It's really not that hard to decide.) Please help me decide by 
writing me a function called "isShortsWeather"

-   It should accept a single number argument, which we will 
    call temperature (but you can name it whatever you want, 
    of course). 
-   If "temperature" greater than or equal to 75, return true
-   Otherwise, return false
-   This exercise assumes temperature is in Fahrenheit.  
    I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true
=========================================================== */

const isShortsWeather = (temp) => {
    // boolean
    return temp >= 75;
    
    // if (temp >= 75) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));

/* ===========================================================
/* ===================== Question 4 ==========================
/* ===========================================================
Please write a function called "lastElement" which accepts a 
single array argument.  The function should return the last 
element of the array (without removing the element).  If the 
array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
=========================================================== */

// ternary operator
// (condition) ? true : false
// (isDrunk === 1) ? "Yes" : "No"
// if (isDrunk === 1) ?{ return "Yes" } else { return "No" }

const lastElement = (arr) => {
    return arr.length > 0 ? arr[arr.length-1] : null;

    // const isElement = arr.length > 0;

    // if (isElement) {
    //     return arr[arr.length-1];
    // } else {
    //     return null;
    // }
}
console.log(lastElement([3,5,7]));
console.log(lastElement([1]));
console.log(lastElement([]));

/* ===========================================================
/* ===================== Question 5 ==========================
/* ===========================================================
Define a function called "capitalize" that accepts a string 
argument and returns a new string with the first letter capitalized
(but the rest of the string unchanged).  

capitalize('eggplant') //"Eggplant"
capitalize('pamplemousse') //"Pamplemousse"
capitalize('squid') //"Squid"
=========================================================== */

const capitalize = (str) => {
    // concat can be used not only for array but also string! 
    return str.charAt(0).toUpperCase().concat(str.slice(1));
    // return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));

/* ===========================================================
/* ===================== Question 6 ==========================
/* ===========================================================
Write a function called "sumArray" which accepts a single argument: 
an array of numbers.  It should return the sum of all the numbers 
in the array.

sumArray([1,2,3]) //6
sumArray([2,2,2,2]) //8
sumArray([50,50,2]) //102
=========================================================== */

const sumArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    // return sum;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([2,2,2,2]));
console.log(sumArray([50,50,2]));

/* ===========================================================
/* ===================== Question 7 ==========================
/* ===========================================================
Write a function called "returnDay". this function takes in one 
parameter (a number from 1-7) and returns the day of the week 
(1 is Monday, 2 is Tuesday, etc.)  If the number is less than 
1 or greater than 7, the function should return null. In some 
countries Sunday is treated as the first day of the week, but 
for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object 
with numerical keys.  When the function is called, plug the 
number into the array/object you've created to retrieve the 
corresponding day name and then return that value.

returnDay(1) //"Monday"
returnDay(4) //"Thursday"
returnDay(8) //null
=========================================================== */

const returnDay = (x) => {
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    // ternary operator
    return x > 7 || x < 1 ? null : week[x-1];
    
    // if (x > 7 || x < 1) {
    //     return null;
    // } else {
    //     return week[x-1];
    // }
}
console.log(returnDay(0));
console.log(returnDay(1));
console.log(returnDay(4));
console.log(returnDay(8));

/* ===========================================================
/* ===================== Question 8 ==========================
/* ===========================================================
In some dice games like Craps, a roll of two 1's is called 
"Snake Eyes". It's generally not a good roll. Please write a 
function called "isSnakeEyes", which accepts two numbers as inputs, 
representing two dice.  If the two numbers are both 1's, 
please print "Snake Eyes!" otherwise print "Not Snake Eyes!" 

isSnakeEyes(1,5); //Not Snake Eyes!
isSnakeEyes(6,3); //Not Snake Eyes!
isSnakeEyes(1,1); //Snake Eyes!
=========================================================== */

const isSnakeEyes = (x, y) => {
        
    // ternary operator
    return x === 1 && y === 1 ? "Snake Eyes!" : "Not Snake Eyes!";

    // if (x === 1 && y === 1) {
    //     return "Snake Eyes!";
    // } else {
    //     return "Not Snake Eyes!";
    // }
}
console.log(isSnakeEyes(1,5));
console.log(isSnakeEyes(6,3));
console.log(isSnakeEyes(1,1));
console.log(isSnakeEyes(1,2));

/* ===========================================================
/* ===================== Question 9 ==========================
/* ===========================================================
You know how old your dog is in human years, but what about dog 
years? Calculate it!

Write a function named "calculateDogAge" that:
-   Takes 1 argument: your puppy's age.
-   Calculates your dog's age based on the conversion rate of 
    1 human year to 7 dog years.
-   Outputs the result to the screen like so: "Your doggie is 
    NN years old in dog years!"

calculateDogAge(1); //Your doggie is 7 years old in dog years!
calculateDogAge(0.5); //Your doggie is 3.5 years old in dog years!
calculateDogAge(12); //Your doggie is 84 years old in dog years!
=========================================================== */

const calculateDogAge = (x) => {
    let age = x * 7;

    return `Your doggie is ${age} years old in dog years!`;
}
console.log(calculateDogAge(1));
console.log(calculateDogAge(0.5));
console.log(calculateDogAge(12));

/* ===========================================================
/* ===================== Question 10 =========================
/* ===========================================================
A pangram is a sentence or expression that uses all the letters 
of the alphabet. The best known pangram in English is "The quick 
brown fox jumps over the lazy dog," 
Write a function name "isPangram" that determins if a sentence 
is a pangram. It should return a boolean value.

isPangram('abcdefghijklmnopqrstuvwxyz'); //true
isPangram('the quick brown fox jumps over the lazy dog') //true
isPangram('five boxing wizards jump quickly at it'); //false
=========================================================== */

const isPangram = (str) => {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    str = str.toLowerCase();
    // return alphabet.every((letter) => str.includes(letter));

    // Hash Map
    return [ ...new Set(str.toLowerCase().match(/[a-z]/g))].length === 26;

    // const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // let newStr = str.replace(/\s+/g, "");

    // for (let i = 0; i < alphabet.length; i++) {
    //     if (newStr.indexOf(alphabet[i]) === -1) {
    //         return false;
    //     }
    // }
    // return true;
}
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));
console.log(isPangram('the quick brown fox jumps over the lazy dog'));
console.log(isPangram('five boxing wizards jump quickly at it'));

/* ===========================================================
/* ===================== Question 11 =========================
/* ===========================================================
Write a function "evens" that accepts an array as an argument, 
and returns an array consisting of all of the *even* numbers 
in that array.

// evens([1, 2, 3, 4, 5, 6, 7, 8]);
=========================================================== */

const evens = (arr) => {
    return arr.filter((e) => e % 2 === 0);

    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         newArr.push(arr[i]);
    //     }
    // }
    // return newArr;
}
console.log(evens([1, 2, 3, 4, 5, 6, 7, 8]));

/* ===========================================================
/* ===================== Question 12 =========================
/* ===========================================================
Write a function "max" that accepts an array of numbers and 
returns the *largest* number in the array.

max([1, 5, 10, 15]); //15
max([99, 0, -1, 45]); //99
=========================================================== */

const max = (arr) => {
    // let newArr = arr.sort((a, b) => a - b);
    // return newArr[newArr.length-1];

    return Math.max(...arr);
}
console.log(max([1, 5, 10, 15]));
console.log(max([99, 0, -1, 45]));