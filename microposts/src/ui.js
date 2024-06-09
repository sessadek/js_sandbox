class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = '';
        posts.forEach(post => {
            output += `
                <div class="col-sm-12 col-md-4">
                    <div class="card mb-3">
                        <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                    
                        <a href="#" class="delete card-link" data-id="${post.id}">
                        <i class="fa fa-remove"></i>
                        </a>
                        </div>
                    </div>
                </div>`;
        });
        this.post.innerHTML = output;
    }
    showAlert(msg, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.postsContainer');
        container.insertBefore(div, this.post);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }
    clearAlert() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
    clearField() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
    fillForm(data) {
        this.idInput.value = data.id;
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.changeFormState('edit');
    }
    changeFormState(state) {
        if(state === 'edit') {
            
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-default btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            const cardForm = document.querySelector('.card-form');
            const formEnd = document.querySelector('.form-end');
            cardForm.insertBefore(button, formEnd);
        } else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';

            if(document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }

            document.querySelector('#id').value = '';

            this.clearField();
        }
    }
}

export const ui = new UI();