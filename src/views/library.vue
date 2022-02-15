<template>
  <div>
    <!-- {{ library }} -->
  </div>
</template>

<script>
// import facebookLogin from "facebook-login-vuejs";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    // facebookLogin,
  },
  data() {
    return {
      // isLogin: false,
    };
  },
  computed: {
    ...mapGetters("library", ["library"]),
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("library", ["getMyLibrary"]),
    ...mapMutations("user", ["GET_USER"]),

    async login() {
      let googleUser = await this.$gAuth.signIn();
      console.log("googleUser", googleUser);
      // this.isLogin = this.$gAuth.isAuthorized;
      this.GET_USER(googleUser);
    },
  },
};
</script>

<style></style>
