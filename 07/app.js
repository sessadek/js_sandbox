// document.getElementById('button').addEventListener('click', function() {
//   const xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'data.txt', true);
// 	xhr.onprogress = function() {
// 		console.log('rd', xhr.readyState);
// 	}
//   xhr.onload = function() {
// 		if(this.status === 200) {
// 			document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
// 		}
// 	}

// 	xhr.onerror = function() {
// 		console('request error');
// 	}
// 	// xhr.onreadystatechange = function() {
// 	// 	if(this.status === 200 && this.readyState === 4) {
// 	// 		console.log(this.responseText);
// 	// 	}
// 	// }


// 	xhr.send();
// });



// document.getElementById('button1').addEventListener('click', loadCustomer);

// function loadCustomer() {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'customer.json', true);
// 	xhr.onload = function() {
// 		if(this.status === 200) {
// 			const customer = JSON.parse(this.responseText);
// 			const output = `
// 				<ul>
// 					<li>ID : ${customer.id}</li>
// 					<li>ID : ${customer.name}</li>
// 					<li>ID : ${customer.company}</li>
// 					<li>ID : ${customer.phone}</li>
// 				</ul>`;
// 			document.getElementById('customer').innerHTML = output;
// 		}
// 	}
// 	xhr.send();
// }


// document.getElementById('button2').addEventListener('click', loadCustomers);

// function loadCustomers() {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'customers.json', true);
// 	xhr.onload = function() {
// 		if(this.status === 200) {
// 			const customers = JSON.parse(this.responseText);
// 			let output = '';
// 			customers.forEach(function(customer) {
// 				output += `
// 				<ul>
// 					<li>ID : ${customer.id}</li>
// 					<li>ID : ${customer.name}</li>
// 					<li>ID : ${customer.company}</li>
// 					<li>ID : ${customer.phone}</li>
// 				</ul>`;
				
// 			});
// 			document.getElementById('customers').innerHTML = output;
// 		}
// 	}
// 	xhr.send();
// }



// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
// 	const number = document.querySelector('input[type="number"]').value;
// 	if(number != '') {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
// 		xhr.onload = function() {
// 			if(xhr.status = 200) {
// 				let response = JSON.parse(this.responseText);
				
// 				let output = '';
// 				if(response.type === "success") {
// 					let jokes = response.value;
// 					if(Array.isArray(jokes)) {
// 						jokes.forEach(function(joke) {
// 							output += `<li>ID : ${joke.id} | ${joke.joke}</li>`;
// 						});
// 					} else {
// 						output = `<li>ID : ${jokes.id} | ${jokes.joke}</li>`;
// 					}
					
// 				} else {
// 					output = '<li>something went Wrong</li>'
// 				}
	
// 				document.querySelector('.jokes').innerHTML = output;
// 			}
// 		}
// 		xhr.send();
// 	} else {
// 		alert('Please fill the field');
// 	}
	
// 	e.preventDefault();
	
// }

const posts = [
	{
		title: 'Post One',
		body: 'This is the post One'
	},
	{
		title: 'Post Two',
		body: 'This is the post Two'
	}
];



function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach(function(post) {
			output += `<div>${post.title}</div>`
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			const error = false;
			posts.push(post);
			if(!error) {
				resolve();
			} else {
				reject('Error load Data');
			}
			
		}, 2000);
	});
	
}

createPost({
	title: 'Post thre',
	body: 'This is the post three'
})
.then(getPosts)
.catch(function(err) {
	console.log(err);

});