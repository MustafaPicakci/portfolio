<template>
  <div id="fh5co-main">
    <div class="fh5co-tab-wrap">
      <NavigationMenu></NavigationMenu>
      <router-view />
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { NavigationMenu, Footer },
};
</script>

<style>
</style>
