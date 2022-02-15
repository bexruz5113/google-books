<template>
  <div>
    <v-app-bar class="px-md-5 px-2" color="white">
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on" class="avatarBorder" size="48">
              <!-- <span><v-img :src="user.Ju.AN"></v-img></span> -->
            </v-avatar></template
          >
          <v-list>
            <v-list-item>
              <v-list-item-title class="px-4">dabba</v-list-item-title>
              <v-list-item-title class="px-4">salom</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
        <router-link
          to="/my-library"
          class="black--text text-decoration-none mx-3"
          >My Library</router-link
        >
      </div>

      <v-spacer></v-spacer>
      <div class="d-block text-end" v-if="this.$route.name == 'Home'">
        <v-app-bar-nav-icon class="black--text" large></v-app-bar-nav-icon>
      </div>
      <div class="d-block text-end" v-if="this.$route.name == 'search'">
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["user"]),
  },
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
