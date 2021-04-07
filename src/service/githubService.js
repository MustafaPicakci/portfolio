import axios from "axios";
export default {
  getRepositories() {
    return axios.get("https://api.github.com/users/MustafaPicakci/repos", { username: " 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" })
  },

  getProjectLanguages(url) {
    return axios.get(url)
  },
  checkContributors(url) {
    return axios.get(url)
  }
}