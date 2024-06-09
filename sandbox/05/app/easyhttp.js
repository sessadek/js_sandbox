function easyHTTP () {
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
    var xhr = this.http;
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback('error : ' + xhr.status);
        }
    }
    xhr.send();
}


easyHTTP.prototype.post = function(url, data, callback) {
    var xhr = this.http;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        callback(null, xhr.responseText);
    }
    xhr.send(JSON.stringify(data));
}

easyHTTP.prototype.put = function(url, data, callback) {
    var xhr = this.http;
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        callback(null, xhr.responseText);
    }
    xhr.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function(url, callback) {
    var xhr = this.http;
    xhr.open('DELETE', url, true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            callback(null, 'Post Deleted');
        } else {
            callback('error : ' + xhr.status);
        }
    }
    xhr.send();
}