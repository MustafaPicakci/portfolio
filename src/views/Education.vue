<template>
  <div class="fh5co-tab-content active" data-content="2">
    <div class="fh5co-content-inner">
      <div class="row">
        <div class="col-md-12">
          <div v-for="ed in education" :key="ed" class="fh5co-feature">
            <div class="fh5co-icon">
              <i class="icon-graduation-cap"></i>
            </div>
            <div class="fh5co-text">
              <h2 class="gold">{{ ed.name }}</h2>
              <hr />
              <h3>
                {{ ed.date }}
              </h3>
              <p>
                {{ ed.agno }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { education } from "../utils/data/education";
export default {
  name: "education",
  data() {
    return {
      education: education,
    };
  },
};
</script>
<style scoped>
.gold {
  color: gold;
}
</style>