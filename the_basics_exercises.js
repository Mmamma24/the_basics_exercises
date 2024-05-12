// Concatenate two or more strings, one with your first name and
//  one with your last, to create a string with your full name as its value. 
// For example, if your name is John Doe, 
// think about how you can put 'John' and 'Doe' together to get 'John Doe'.

let firstName = "Chidimma";
let lastName =  "Uloma";
let fullName = firstName + " " + lastName
console.log (fullName)


// Identify the data type for each of the following values:
// 'true'
// false
// 1.5
// 2
// undefined
// { foo: 'bar' }

let a = 'true'
let b = false
let c = 1.5
let d = 2
let e = undefined
let f ={ foo: 'bar'}
console.log (typeof(a))
console.log (typeof(b))
console.log (typeof(c))
console.log (typeof(d))
console.log (typeof(e))
console.log (typeof(f))

// Explain why this code logs '510' instead of 15.
// console.log('5' + 10);
let firstNumber = '5';
let secondNumber = 10;
let sum = firstNumber + secondNumber
console.log (sum)
console.log (typeof(firstNumber))
console.log (typeof (secondNumber))

// The reason why it is concatenated instead of adding is because '5' 
// is a string while 10 is a Number. once '' is added to a Number, it becomes a sting.
//  hence string and numbers concatenates instead of adding up
// Refactor the code from the previous
// exercise to use explicit coercion, so it logs 15 instead
let first = 5;
let second = 10;
let total = first + second;
console.log (total);

// Use the template literal syntax along with the expression Number('5') + 10 
// to log the following sentence to the console:
// The value of 5 + 10 is 15.
console.log (Number('5') + 10);

// Will an error occur if you try to access an array element with
//  an index that is greater than or equal to the length of the array? For example:
// let foo = ['a', 'b', 'c'];
// console.log(foo.length);  // => 3
// console.log(foo[3]);      // will this result in an error?

let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[0]);
console.log(foo[1]);
console.log(foo[5]);

// Create an array named names that contains a list of pet names. For instance:
// Name
// asta
// butterscotch
// pudding
// neptune
let name = ['asta', 'butterscotch', 'pudding', 'neptune']
console.log(names.indexOf('asta'))

// Create an object named pets that contains a list of pet names and the type of animal. For instance:
// Name
// Animal
// asta
//          dog
// butterscotch
//          cat
// pudding
//         cat
// neptune
//         fish
// darwin
//        lizard

let pet = {
    asta : "dog",
    cat : ["butterscotch", "pudding"],
    fish : "neptune",
    lizard : "darwin"

}
console.log(typeof("asta"))

// 10.	What value does the following expression evaluate to?
// 'foo' === 'Foo'
let to = 'foo';
let be = 'Foo'
console.log(to===be);
// this is false because tripple equal sign strictly assigns data types

// What value does the following expression evaluate to?
// parseInt('3.1415')
let mami = ('3.1415');
let phy = mami;
console.log(parseInt(phy));
// the result is 3 becuse parseInt recognizes the number before the decimal.

// What value does the following expression evaluate to?
// '12' < '9'
let him = '12';
let her = '9';
console.log ('12'<'9');
// the answer is true. given that both are strings, it does not recognize the < sign





