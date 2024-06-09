// let val = Math.floor(Math.random() * 1000 + 1);
// console.log(val);

// Concatenationon

// const firstName = 'ESSADEK';
// const lastName = 'Salim';
// let html;
// const greeting = 'Hello my name is Salim';

// let val;

// val = firstName.concat(' ', lastName);
// val = firstName.toLowerCase();
// val = lastName.toUpperCase();
// val = firstName.lastIndexOf('S')
// val = firstName.charAt(firstName.length - 1);
// val = firstName.substring(1, 5);
// val = firstName.slice(1, 5);
// val = firstName.slice(-2);
// val = greeting.split(' ');
// val = greeting.replace('Salim', 'Jack');
// val = greeting.includes('Salim');
// console.log(val);

// html = '<ul>';
// html+='<li>firstName : ' + firstName + '</li>';
// html+='<li>lastName : ' + lastName + '</li>';
// html+='</ul>';
// // ES6
// const age = 31;
// function hello() {
//     return 'Hello';
// }
// html = `<ul>
// <li>fistName: ${firstName}</li>
// <li>lastName: ${lastName}</li>
// <li>${2+6}</li>
// <li>${hello()}</li>
// <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>`;

// document.body.innerHTML = html;

// const numbers = [67,54,0,100,23,90,34];
// const numbers2 = new Array(23,34,65,78,98,45);
// const fruits = ['Pear', 'Apple', 'Banana', 'watermelon', 'Peach'];
// let val;
// val = Array.isArray(numbers);

// numbers.push(100);
// numbers.unshift(200);
// numbers.pop();
// numbers.shift();
// numbers.splice(1,3);
// numbers.reverse();
// val = numbers.indexOf(90);
// val = numbers.concat(numbers2);
// val = fruits.sort();
// val = numbers.sort();
// console.log(numbers);
// val = numbers.sort(function(x, y) {
//     return y - x;
// });

// function over50(number) {
//     return number < 50;
// }
// val = numbers.find(over50);
// console.log(numbers);
// console.log(val);

// const color = 'yellow';

// switch(color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }


// let day;

// switch(new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuseday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);


// function greet(firstName = 'John', lastName = 'Doe') {
//     console.log('Hello ' + firstName + ' ' + lastName);
// }

// greet('Steve', 'Smith');

// const square = function(x = 3) {
//     return x*x;
// }

// console.log(square());


// (function(){
//     console.log('IIFE is ran');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Brad');

// const todo = {
//     add: function() {
//         console.log('add todo ...');
//     },
//     edit: function(id) {
//         console.log(`edit todo ${id}`);
//     }
// }

// todo.delete = function() {
//     console.log('Delete todo');
// }
// todo.add();
// todo.edit(5);
// todo.delete();


// for(i=0; i<10;i++) {
//     if(i===2) {
//         console.log("2 is my favorite number");
//         continue;
//     }

//     if(i===5) {
//         console.log("Stop the loop");
//         break;
//     }
//     console.log(i);
// }


// let i = 100;

// while(i < 10) {
//     console.log(i);
//     i++;
// }


// let i = 100;

// do {
//     console.log(i);
//     i++;
// }while(i < 10);



// const cars = ['honda', 'mercedes', 'peugeot'];
// let carsLength = cars.length;
// for(i = 0; i < carsLength; i++) {
//     console.log(cars[i]);
// }

// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });


// const newArray = ([1,2,3]).map(function(number) {
//     return number * 2;
// });

// console.log(newArray);


// const user = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age: 18
// };

// for(let key in user) {
//     console.log(`${key} : ${user[key]}`);
// }

// let input = prompt('eeeeee');
// console.log(input);

// if(confirm('Are you Ok ?')) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }


// let val;

// val = window.outerWidth;
// val = window.outerHeight;

// val = window.innerWidth;
// val = window.innerHeight;

// val = window.scrollY;
// val = window.scrollX;

// val = window.location;

// val = window.location.href;

// window.history.go();

// val = window.history.length;

// val = window.navigator;

// window.location.reload();
// window.location.href = 'https://www.google.com/';
// console.log(val);


// var a=1;
// let b=2;
// const c=3;
// for (let b = 0; b < 10; b++) {
//     console.log(b);
// }

// console.log('Global scope : ', a, b, c);

// function test() {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log('Function scope : ', a, b, c);
// }


// test();

// if(true) {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log('If scope : ', a, b, c);
// }
