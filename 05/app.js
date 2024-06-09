// function Person(name, birthday) {
//     this.name = name;
//     this.birthday = new Date(birthday);
//     this.getAge = function() {
//         return Math.abs((new Date(Date.now() - this.birthday.getTime())).getUTCFullYear() - 1970);
//     }
    
// }

// const brad = new Person('Brad', '07-21-1981');

// console.log(brad.getAge());

// const getSum = new Function('x', 'y', 'return 2+1');

// console.log(getSum());


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;  
// }

// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName}  ${this.lastName}`;
// }


// const person1 = new Person('john', 'Doe');

// console.log(person1);
// console.log(person1.greeting());

// function Customer(firstName, lastName, phone) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
// }


// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName}  ${this.lastName} welcome to our Company`;
// }

// const customer1 = new Customer('Ayoub', 'ElMansouri', '00000000000');

// console.log(customer1);
// console.log(customer1.greeting());


// const personPrototypes = {
//     greeting: function() {
//         return `Hello ${this.firstName} ${this.lastName}`
//     },
//     newName: function(newName) {
//         this.lastName = newName;
//     }
// };


// const salim = Object.create(personPrototypes);
// salim.firstName = 'ESSADEK';
// salim.lastName = 'Salim';
// salim.age = 28;

// salim.newName('Ali');
// console.log(salim);
// console.log(salim.greeting());


// const said = Object.create(personPrototypes, {
//     firstName: {value: 'ESSADEK'},
//     lastName: {value: 'Said'},
//     age: {value: 36}
// });

// console.log(said);

// console.log(said.greeting());


// class Person {
//     constructor(firstName, lastName, birthday) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(birthday);
//     }

//     greeting() {
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     calculateAge() {
//         return Math.abs((new Date(new Date() - this.birthday.getTime())).getUTCFullYear() - 1970);
//     }

//     static addNumbers(x,y) {
//         return x+y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '07-21-92');

// mary.getsMarried('Thompson');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());

// console.log(Person.addNumbers(1,2));


// class Customer extends Person {
//     constructor(firstName, lastName, birthday, phone) {
//         super(firstName, lastName, birthday);
//         this.phone = phone;
//     }
//     static getMemberShipCost() {
//         return 500;
//     }
    
// }

// const brad = new Customer('Brad', 'Mellon', '07-21-92', '555-555-555');

// console.log(brad);
// console.log(brad.greeting());
// console.log(Customer.getMemberShipCost());