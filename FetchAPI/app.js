document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}


function getJSON() {
  fetch('posts.json')
  .then(response => response.json())
  .then(datas => {
    let output = '';
    datas.forEach(data => {
      output += `<div>${data.title} - ${data.body}</div>`
    });
    document.getElementById('output').innerHTML = output;

  })
  .catch(err => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(datas => {
    let output = '';
    datas.forEach(data => {
      output += `<div>${data.login}</div>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}
