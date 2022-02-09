<template>
  <div>
    <v-app-bar class="px-md-5 px-2" color="white">
      <div>
        <v-avatar class="avatarBorder" size="48">
          <v-icon color="grey" medium> mdi-account </v-icon>
        </v-avatar>
      </div>
      <div class="d-md-block d-none mx-3">
        <v-icon medium color="grey darken-2"> mdi-view-comfy </v-icon>
      </div>

      <div class="d-md-block d-none">
        <router-link to="/" class="black--text text-decoration-none mr-3 ml-6"
          >Home</router-link
        >
        <router-link to="/search" class="black--text text-decoration-none mx-3"
          >Books</router-link
        >
      </div>

      <v-spacer></v-spacer>
      <div class="d-md-none d-block">
        <v-app-bar-nav-icon class="black--text" large></v-app-bar-nav-icon>
      </div>
      <div
        class="d-md-block d-none text-end"
        style="width: 400px"
        v-if="this.$route.name == 'search'"
      >
        <router-link to="/">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon> mdi-magnify </v-icon>
          </v-btn></router-link
        >
      </div>
    </v-app-bar>
  </div>
</template>

<script>
// import Searching from "./searching.vue";
export default {
  // components: { Searching },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}
.avatarBorder {
  width: 40px;
  height: 40px;
  background-image: url(https://music.yandex.uz/i/brfh5jttsYpuJjPvB_wxZXPqPMI.svg);
}
</style>
