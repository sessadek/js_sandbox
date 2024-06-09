class EasyHTTP {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
        
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'POST',
                headers : {
                    'Content-type': 'application/json'
                },
                body : JSON.stringify(data)

            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'PUT',
                headers : {
                    'Content-type': 'application/json'
                },
                body : JSON.stringify(data)

            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'DELETE',
                headers : {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(() => resolve('resource Deleted'))
            .catch(err => reject(err));
        });
    }
}



const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// http.post('https://jsonplaceholder.typicode.com/users', {
//     name: 'John Doe',
//     user: 'johndoe',
//     email: 'johndoe@gmail.com'
// })
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', {
//     name: 'John Doe',
//     user: 'johndoe',
//     email: 'johndoe@gmail.com'
// })
// .then(data => console.log(data))
// .catch(err => console.log(err));


// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    });

    const error = false;
    if(!error) {
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong ...'));
    }

    

}

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const data = await response.json();

    return data;

}

getUsers().then(users => console.log(users));