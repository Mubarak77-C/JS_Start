console.log("hello world");
document.write('sectioinss'); //deprecated and outdated method in web development.

//instead above use this to print in web page
// document.body.innerText='section javaScript';
// this will eliminate all html css js only this will print on page

// age in console
let age = 18;
if (age >= 18) {
    console.log(`${age} +  : you are elgigibel`);
    // JavaScript template literals require backticks ( ` ) and the syntax ${variableName} to properly inject variable values into a string.
} else {
    console.log("not elgible");
}

const pi = 3.14;
// pi=10;
console.log(pi); //3.14 come but due to pi=10 it will error thrown,  it fixed not changed 

//Order of Operations (often remembered by acronyms like PEMDAS or BODMAS
console.log((3 + 2) - 76 * (1 + 1));

console.log(23 + 97)

console.log(23 + 97 + 2 + 4 + 3 + 11)
console.log((4 + 6 + 9) / 77)

let a = 10;
console.log(a);
a = 15;
console.log(a);

let b = 7 * a
console.log(b)

const MAX = 57;
const actual = MAX - 13;
const percentage = actual / MAX;
console.log(percentage)

let first_name = "john";
let last_name = "joe";
console.log(first_name + last_name);
console.log(`${first_name} ${last_name}`);

let combined = `${first_name} ${last_name}`
//  document.getElementsByClassName("content").textContent=combined; 
// above not work
// Correct way to target by class
document.querySelector(".content").textContent = combined; //this will overlap all .content class div p h1 overwite and print this john joe;

document.getElementById("output").textContent = combined;

// taking input button with click open promt
function updateName() {
    let name = prompt("Enter your Name");
    button.textContent = `Plssayer 1: ${name}`;
}



const button = document.querySelector("button");
button.addEventListener("click", updateName);

// let confuse 
// let number=2;
// let number=5;  
//here two let with same and value assigned it provide redeclaration error

let number = 2;
number = 5;  //update let variable 
console.log(number);

// data type only valid changes 
let data = 15;
data = "Information";
console.log(data); //valid from int to string or etc  Information print

// alert(1/0); //infinity
// alert(Infinity); //infinity
// alert( "not a number" / 2 ); 
// NaN, such division is erroneous
//whatever NAN is there always output NAN will be there

// string

let str = "hello";
let str2 = 'single quoted';
let str3 = `can embed another ${str2}`; //backstick

console.log(str);
console.log(str2);
console.log(str3);

//mean if we use "" double quoted it will text take while `` backstickc with input data ` backstick msg , ${name}` name will be print as store


// boolean 
let ischecked = true;
let notchecked = false;
console.log(ischecked)   //true   this is just printing value nothing else
console.log(notchecked) //false

//example 
let isLoggedIn = true;
let hasAdminAccess = false;

if (isLoggedIn) {
    console.log(`User is logged in name ${first_name} ${last_name}`)
}
else {
    console.log('Not loggedIn')
}

// logical operator  && || ! and or not
let hadId = true;
let isAdult = true;
let canEnterClub = hadId && isAdult;
console.log(canEnterClub);  //true&&true= true


//Null undefined 
let currentUser = null; // We know a user variable exists, but right now nobody is logged in
console.log(currentUser);      //null


let no;  //undefined - defined var with no value
console.log(no);

// console.log(mad); // Output: ReferenceError: mad is not defined
//this throw error and it not move ahead down it will stope here so i make commit

console.log(5 == "5"); // Output: true (the string "5" is converted to the number 5)
console.log(0 == false); // Output: true (false is converted to 0)

console.log(5 === "5"); // Output: false (number vs string - types do not match)
console.log(0 === false); // Output: false (number vs boolean - types do not match)

//typeof undefined // "undefined" to check which data type are 
console.log(typeof undefined) // "undefined"
console.log(typeof 12) //number
console.log(typeof "ABc name") //string
console.log(typeof true) //boolean
console.log(typeof 12.33) //number
let score;
console.log(typeof score); //undefined

console.log(typeof [1, 2, 3]);  // Output: "object" (Arrays are a type of object in JS)
console.log(typeof {name: "John"}); // Output: "object"
console.log(typeof function(){}); // Output: "function"

//  INTERVIEW MAIN FOCUS
//typeof null returns "object": This is a legacy bug from the very first version of JavaScript that cannot be fixed because it would break existing websites.
//typeof NaN returns "number": Even though NaN stands for "Not-a-Number", JavaScript classifies it numerically.
console.log(null) //object
console.log(typeof NaN); // Output: "number"
console.log(typeof alert)  //function

//string quotes 
let name = "Ilya";

console.log( `hello ${1}` ); // ?  o/p hello 1

console.log( `hello ${"name"}` ); // ?  hello name   due to string "" text convert 

console.log( `hello ${name}` ); // ? hello Ilya

// const badString = string;
// console.log(badString);  //string not defined error
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

//from w3school

let header="Template Strings";
let tag=["Template string","JavaScript","es6"];
let html =`<h2>${header}</h2><ul>`;
for(const x of tag){
html +=`<li>${x}</li>`;
}
html+=`</ul>`;
document.getElementById("demo").innerHTML=html;

//concatenation method
let con1="Hello";
let con2="World!";
let con3;
con3=con1.concat(" ",con2);

document.getElementById("con").innerHTML=con3;