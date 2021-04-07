import axios from "axios";
export default {
  getRepositories() {
    var username = process.env.VUE_APP_USERNAME
    return axios.get(`https://api.github.com/users/${username}/repos`)
  },

  getProjectLanguages(url) {
    return axios.get(url)
  },
  checkContributors(url) {
    return axios.get(url)
  }
}