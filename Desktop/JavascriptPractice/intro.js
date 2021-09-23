//Data Types

/*1. Primitive

    a. Number
    b. String
    c. Boolean
    d. Undefined
    e. Null

*/

/*2. Reference Types

    a. Object
    b. Array
    c. Function

*/


// Array  ---> "Ordered" "Collection of Values"
let a;
let newArray = [];
console.log(typeof newArray);
console.log(Array.isArray(newArray));
console.log(Array.isArray(a));

newArray = [1, 2 ,3, true, "hello"];
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);
console.log(newArray[4]);


/***
 * How to Change/Modify an Array?
    * Adding new values (or)
    * Removing existing values (or)
    * Combination of both (or)
    * Changing order of values
***/

/** 
 * Adding new values
    * Push Method ------------- Syntax: arr.push("Some Value")
        * Can add single (or) multiple values at once   
    * Unshift Method
        * Can add single (or) multiple values at once    
    * Splice
        * Can add single (or) multiple values at once
    * Concat Method 
 **/

// 1. Push Method

newArray.push(5);
console.log(newArray);

// 2. Unshift

newArray.unshift("naveen");
console.log(newArray);

// 3. Splice

newArray.splice(3,0,"world");
console.log(newArray);

newArray.splice(6,0,"true");
console.log(newArray);

newArray.unshift("anil");
console.log(newArray);
newArray.splice(0,0,"HARISH");
console.log(newArray);
newArray.splice(11,0,"sravan");
console.log(newArray);

/* Adding Multiple Values at once using Splice */

newArray.splice(newArray.length,0,4,5,6,7,8,9);
console.log(newArray);

newArray.splice(newArray.length, 0, [10, 11, 12], "test");
console.log(newArray);

// 4. CONCAT

let newArray2 = [10, 11, 12];
let newArray3 = newArray.concat(newArray2);
console.log(newArray3);
console.log(newArray);
console.log(newArray2);



// Removing Values

// 1. POP

newArray.pop();
console.log(newArray);

newArray.pop();
console.log(newArray);

// 2. SHIFT

newArray.shift();
console.log(newArray);

// 3. SPLICE

newArray.splice(1,1)
console.log(newArray);

newArray.splice(5,2)
console.log(newArray)

newArray.splice(3,3);
console.log(newArray);

newArray.splice(2,1,3)
console.log(newArray)


////////////////////////////////////////////////////////////////////////////////

let numbers = [10, 5, 12, 3, 0, -1, 6];

numbers.sort(function (value1, value2) {
    return value1 - value2;
});

numbers.sort(function (value1, value2) {
    return value2-value1;
})
numbers.reverse();
numbers.reverse();

console.log(numbers.slice(0,-2));
console.log(numbers)



let alphabets = ["aA", "ab", "a", "aaa" ];

alphabets.sort();


console.log(alphabets);


///////////////////////////
/// Converting String to Array ///

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit Totam officia itaque cupiditate odio autem quidem perferendis saepe fugit fuga laborum";

/// Solution 1

console.log();

/// Converting Array to String ///

// JOIN Method (Array Method) --> String

console.log(str.split(" ").sort().join("--"));

//// Problem 

let sentence = "hello my name is manoj";

// console.log(sentence.replace("h", "H").replace("m", "M").replace("n", "N").replace("i", "I").replace("m", "M"));

/////// Working Solution 1

 let newarr = sentence.split(" ");

// newarr[0] = newarr[0].replace("h", "H");
// newarr[1] = newarr[1].replace("m", "M");
// newarr[2] = newarr[2].replace("n", "N");
// newarr[3] = newarr[3].replace("i", "I");
// newarr[4] = newarr[4].replace("m", "M");

// console.log(newarr.join(" "));

/////// Working Solution 2

// let newarr = sentence.split(" ");

// newarr[0] = newarr[0].replace(newarr[0][4], newarr[0][4].toUpperCase());
// newarr[1] = newarr[1].replace(newarr[1][1], newarr[1][1].toUpperCase());
// newarr[2] = newarr[2].replace(newarr[2][3], newarr[2][3].toUpperCase());
// newarr[3] = newarr[3].replace(newarr[3][1], newarr[3][1].toUpperCase());
// newarr[4] = newarr[4].replace(newarr[4][4], newarr[4][4].toUpperCase());

