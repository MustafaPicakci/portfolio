import axios from "axios";

export default {
  getRepositories() {
    return axios.get("https://api.github.com/users/MustafaPicakci/repos");
  },

};