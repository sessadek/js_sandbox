import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);

document.querySelector('#posts').addEventListener('click', deletePost);

document.querySelector('#posts').addEventListener('click', enableEdit);

document.querySelector('.card-form').addEventListener('click', cancelEdit);


function getPosts(){
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost(e) {
    const id = document.querySelector('#id').value;
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    if(title === '' && body === '') {
        ui.showAlert('Please Fill Fields', 'alert alert-danger');
    } else {

        const data = {
            title,
            body
        };
        if(id === '') {

            http.post('http://localhost:3000/posts', data)
            .then(data =>  {
                ui.showAlert('Post Added !!!', 'alert alert-success');
                ui.clearField();
                getPosts();
            })
            .catch(err => console.log(err));
        } else {
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data =>  {
                ui.showAlert('Post Updated !!!', 'alert alert-success');
                ui.changeFormState('add');
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
    e.preventDefault();
}


function deletePost(e) {
    if(e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sur ?')) {

            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data =>  {
                ui.showAlert('Post removed !!!', 'alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
    e.preventDefault();
}

function enableEdit(e) {
    if(e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const data = {
            id,
            title,
            body
        };
        ui.fillForm(data);
    }
    e.preventDefault();
}

function cancelEdit(e) {
    if(e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}