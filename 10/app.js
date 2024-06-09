// function nameIterator(names) {
//     let index = 0;
//     return {
//         next: function() {
//             return index < names.length ?
//             { value: names[index++], done: false} : 
//             { done: true};
            
//         }
//     }
// }




// const namesArr = ['Jack', 'Jill', 'John'];

// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());


// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const names = sayNames();

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());



// function* createIds() {
//     let i = 0;
//     while(true) {
//        yield i++; 
//     }
// }

// genIds = createIds();

// console.log(genIds.next().value);
// console.log(genIds.next().value);
// console.log(genIds.next().value);
// console.log(genIds.next().value);

// const sym1 = Symbol();
// const sym2 = Symbol("foo");

// console.log(typeof sym1);
// console.log(typeof sym2);


// console.log(Symbol("123") === Symbol("123"));
// console.log(`Hello ${sym1.toString()}`);

// const myObj = {};
// myObj[sym1] = 'prop1';
// myObj[sym2] = 'prop2';
// myObj.key3 = 'prop3';
// myObj.key4 = 'prop4';

// // console.log(myObj[sym1]);
// // console.log(myObj[sym2]);


// for(let i in myObj) {
//     console.log(`${i} : ${myObj[i]}`);
// }
// console.log(JSON.stringify(myObj));



// let a, b;
// [a, b, ...rest] = [1, 2, 3, 4, 5];

// ({a,b, ...rest} = {a:1,b:2, c:3, d:4})

// console.log(a, b, rest);

// getPeople = function() {
//     return ['name1', 'name2', 'name3'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// const person = {
//     name: 'john doe',
//     age: 32,
//     sayHello: function() {
//         return 'hello';
//     }
// }

// // const name = person.name,
// //     age = person.age;
// const {name, age, sayHello} = person;
// console.log(name, age,sayHello());


// MAPS

// const map1 = new Map();

// const key1 = "some string",
//     key2 = {},
//     key3 = function(){};

// map1.set(key1, 'value of key1');
// map1.set(key2, 'value of key2');
// map1.set(key3, 'value of key3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// console.log(map1.size);

// for(let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// for(let key of map1.keys()) {
//     console.log(key);
// }

// for(let value of map1.values()) {
//     console.log(value);
// }

// map1.forEach(function(value, key) {
//     console.log(`${key} => ${key} `);
// });


// const keyValArr = Array.from(map1);

// const keyArr = Array.from(map1.keys());
// const valueArr = Array.from(map1.values());

// console.log(keyValArr);
// console.log(keyArr);
// console.log(valueArr);


// SETS



const set1 = new Set();

set1.add(100);
set1.add('string');
set1.add(true);
set1.add({name: 'name'});



// console.log(set1.size);
// console.log(set1.has({name: 'name'}));

set1.delete(100);

// console.log(set1);

// for(let item of set1.entries()) {
//     console.log(item);
// }

// set1.forEach(value => {
//     console.log(value);
// });


const setArr = Array.from(set1);

console.log(setArr);