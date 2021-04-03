<template>
  <router-link tag="button" class="btn btn-primary" :to="{ name: 'profile' }"
    >profil</router-link
  >
  <hr />
  <router-link tag="button" class="btn btn-primary" :to="{ name: 'education' }"
    >education</router-link
  >
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
