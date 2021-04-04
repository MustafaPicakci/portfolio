<template>
  <div class="fh5co-tab-content active" data-content="4">
    <div class="fh5co-content-inner">
      <div class="row">
        <div
          v-for="skill in skills"
          :key="skill"
          class="col-md-4 col-sm-6 col-xs-12 text-center"
        >
          <div class="chart" :data-percent="skill.percent">
            <span
              ><strong>{{ skill.skillName }}</strong
              >{{ skill.percent }}%</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chart from "../utils/pieChart";
import { skills } from "../utils/data/skills";
export default {
  name: "skills",
  data() {
    return {
      skills: skills,
    };
  },
  mounted() {
    chart.pieChart();
  },
  methods: {},
};
</script>