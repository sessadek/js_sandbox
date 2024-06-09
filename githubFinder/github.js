class Github {
    constructor() {
        this.client_id = 'f3a6332a2c342bb6eb18';
        this.client_secret = 'b59106a20aa9ff7692500cf62797e73589eeb56d';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profilResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profilResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }

    
}