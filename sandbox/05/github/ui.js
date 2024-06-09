class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div>
            <img src="${user.avatar_url}">
            <a href="${user.html_url}">${user.name}</a>
        </div>
        `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `<div><a href="${repo.html_url}">${repo.name}</a></div>`;
        });

        this.repos.innerHTML = output;
    }

    clearRepos() {
        this.repos.innerHTML = '';
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(msg, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const search = document.getElementById('searchUser');
        document.body.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}