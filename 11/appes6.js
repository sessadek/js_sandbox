// Observer Pattern

// class EventObserver {
//     constructor() {
//         this.observers = [];
//     }


//     subscribe(fn) {
//         if(this.observers.indexOf(fn) === -1) {
//             this.observers.push(fn);
//             console.log(`You're now subscribed to ${fn.name}`);
//         }
//     }
//     unsubscribe(fn) {
//         if(this.observers.indexOf(fn) > -1) {
//             console.log(`You're now unsubscribed from ${fn.name}`);
//         }
//         this.observers = this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
        
//     }
//     fire() {
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }
    
// }


// EventObserver.prototype = {
//     subscribe: function(fn) {
//         if(this.observers.indexOf(fn) === -1) {
//             this.observers.push(fn);
//             console.log(`You're now subscribed to ${fn.name}`);
//         }
//     },
//     unsubscribe: function(fn) {
//         if(this.observers.indexOf(fn) > -1) {
//             console.log(`You're now unsubscribed from ${fn.name}`);
//         }
//         this.observers = this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
        
//     },
//     fire: function() {
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }
// }


// const observer = new EventObserver();

// document.querySelector('.sub-ms').addEventListener('click', function() {
//     observer.subscribe(getCurMilliseconds);
// });

// document.querySelector('.unsub-ms').addEventListener('click', function() {
//     observer.unsubscribe(getCurMilliseconds);
// });


// document.querySelector('.sub-s').addEventListener('click', function() {
//     observer.subscribe(getCurSeconds);
// });

// document.querySelector('.unsub-s').addEventListener('click', function() {
//     observer.unsubscribe(getCurSeconds);
// });



// document.querySelector('.fire').addEventListener('click', function() {
//     observer.fire();
// });

// const getCurMilliseconds = function() {
//     console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = function() {
//     console.log(`Current Seconds ${new Date().getSeconds()}`);
// }



// Mediator Pattern


function User(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

function Chatroom() {
    let users = [];
    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                to.receive(message, from);
            } else {
                for(user in users) {
                    if(users[user] !== from) {
                        users[user].receive(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello brad', brad);
brad.send('Hello All !!!');
