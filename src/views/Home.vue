<template>
  <div>
    <Navbar />
    <v-container class="mx-auto mt-5">
      <v-row>
        <v-col cols="12">
          <v-row class="d-block mb-3">
            <v-col cols="12" md="4" class="mx-auto text-center">
              <!-- <p class="textAnimation text-h2 font-weight-bold">Google Book</p> -->
              <router-link to="/">
                <v-img
                  style="width: 100%; max-width: 600px"
                  src="../assets/logo1.png"
                ></v-img>
              </router-link>
            </v-col>
            <v-col cols="12" md="6" class="my-md-0 my-10 mx-auto">
              <Searching />
            </v-col>
            <v-col cols="12" class="text-center mt-md-10 mt-16">
              <div class="mx-auto">
                <img
                  style="width: 100%; max-width: 228px"
                  src="../assets/gggg.svg"
                  alt=""
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>
<script>
import Searching from "../components/searching.vue";
import Footer from "../components/footer.vue";
import Navbar from "../components/navbar.vue";

export default {
  components: { Navbar, Searching, Footer },
  name: "Home",
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.textAnimation {
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    red,
    yellow,
    green,
    blue,
    red,
    yellow,
    green,
    blue
  );
  background-clip: text;
  color: transparent;
  background-size: 300%;
  background-position: -100%;
  animation: animatedText 10s infinite linear;
}
@keyframes animatedText {
  from {
    background-position: 0%;
  }
  to {
    background-position: 100%;
  }
}
.imgBorder {
  border-radius: 5px;
  margin-top: 0;
  border: 1px solid rgb(63, 62, 62);
}
.imgPosition {
  position: relative;
  display: flex;
  transition: all 0.9s ease;
}
.iconPosition {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(182, 180, 180, 0.719);
  display: none;
}
.imgPosition:hover .iconPosition {
  display: flex;
}
.linkStyle {
  padding: 2px 5px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #1976d2;
}
</style>
