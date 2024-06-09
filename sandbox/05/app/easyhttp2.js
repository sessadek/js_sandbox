class easyHTTP {
    async get (url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post (url, data) {
        const response = await fetch(url, {
            method: 'POST', // or 'POST'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    async put (url, data) {
        const response = await fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    async delete (url) {
        const response = await fetch(url, {
            method: 'DELETE', // or 'DELETE'
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await 'Deleted...';
    }
}