// DeSING PATTERN

// Revealing Module Pattern
const UICtrl = (function() {
    let text = 'Hello';

    function changeText() {
        const el = document.querySelector('h1');
        el.textContent = text;
        // console.log(el.textContent);
    }

    return {
        // callChangeText: function(){
        //     changeText();
        // }

        changeText: changeText
    }


})();


UICtrl.changeText();

ItemCtrl = (function() {

    let datas = [];

    function add(item) {
        datas.push(item);
        console.log('Item Added ...');
    }

    // function get(id) {
    //     return datas.find(item => {
    //         return item.id === id;
    //     });
    // }

    function get(id) {
        return datas.find(item => {
            return item.id === id;
        });
    }

    function getAll() {

        return datas.length > 0 ? datas : 'No datas found';
        
    }

    return {
        add: add,
        get: get,
        getAll: getAll
    }

})();

// ItemCtrl.add({id: 1, name: 'john'});
// ItemCtrl.add({id: 2, name: 'Marc'});
// console.log(ItemCtrl.get(1));
// console.log(ItemCtrl.getAll());


// Singleton

const Singleton = (function() {

    let instance;

    function createInstance() {
        
        const instanceObject = new Object({str: 'Singleton Instance'});
        return instanceObject;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }

})();


// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB);


// Factory Pattern


function MemberFactory() {
    this.createMember = function(name, type) {
        let member;
        if(type === 'simple') {
            member = new SimpleMember(name);
        } else if(type === 'standard') {
            member = new StandardMember(name);
        } else if(type === 'super'){
            member = new SuperMember(name);
        }
        member.type = type;
        member.define = function() {
            console.log(`${member.name} (${member.type}) : ${member.cost}`);
        }
        return member;
    }
}

const SimpleMember = function(name) {
    this.name = name;
    this.cost = '5$';
}

const StandardMember = function(name) {
    this.name = name;
    this.cost = '15$';
}

const SuperMember = function(name) {
    this.name = name;
    this.cost = '25$';
}

let members = [];
const factory = new MemberFactory();

const simpleMember = factory.createMember('john Doe', 'simple');
const standrdMember = factory.createMember('jack Doe', 'standard');
const superember = factory.createMember('Jill Doe', 'super');

members.push(simpleMember);
members.push(standrdMember);
members.push(superember);

members.forEach(member => {
    member.define();
});




// Observer Pattern
function EventObserver() {
    this.observers = [];
}


EventObserver.prototype = {
    subscribe: function(fn) {
        if(this.observers.indexOf(fn) === -1) {
            this.observers.push(fn);
            console.log(`You're now subscribed to ${fn.name}`);
        }
    },
    unsubscribe: function(fn) {
        if(this.observers.indexOf(fn) > -1) {
            console.log(`You're now unsubscribed from ${fn.name}`);
        }
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}


const observer = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function() {
    observer.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    observer.unsubscribe(getCurMilliseconds);
});


document.querySelector('.sub-s').addEventListener('click', function() {
    observer.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    observer.unsubscribe(getCurSeconds);
});



document.querySelector('.fire').addEventListener('click', function() {
    observer.fire();
});

const getCurMilliseconds = function() {
    console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds ${new Date().getSeconds()}`);
}