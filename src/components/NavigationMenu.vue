<template>
  <ul class="fh5co-tab-menu">
    <router-link
      :to="{ name: 'profile' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li :class="[isActive && 'active']">
        <a :href="href" @click="navigate">Profile</a>
      </li>
    </router-link>

    <router-link
      :to="{ name: 'education' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li :class="[isActive && 'active']">
        <a :href="href" @click="navigate">Education</a>
      </li>
    </router-link>

    <router-link
      :to="{ name: 'experiences' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li :class="[isActive && 'active']">
        <a :href="href" @click="navigate">Experiences</a>
      </li>
    </router-link>
    <router-link
      :to="{ name: 'skills' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li :class="[isActive && 'active']">
        <a :href="href" @click="navigate">Skills</a>
      </li>
    </router-link>
    <router-link
      :to="{ name: 'projects' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li :class="[isActive && 'active']">
        <a :href="href" @click="navigate">Projects</a>
      </li>
    </router-link>
  </ul>
</template>
<script>
export default {};
</script>