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

const pi=3.14;
// pi=10;
console.log(pi); //3.14 come but due to pi=10 it will error thrown,  it fixed not changed 

//Order of Operations (often remembered by acronyms like PEMDAS or BODMAS
console.log((3 + 2) - 76 * (1 + 1)) ;

console.log(23 + 97)

console.log(23 + 97+2+4+3+11)
console.log((4 + 6 + 9) / 77)

let a=10;
console.log(a);
a=15;
console.log(a);

let b = 7 * a
console.log(b)

const MAX=57;
const actual=MAX-13;
const percentage= actual/MAX;
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