// console.log(newarr.join(" "));

//// Capitalise last letter of each word


newarr[0] = newarr[0].replace(newarr[0][newarr[0].length-1], newarr[0][newarr[0].length-1].toUpperCase());
newarr[1] = newarr[1].replace(newarr[1][newarr[1].length-1], newarr[1][newarr[1].length-1].toUpperCase());
newarr[2] = newarr[2].replace(newarr[2][newarr[2].length-1], newarr[2][newarr[2].length-1].toUpperCase());
newarr[3] = newarr[3].replace(newarr[3][newarr[3].length-1], newarr[3][newarr[3].length-1].toUpperCase());
newarr[4] = newarr[4].replace(newarr[4][newarr[4].length-1], newarr[4][newarr[4].length-1].toUpperCase());

console.log(newarr.join(" "));

////


newarr[0] = newarr[0].replace(newarr[0][newarr[0].length-1], newarr[0][newarr[0].length-1].toUpperCase())+0;
newarr[1] = newarr[1].replace(newarr[1][newarr[1].length-1], newarr[1][newarr[1].length-1].toUpperCase())+0;
newarr[2] = newarr[2].replace(newarr[2][newarr[2].length-1], newarr[2][newarr[2].length-1].toUpperCase())+0;
newarr[3] = newarr[3].replace(newarr[3][newarr[3].length-1], newarr[3][newarr[3].length-1].toUpperCase())+0;
newarr[4] = newarr[4].replace(newarr[4][newarr[4].length-1], newarr[4][newarr[4].length-1].toUpperCase())+0;

console.log(newarr.join(" ")); 

//// Loops

// for loop
let i ="vikram";
console.log(i)


for (power=0; power<11; power++) {
    
    // Some Code
    console.log("my name");

}

console.log(i);

// Step 1 -----> let i = 0; a = 1
// step 2 -----> i<3 || 0 < 3 ---> true ||| if second step result is true
// step 3 -----> run code inside block // console.log("hello"); || console.log(a); console.log(1)
// step 4 -----> i++ || i = i+1 || i = 1; a = 2
// step 5 -----> i<3 || 1 < 3 ----> true ||| if second step result is true
// step 6 -----> run code inside block || console.log("hello"); || console.log(a); console.log(2)
// step 7 -----> i++ || i = i+1 || i = 2; a = 3
// step 8 -----> i<3 || 2 < 3 ----> true || if second step result is true
// step 9 -----> run code inside block || console.log("hello"); || console.log(a); console.log(3)
// step 10 ----> i++ || i = i+1 || i = 3; a = 4
// step 11 ----> i < 3 || 3 < 3 -----> false 


for (a=1; a<7; a++) {
    console.log(a);
}

