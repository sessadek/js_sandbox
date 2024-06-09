const github = new Github;
const ui = new UI;
const serachUser = document.getElementById('searchUser');

serachUser.addEventListener('keyup', (e) => {
    const userText = e.target.value
    if(userText !== '') {
        github.getUser(userText).then( data => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert(userText + ' ' + data.profile.message, 'alert alert-danger');
                ui.clearProfile();
                ui.clearRepos();
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        ui.clearProfile();
        ui.clearRepos();
    }
});

