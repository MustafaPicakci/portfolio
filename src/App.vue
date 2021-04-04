<template>
  <div id="fh5co-main">
    <div class="fh5co-tab-wrap">
      <NavigationMenu></NavigationMenu>
      <router-view v-slot="{ Component }">
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
    return { res: null };
  },
  mounted() {
    service
      .getRepositories()
      .then((r) => {
        this.res = r.data;
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
