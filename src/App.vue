<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Footer from "./components/footer.vue";
// import Navbar from "./components/navbar.vue";
export default {
  // components: { Navbar, Footer },
  name: "App",

  data: () => ({}),
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
