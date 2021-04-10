<template>
  <div id="fh5co-main">
    <div class="fh5co-tab-wrap">
      <NavigationMenu></NavigationMenu>
      <router-view v-slot="{ Component }" :projects="projects">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import service from "./service/githubService";

export default {
  name: "App",
  components: { NavigationMenu, Footer },
  data() {
    return {
      projects: [],
      username: process.env.VUE_APP_USERNAME,
    };
  },
  created() {
    service
      .getRepositories()
      .then((r) => {
        this.prepareProjects(r.data);
      })
      .catch((e) => {
        alert(e);
      });
  },
  methods: {
    async prepareProjects(repositories) {
      var tmp = [];

      for (let r of repositories) {
        var existsInContributors;

        existsInContributors = await this.checkContributors(r.contributors_url);

        if (
          existsInContributors &&
          JSON.stringify(r.description).toLowerCase().includes("project")
        ) {
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
        if (i.login === this.username) {
          result = true;
          break;
        }
      }
      return result;
    },
  },
};
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-leave-active {
  transition: all 0.5s ease-out;
}
</style>
