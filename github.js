class GitHub {
  constructor() {
    this.client_id = "0174f394d90912b6e770";
    this.client_secret = "fb8971a75cf15cb30fc8495005b19882d77734a1";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repos = await reposResponse.json();
    return {
      profile,
      repos
    };
  }
}
