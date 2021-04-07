<template>
  <div class="fh5co-tab-content active">
    <div class="fh5co-content-inner">
      <div class="row">
        <div class="col-md-12">
          <div v-for="p in projects" :key="p" class="fh5co-feature">
            <div class="fh5co-icon">
              <i class="icon-black-tie"></i>
            </div>
            <div class="fh5co-text">
              <h2>{{ p.name }}</h2>
              <hr />
              <h3>{{ p.description }}</h3>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "../service/githubService";
export default {
  name: "projects",
  data() {
    return { projects: [] };
  },
  created() {
    service.getRepositories().then((r) => {
      this.prepareProjects(r.data);
    });
  },
  methods: {
    async prepareProjects(repositories) {
      var tmp = [];

      for (let r of repositories) {
        var existsInContributors;

        existsInContributors = await this.checkContributors(r.contributors_url);

        if (existsInContributors) {
          let project = {
            name: r.name,
            description: r.description,
            url: r.html_url,
          };

          tmp.push(project);
        }
      }
      this.projects = tmp;
    },
    async checkContributors(url) {
      var res = await service.checkContributors(url);
      var result = false;
      for (let i of res.data) {
        if (i.login === "MustafaPicakci") {
          result = true;
          break;
        }
      }
      return result;
    },
  },
};
</script>
<style scoped>
</style>