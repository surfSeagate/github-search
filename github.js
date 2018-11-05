class GitHub{
  constructor(){
    this.client_id = 'e9f7e7d78ef0469413e';
    this.client_secret = 'fd6009504e9a10126a860aa26d7a04c8e4fa44';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
    async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return{
        profile,
        repos
      }


    }

}