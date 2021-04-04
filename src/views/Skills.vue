<template>
  <div class="fh5co-tab-content active" data-content="4">
    <div class="fh5co-content-inner">
      <div class="row">
        <div class="col-md-12">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center">
          <div class="chart" data-percent="95">
            <span><strong>HTML5</strong>95%</span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center">
          <div class="chart" data-percent="93">
            <span><strong>CSS3</strong>93%</span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center">
          <div class="chart" data-percent="90">
            <span><strong>jQuery</strong>90%</span>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12 text-center">
          <div class="chart" data-percent="89">
            <span><strong>PHP</strong>89%</span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center">
          <div class="chart" data-percent="85">
            <span><strong>MySQL</strong>85%</span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center">
          <div class="chart" data-percent="90">
            <span><strong>AngularJS</strong>90%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chart from "../utils/pieChart";
export default {
  name: "skills",
  mounted() {
    chart.pieChart();
  },
  methods: {},
};
</script>