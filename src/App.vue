<template>
  <div id="fh5co-main">
    <div class="fh5co-tab-wrap">
      <ul class="fh5co-tab-menu">
        <li>
          <router-link :to="{ name: 'profile' }">
            <span class="icon icon-glass"></span
            ><span class="menu-text">Profile</span>
          </router-link>
        </li>
        <li>
          <router-link
            tag="li"
            exact
            active-class="active"
            :to="{ name: 'education' }"
            ><span class="icon icon-graduation-cap"></span
            ><span class="menu-text">Education</span></router-link
          >
        </li>
        <li>
          <router-link
            tag="li"
            exact
            active-class="active"
            :to="{ name: 'experiences' }"
            ><span class="icon icon-black-tie"></span
            ><span class="menu-text">Experiences</span></router-link
          >
        </li>
        <li>
          <router-link tag="li" :to="{ name: 'skills' }"
            ><span class="icon icon-fighter-jet"></span
            ><span class="menu-text">Skills</span></router-link
          >
        </li>
      </ul>
      <router-view />
    </div>
    <footer id="fh5co-footer">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <small>
            &copy; 2016 Personal Free HTML5 Template. All Rights Reserved.
            <span class="fh5co-author">
              Designed by
              <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a>
              Demo Images:
              <a href="http://unsplash.com/" target="_blank">Unsplash</a></span
            >
          </small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
