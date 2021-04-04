<template>
  <div class="fh5co-tab-content active">
    <div class="fh5co-content-inner">
      <div class="row">
        <div class="col-md-12">
          <div v-for="ex in experiences" :key="ex" class="fh5co-feature">
            <div class="fh5co-icon">
              <i class="icon-black-tie"></i>
            </div>
            <div class="fh5co-text">
              <h2>{{ ex.date }}</h2>
              <hr />
              <h3>{{ ex.companyName }}</h3>
              <h4 class="gold">{{ ex.position }}</h4>
              <p>
                {{ ex.description }}
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { experiences } from "../utils/data/experiences";
export default {
  name: "experiences",
  data() {
    return {
      experiences: experiences,
    };
  },
};
</script>
<style scoped>
.gold {
  color: gold;
}
</style>