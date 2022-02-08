<template>
  <div>
    <v-app-bar class="px-3" color="white">
      <v-spacer></v-spacer>
      <div>
        <router-link to="/" class="black--text text-decoration-none mr-3 ml-6"
          >Home</router-link
        >
        <router-link to="/search" class="black--text text-decoration-none mx-3"
          >Books</router-link
        >
      </div>
      <div class="mx-3">
        <v-icon large color="grey darken-2"> mdi-view-comfy </v-icon>
      </div>
      <div>
        <v-avatar class="avatarBorder" size="48">
          <v-icon color="grey" large> mdi-account </v-icon>
        </v-avatar>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.avatarBorder {
  width: 60px;
  height: 60px;
  background-image: url(https://music.yandex.uz/i/brfh5jttsYpuJjPvB_wxZXPqPMI.svg);
}
</style>
