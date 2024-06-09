class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        return Math.abs(new Date(Date.now() - new Date(this.birthday).getTime()).getUTCFullYear() - 1970);
    }

    setName(newName) {
        this.lastName = newName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, birthday, phone) {
        super(firstName, lastName, birthday);
        this.phone = phone;
    }

    static getCost() {
        return '-50%';
    }
}

const Mary = new Customer('Mary', 'Williams', '07-21-1992', '0600000000');


// console.log( Customer.addNumbers(1,2) );



// document.getElementById('button').addEventListener('click', function() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.icndb.com/jokes/random/4', true);
//     xhr.onload = function() {
//         if(this.status === 200) {
//             const request = JSON.parse(this.responseText);
//             if(request.type === 'success') {
//                 console.log(request);
//             } else {
//                 console.log('failed');
//             }
//         }
//     }
//     xhr.send();
// });

// document.getElementById('button').addEventListener('click', function() {
//     fetch('http://jsonplaceholder.typicode.com/posts').then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data);
//     }).catch(function(err) {
//         console.log(err);
//     })

// });

const sayHello = name => `Hello ${name}`;
console.log(sayHello('salim'));

const posts = [
    {
        title: 'Post One',
        body: 'body post one'
    },
    {
        title: 'Post Two',
        body: 'body post Two'
    }
]

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            const error = true;
            if(error) {
                resolve();
            } else {
                reject('Error: something wrong !!');
            }
        }, 2000);
    });
    
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += '<li>' + post.title + '</li>'
        });
        document.body.innerHTML = output;
    }, 1000); 
}

// createPost({
//     title: 'Post Three',
//     body: 'body post Three'
// }).then(getPosts).catch(function(err) {
//     console.log(err);
// });

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//     return `Hello ${this.firstName} ${this.lastName}`;
// }

// // var salim = new Person('ESSADEK', 'Salim');

// function Customer(firstName, lastName, phone) {
//     Person.call(this, firstName, lastName)
//     this.phone = phone;
// }

// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function() {
//     return `Hello customer ${this.firstName} ${this.lastName}`;
// }
// var customer1 = new Customer('ESSADEK', 'Salim', '0600000000');

// const personPrototypes = {
//     greeting: function() {
//         return `Hello ${this.firstName} ${this.lastName}`;
//     },
    // setName: function(newName) {
    //     this.lastName = newName;
    // }
// }

// const Mary = Object.create(personPrototypes);
// Mary.firstName = 'Mary';
// Mary.lastName = 'Williams';
// Mary.setName('Thompson');
// console.log(Mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: { value: 'Brad' },
//     lastName: { value: 'Traversy' },
//     age: { value: 36 }
// });

// console.log( brad.greeting() );


const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.post('https://jsonplaceholder.typicode.com/users', {
//         email: "salim@gmail.com",
//         username: "salim",
//         name: "ESSADEK Salim"

//     }).then(data => console.log(data))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1', {
//         email: "alo@gmail.com",
//         username: "alo",
//         name: "ESSADEK alo"

//     }).then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// http.post('https://jsonplaceholder.typicode.com/posts', {
//     title: 'Custom Post Title',
//     body: 'Custom Post Body'
// }, function(err, post) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(post);
//     }
// });


// http.put('https://jsonplaceholder.typicode.com/posts/5', {
//     title: 'Custom Post Title',
//     body: 'Custom Post Body'
// }, function(err, post) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(post);
//     }
// });



// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(response);
//     }
// });