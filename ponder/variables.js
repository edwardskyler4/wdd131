'use strict';

const one = 1;
// Changed 'two' to a var to make it mutable
var two = "2";
const three = "e";
// Changed result to a var to make it mutable
var result = one + two;
console.log(result); // outcome: 12 (both are turned to stings)
output("ln7", result);
// I'm going to replace every future instance of `output` with console.log for the sake of replicating this in a normal JS environment.

result = one + parseInt(two);
output("ln10", result);
console.log(result); // outcome: 3

// I expected this to work the same way multiplying strings does in python, but I'm still learning that JavaScript has weak typing. Also, I guess that in the case of multiplication, both variables get changed to int's.
result = one * two;
output("ln16", result);
console.log(result); // outcome: 2 

// This one makes sense. Trying to multiply a number by something that's not a number returns Not a Number (NaN). I guess JS doesn't do string multiplicaiton. At least not like this.
result = one * three;
output("ln21", result);
console.log(result); // output: NaN

// Changed from 'too' to 'two'.
two = 4;

result = one + two;
output("ln27", result);
console.log(result); // prev output: 12 because 'two' was misselled in line 21
// current output: 5


const myArray = [1,2,3,5];
myArray.push(4);

console.log(myArray);

myArray.pop();
myArray.pop();
myArray.push(4);
myArray.push(5);

console.log(myArray);

function output(line, content) {
    const outputElement = document.querySelector(".output");
    outputElement.innerHTML += `<p>${line} : ${content}</p>`;
}

