<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="pl-5">
        <v-icon x-large>mdi-access-point</v-icon>
      </div>
      <div>
        <router-link to="/" class="white--text text-decoration-none mr-3 ml-6"
          >Home</router-link
        >
        <router-link to="/search" class="white--text text-decoration-none mx-3"
          >Books</router-link
        >
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </div>
    </v-app-bar>

    <v-main>
      <router-view class="mt-5" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
