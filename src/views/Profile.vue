<template>
  <div class="fh5co-tab-content active">
    <div class="fh5co-content-inner text-center">
      <div class="row row-bottom-padded-sm">
        <div class="col-md-12">
          <figure>
            <img
              :src="profile.profilePhoto"
              width="140"
              height="140"
              alt="Profile Photo"
            />
          </figure>
          <h1>{{ profile.name }} {{ profile.surname }}</h1>
          <p>
            {{ profile.mainContent }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 fh5co-counter">
          <div class="fh5co-number fh5co-left">
            {{ profile.subContent.number }}
          </div>
          <div class="fh5co-text">
            <h3 class="border-bottom">{{ profile.subContent.title }}</h3>
            <p>
              {{ profile.subContent.description }}
            </p>
          </div>
        </div>
      </div>
      <ul class="fh5co-social">
        <li>
          <a :href="'mailto:' + profile.links.email"
            ><i class="icon-envelope"></i
          ></a>
        </li>
        <li>
          <a :href="profile.links.linkedin" target="_blank"
            ><i class="icon-linkedin"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { profile } from "../utils/data/profile";
export default {
  name: "profile",
  data() {
    return {
      profile: profile,
    };
  },
  mounted() {},
};
</script>