let names = ["manoj", "anil", "tarun"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names.push("Harish");

// Normal For Loop
 for (i=0; i<names.length; i++) {
     console.log(names[i]);

 }

// Reverse For Loop
for(i=names.length; i>0 ; i--) {
   console.log(names[i]);
}

// For Loop Practice Problems

/** 
 * Find the SUM of all values of an array using for loop
 * use array marks = [10, 11, 19, 7, 50, 14]
 * */

let marks = [10, 11, 19, 7, 50, 14];
let total = 0;
for (i=0; i<marks.length; i++) {
    total = total + marks[i];
    /*
           0  +   10
     10       10
           10 +   11
     21       21
           21 +   7
     28       28
           28 +   19
     47       47
           47 +   50
     97       97
           97 +   14
     111      111

    */
}
console.log(total);

// Average
console.log(total/marks.length);

// Find the total of top 3 scoring students

let topThreeMarks = marks.sort(function (value1, value2) {
    return value2 - value1;
}).slice(0,3); // [50, 19, 14]

let topThreeMarksTotal = 0;
for (i=0; i<topThreeMarks.length; i++) {
  topThreeMarksTotal = topThreeMarksTotal + topThreeMarks[i];
}

console.log(topThreeMarksTotal);

// Find the total of least 3 scoring students

marks.sort(function (value1, value2) {
    return value1 - value2;
})

let score = 0;
for (i=0; i<3; i++) {
    score = score + marks[i];
}
console.log(score);

// let sentence = "hello my name is manoj";

let words = sentence.split(" "); // ['hello', 'my', 'name', 'is', 'manoj']
// words[0] ---> 'hello'.split("") ---> ['h, 'H', 'h', 'e', 'l', 'l', 'o'].unshift('h', 'H');
//    //'hello'.replace('h', 'H') ---> Hello
//    // 'my'.replace('m', 'M') --->My
//    // 'name'.replace('n', 'N') --> Name
//    // ....
//    // ....
// }
// console.log(words.join(" "));

let ironRod = words[0].split('').shift().toUpperCase();
words[0].split('').unshift("H");
console.log(words[0])

// for(i=0; i<words.length; i++) {
//     let temp = words[i].split(''); //['h', 'e', 'l', 'l', 'o']
//     let rem = temp.shift().toUpperCase(); // temp ---> ['e', 'l', 'l', 'o'] || rem ---> 'H' 
//     temp.unshift(rem);//temp ---> ['H','e', 'l', 'l', 'o']
//     words[i] = temp.join(""); // "Hello" || 'hello'
// }
// console.log(words.join(" "));
 

// for(i=0; i<words.length; i++) {
//     words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase())
// }
// console.log(words.join(" "))


/**
 * Objects
    * Unordered collection of Name/Key-Value pairs 
 */

let object1 = {
   /* Name/Key : Value */
    myName: "tarun",
    age: 28,
    email: "g.tarunyadav888@gmail.com",
    gender: "Male",
    city: "Anantapur",
    0: "hello"  
}

object1.city = "Bangalore";
console.log(object1.city);

let myArr = ["tarun", 28, "g.tarunyadav888@gmail.com", "Male", "Anantapur"]
console.log(typeof myArr);
/* let myArr = {
    0: "tarun",
    1: "28",
    2: "g.tarunyadav888@gmail.com",
    3: "Male",
    4: "Anantapur"
}
*/
myArr[0]

myArr[0]
console.log(object1['age']);
console.log(object1['myName']);
myArr[0] = 1;
console.log(myArr);
object1['myName'] = 1;
console.log(object1);
console.log(object1.age);
console.log(object1.city);
console.log(object1.email);
console.log(object1.myName);
console.log(object1.gender);
console.log(object1[0]);

let object2 = {
    name: "anil",
    age: 28,
    address: {
        road: 4,
        doorNumber: "2/12",
        floor: 3
    }
}
object2.address.floor = "2nd Floor";
console.log(object2.address.floor);

let myarr2 = [1, "tiger", "tiger", 2, 2, 2, 1, 5, 6, 7, "tiger", "tiger"];

for(i=0; i<myarr2.length; i++) {
    if(i>2) {
        console.log(myarr2[i]);
    }
}

// Calculate which values have duplicates and how many times are they repeated ///////////////////
// use myarr2 as the array for this problem //////////////////////////////////////////////////////

let details = {};
for(i=0; i<myarr2.length; i++) {
    
    if(!details[myarr2[i]]) {
       details[myarr2[i]] = {value: myarr2[i], repetitions: 1, indices: [i]};
    } else {
       details[myarr2[i]].repetitions++;
       details[myarr2[i]].indices.push(i);
    }

}
console.log(details);

//////////////////////////////////////////////////////////////////////////////////////////////////

// Remove Duplicate Elements from the Array //////////

 let newa = [];
 for (i=0; i<myarr2.length; i++) {
     if(!newa.includes(myarr2[i])){
         newa.push(myarr2[i]);
     }
 }
 console.log(newa);
 
/////////////////////////////////////////////////////

console.log(object2.address.road);
console.log(object2.address.doorNumber);




/* Objects */

// 1. Properties ---> variables 
// 2. Methods ----> functions

//Creating New Objects ---> Many Ways


// One Way ----> Object Literal Way
let obj3 = {
    firstName: "anil", // Property
    lastName: "P", //Property
    languagesKnown: ["English", "Hindi", "Telugu"], //Property
    "name": "test",
    fullName: function () {console.log(this.firstName + this.lastName)} //Method
}
// Defining Properties
// Objects in javascript are dynamic  ---> Objects that are created can be changed later

// How to change the structure of an object ---> 1. By Adding new properties/methods (or) 2. Removing existing properties/methods

// Adding new properties/methods to an object
obj3["age"] = 28;
console.log(obj3);
//Removing existing properties/methods
// delete obj3.languagesKnown;
console.log(obj3);

// How to Access Properties 
// 2 Syntaxes ---> . (dot) syntax, [] (array) syntax

//dot syntax
obj3.firstName;
obj3.fullName();
// obj3."name"

//Array syntax ---> String
// obj3[lastName] // Wrong Way
obj3["lastName"] // Right Way

// In some cases using array syntax is mandatory
// If property name is not a valid javascript identifier/name
obj3["name"];

//2.    Assigning Values to properties & changing values of properties

obj3.firstName = "Harish";

// Object Class
// Class ---> Blueprint for making new objects
//            A class name always starts with a Capital letter // Ex: Object
//  1. Properties ----> 2 types: Instance Properties, Static Properties
//  2. Methods -----> 2 types: Instance Methods, Static Methods

// Second Way of Creating Objects ---> using Object class
 let obj4 = new Object ();
 console.log(typeof obj4);

 // Object class methods
 // 1. keys, 2.values 3.entries

 console.log(Object.keys(obj3)); //Output ---> Array of Keys
 console.log(Object.values(obj3));// Output ---> Array of Values
 console.log(Object.entries(obj3)); // Output ---> Array of arrays containing key value pairs

// Properties ---> Variable
//                 Settings: Writable (true/false), Readable(true/false), Enumerable(true/false), Configurable (can delete) (true/false)

console.log(Object.getOwnPropertyDescriptor(obj3, 'firstName'));
Object.defineProperty(obj3, 'firstName', {configurable: false, writable: false});
console.log(Object.getOwnPropertyDescriptor(obj3, 'firstName'));
delete obj3.firstName;
delete obj3['age'];

obj3.firstName = "Manoj";
console.log(Object.getOwnPropertyDescriptor(obj3, 'firstName'));
console.log(obj3);

Object.defineProperties(obj3, {
    'lastName':{
        writable: false,
        configurable: false
    },
    'languagesKnown': {
        writable: false
    }
});

obj3.lastName = "hello";
obj3.languagesKnown = "Malayalam";
console.log(obj3);


//// Functions
// Takes some input, does something with it and gives some output
// Taking input is not mandatory
// Giving output is also not mandatory

// There are 2 ways to define (what will that function do) a function
//  1. Function Declaration
//  2. Function Expression

//Function Declaration


function blackHawk () {}

//How to make a function take some input??

function whiteHawk (greeting) {
    console.log(greeting);
};


// A variable with the function name is created and the value in the block is assigned to it
// A function scope will also be created

function add (num1, num2, num3) {
    // arguments array
    let sum = 0;
    for(i=0; i<arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return 'Lk pass only numbers!!';
        } else {
            sum = sum + arguments[i];
        }
    }
    return sum;// Function ends at this line
}

//How to send input to a function??

whiteHawk("hello good evening!");
let sum = add(1,2,5); //[1,2,5]
console.log(sum);

let result = add(1, 2, 10, 20);//[1,2,10,20]
console.log(result);
// What happens if we send less inputs than what is defined??
// add(1,2);




// What happens if we send more inputs than what is defined??
// add(1,2,3,4,5);

let placeHolder;

let divide = function (a,b) {
    return a/b;
}
/// function divide (a,b) {
//    retunn a/b;
//  }

function multiply (num1, num2, num3) {

    // function doSomething(a) {
    //     return a * num1 * num2;
    // }

    // doSomething(10);

    // return num1+num2;

    placeHolder = function (a) {
        return a * num1 * num2;
    }

    return num1+num2;
}

multiply(1,2);

console.log(placeHolder(10));