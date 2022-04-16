<template>
  <div>
    <v-container class="mt-md-16 mt-10 pt-md-16">
      <v-row>
        <v-col cols="12">
          <div class="d-md-flex justify-space-around borderStyle pa-5">
            <div>
              <img
                class="d-flex justify-center"
                style="width: 100%; max-width: 380px; margin: 0 auto"
                src="../assets/gggg.svg"
              />
            </div>
            <div
              style="width: 100%; max-width: 250px"
              class="d-block mx-md-2 mt-md-3 mt-10 mx-auto"
            >
              <div class="text-h4 pb-5">Sign in via:</div>
              <div class="text-center mx-1 py-3">
                <v-btn style="width: 100%" @click="login()">
                  <img
                    style="width: 20px"
                    class="mr-1"
                    src="https://gitlab.com/assets/auth_buttons/google_64-9ab7462cd2115e11f80171018d8c39bd493fc375e83202fbb6d37a487ad01908.png"
                  />
                  Google</v-btn
                >
              </div>
              <div class="text-center mx-1 py-3">
                <v-btn style="width: 100%" @click="login()">
                  <v-icon class="mr-1">mdi-facebook</v-icon>
                  Facebook</v-btn
                >
                <!-- <facebook-login
                  class="button"
                  appId="1074406959771848"
                  @login="onLogin"
                >
                </facebook-login> -->
              </div>
              <div class="text-center mx-1 py-3">
                <v-btn style="width: 100%" @click="login()">
                  <img
                    class="mr-1"
                    style="width: 20px"
                    src="https://gitlab.com/assets/auth_buttons/github_64-84041cd0ea392220da96f0fb9b9473c08485c4924b98c776be1bd33b0daab8c0.png"
                    alt=""
                  />
                  Github</v-btn
                >
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("user", ["GET_USER", "SET_TOKEN"]),
    async login() {
      let googleUser = await this.$gAuth.signIn();

      // console.log(googleUser.getBasicProfile());
      // console.log(googleUser.getAuthResponse());

      const token = googleUser.getAuthResponse().access_token;

      // const token = googleUser.xc.access_token;
      // console.log("with Nw" + JSON.stringify(googleUser.getBasicProfile()));
      // console.log("without Nw" + JSON.stringify(googleUser));
      const user = JSON.stringify(googleUser.getBasicProfile());
      // const user = JSON.stringify(googleUser);
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);

      this.SET_TOKEN(token);
      // console.log("googleUser =>", googleUser);
      this.GET_USER(googleUser);
      // this.$store.commit("user/GET_USER", googleUser); or//

      this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.borderStyle {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 15px;
}
</style>
