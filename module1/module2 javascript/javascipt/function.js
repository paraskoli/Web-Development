// function sayHello()
// {
//     console.log("hello from function");

// }
// sayHello();
// sayHello();

// function with parameter

// function sum(num1,num2)
// {
//     let addition =num1+num2;
//     console.log("addition of given number :"+ addition);
// }
// sum(3,5);

// function multiply(num1,num2)
// {
//     return num1+num2;
    
// }
// let ans = multiply (3,5);
// console.log(ans);


//function are first class citizen of js
let a=function sub(num1,num2)
{
    return num1-num2;
}
console.log(a(10,5));

/* IIFE -> immediately invoked function expression

(function(){
    console.log("hello from IIFE");
}) () */

/*(function()
{
    console.log("hello world");
}) (); */

( function(num1,num2){
    console.log(num1/num2);
} ) (10,23);



// function with parameter
// function sum(num1,num2)
// {
//     let addition =num1+num2;
//     console.log("Addition of given numbers:"+addition);
// }
// sum(4,5);

// function multiply(num1,num2)
// {
//     let multiplication=num1*num2;
//     console.log("Multiplication of two number is:"+multiplication);

// }
// multiply(5,8);

// let a=function multiply(num1,num2)
// {
//      return num1*num2;
   
// }

// let ans=multiply(5,8);
// console.log(ans);

// console.log(a(8,4));

// // array
// eleArr=[1,2,4,5,"d","hello",4.5];
//1.push
// console.log("Array before push:",eleArr);
// eleArr.push("new item");
// console.log("Array after push:",eleArr);

//2. pop
// console.log("Array befroe pop:",eleArr);
// eleArr.pop("hello");
// console.log("Array after pop:",eleArr);

// //3.shift
// console.log("Array before shift:",eleArr);
// eleArr.shift();
// console.log("Array after shift:",eleArr);

// //unshift
// console.log("Array before unshift:",eleArr);
// eleArr.unshift("paras");
// console.log("array after unshift:",eleArr);

//length

// let len =eleArr.length;
// console.log(len);

 
// String
let str="I am a string";
console.log(str);

// length of String
let len =str.length;
console.log(len);

//sliced method -> extract part of string
let slicedstr=str.slice(0,8);
console.log(slicedstr);

//replace method-> replace a part with given word
let replacedstr =str.replace("am","was");
console.log(replacedstr);

//upper case 
let uppercase=str.toUpperCase();
console.log(uppercase);

//lower case 
let lowercase=str.toLowerCase(); 
console.log(lowercase);

//concate-> add the words
let firstname  = "paras";
let lastname = "koli";
let fullname =firstname.concat(lastname);
console.log(fullname);
//or

// let fullname = firstName + lastName;
// console.log(fullname);

//split-> return arr
let splitted=str.split(" ");
console.log(splitted)