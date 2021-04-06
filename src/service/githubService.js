import axios from "axios";
export default {
  getRepositories() {
    return axios.get("https://api.github.com/users/MustafaPicakci/repos")
  },

  getProjectLanguages(url) {
    return axios.get(url)
  }
}