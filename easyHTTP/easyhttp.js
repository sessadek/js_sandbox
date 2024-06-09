function easyHTTP() {
    this.http = new XMLHttpRequest();
}


easyHTTP.prototype.get = function(url, callback) {
    let self = this.http;
    self.open('GET', url, true);
    self.onload = function() {
        if(self.status === 200) {
            callback(null, self.responseText);
        } else {
            callback('Error : ' + self.status);
        }
    }
   
    self.send();
}

easyHTTP.prototype.post = function(url, data, callback) {
    let self = this.http;
    self.open('POST', url, true);
    self.setRequestHeader('Content-Type', 'application/json');
    self.onload = function() {
        callback(null, self.responseText);
    }
    self.send(JSON.stringify(data));

}


easyHTTP.prototype.put = function(url, data, callback) {
    let self = this.http;
    self.open('PUT', url, true);
    self.setRequestHeader('Content-Type', 'application/json');
    self.onload = function() {
        callback(null, self.responseText);
    }
    self.send(JSON.stringify(data));

}


easyHTTP.prototype.delete = function(url, callback) {
    let self = this.http;
    self.open('DELETE', url, true);
    self.onload = function() {
        if(self.status === 200) {
            callback(null, 'Post Deleted');
        } else {
            callback('Error : ' + self.status);
        }
    }
   
    self.send();
}


const http = new easyHTTP();



// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });



// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });


// http.post(
//     'https://jsonplaceholder.typicode.com/posts',
//     {
//         "title": "Custom Post",
//         "body": "Custom Post Text Body"
//     },
//     function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// http.put(
//     'https://jsonplaceholder.typicode.com/posts/1',
//     {
//         "title": "Custom Post",
//         "body": "Custom Post Text Body"
//     },
//     function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });


// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });