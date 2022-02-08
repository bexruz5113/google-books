<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view class="mt-5" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
export default {
  components: { Navbar, Footer },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
