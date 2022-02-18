<template>
  <div>
    <div v-if="loader">loading...</div>
    <div v-else>
      <v-app-bar class="px-md-5 px-2" color="white">
        <div>
          <v-menu bottom min-width="220px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn fab v-on="on">
                <v-avatar>
                  <v-img style="width: 100%" :src="user.Ju.AN"></v-img
                ></v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar>
                    <v-img style="width: 100%" :src="user.Ju.AN"></v-img>
                  </v-avatar>
                  <h3>{{ user.Ju.sf }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.Ju.zv }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn style="width: 90%; margin: 0 auto">
                    Edit Account
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    color="red"
                    style="width: 90%; margin: 0 auto"
                    @click="logout"
                  >
                    Log out
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </div>
        <div class="d-md-block d-none mx-3">
          <v-icon medium color="grey darken-2"> mdi-view-comfy </v-icon>
        </div>
        <div class="d-md-block d-none">
          <router-link to="/" class="black--text text-decoration-none mr-3 ml-6"
            >Home</router-link
          >
<<<<<<< HEAD
          <v-list>
            <v-list-item>
              <v-list-item-title class="px-4">hello world</v-list-item-title>
              <v-list-item-title class="px-4">hi what is up</v-list-item-title>
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
=======
          <router-link to="/" class="black--text text-decoration-none mx-3"
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
>>>>>>> edaab14ab586d81c963e5ea5c790963bd0d6f7a6
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dropdown: false,
      loader: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["getUser"]),
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/sign-in");
    },
  },
  async mounted() {
    this.loader = true;
    await this.getUser().then(() => {
      console.log(this.user);
    });
    this.loader = false;
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
</style>
