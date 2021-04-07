<template>
  <div class="fh5co-tab-content active">
    <div class="fh5co-content-inner">
      <div class="row">
        <div class="col-md-12">
          <div class="content" v-if="projects.length > 0">
            <div
              v-for="p in projects"
              :key="p"
              class="fh5co-feature"
              @click="redirectToRepo"
            >
              <a :href="p.url" target="_blank">
                <div class="fh5co-icon">
                  <i class="icon-black-tie"></i>
                </div>
                <div class="fh5co-text">
                  <h2>{{ p.name }}</h2>
                  <hr />
                  <h3>{{ p.description }}</h3>
                  <br /></div
              ></a>
            </div>
          </div>
          <div v-else class="text-center">
            <div class="spinner-border text-light" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects",
  props: ["projects"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.projects);
  },
  methods() {},
};
</script>
<style scoped>
.fh5co-feature {
  margin-bottom: 3em;
}
</style>