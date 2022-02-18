<template>
  <div class="positionRelative">
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
                <v-btn style="width: 90%; margin: 0 auto"> Edit Account </v-btn>
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

        <!-- <div class="positionAbsolute" v-if="dropdown">
          <v-img
            style="width: 100%; max-width: 55px; margin: 0 auto"
            :src="user.Ju.AN"
          ></v-img>
          <p class="text-lg-h6 pt-2 mb-0 text-center">{{ user.Ju.sf }}</p>
          <p class="text-caption text-center pb-2 mb-0">{{ user.Ju.zv }}</p>
          <v-divider></v-divider>
          <div class="my-1">
            <v-btn style="width: 100%" color="blue">edit profile</v-btn>
          </div>
          <div>
            <v-btn color="red" style="width: 100%" @click="logout">
              log out
            </v-btn>
          </div>
        </div> -->
        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on" size="50">
              <span
                ><v-img
                  style="width: 100%; max-width: 55px"
                  :src="user.Ju.AN"
                ></v-img
              ></span> </v-avatar
          ></template>
          <v-list>
            <v-list-item>
              <v-list-item-action
                ><v-btn class="w-full" @click="logout">
                  log out
                </v-btn></v-list-item-action
              >
            </v-list-item>
          </v-list>
        </v-menu> -->
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
      <!-- {{ user }} -->
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
  data() {
    return {
      dropdown: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/sign-in");
    },
    openProfile() {
      this.dropdown = !this.dropdown;
    },
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
.positionRelative {
  position: relative;
}
.positionAbsolute {
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  max-width: 220px;
  background-color: white;
  padding: 5px 10px;
  border: 1px solid rgb(185, 178, 178);
  z-index: 1;
}
</style>
