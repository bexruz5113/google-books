<template>
  <div>
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" md="6" class="mt-10"
          ><img
            style="width: 100%; max-width: 400px"
            src="../assets/gggg.svg"
            alt=""
          />
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-space-between">
          Sign with:{{ isLogin }}
          <div class="text-center pt-16">
            <v-btn @click="login()">
              <img
                style="width: 20px"
                src="https://gitlab.com/assets/auth_buttons/google_64-9ab7462cd2115e11f80171018d8c39bd493fc375e83202fbb6d37a487ad01908.png"
                alt=""
              />
              Google</v-btn
            >
          </div>
          <div class="text-center pt-16">
            <v-btn @click="login()">
              <v-icon>mdi-facebook</v-icon>
              Facebook</v-btn
            >
          </div>
          <div class="text-center pt-16">
            <v-btn @click="login()">
              <img
                style="width: 20px"
                src="https://gitlab.com/assets/auth_buttons/github_64-84041cd0ea392220da96f0fb9b9473c08485c4924b98c776be1bd33b0daab8c0.png"
                alt=""
              />
              Github</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapMutations("user", ["GET_USER", "SET_TOKEN"]),
    async login() {
      let googleUser = await this.$gAuth.signIn();

      const token = googleUser.wc.access_token;
      console.log("xaxaxa " + token);
      localStorage.setItem("token ", token);
      this.SET_TOKEN(token);

      console.log("googleUser", googleUser);
      // this.$store.commit("user/GET_USER", googleUser); or//
      this.GET_USER(googleUser);
      this.isLogin = this.$gAuth.isAuthorized;
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
