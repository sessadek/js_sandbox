const github = new Github;
const ui = new UI;

document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const usetText = e.target.value;
    if(usetText !== '') {
        github
        .getUser(usetText)
        .then(data => {
            if(data.profile.message === "Not Found") {
                // show alert
                ui.showAlert('User not Found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});