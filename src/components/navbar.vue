<template>
  <div>
    <div v-if="user.Du">
      <v-app-bar class="px-md-5 px-2" color="white">
        <div>
          <router-link to="/"
            ><img
              class="mt-2 mr-sm-0 mr-2"
              src="https://img.icons8.com/color/40/000000/story-book.png"
          /></router-link>
        </div>
        <div class="d-sm-block d-none">
          <router-link
            to="/"
            class="black--text text-decoration-none font-weight-medium mr-3 ml-6"
            >Home</router-link
          >
          <router-link
            to="/stores"
            class="black--text text-decoration-none font-weight-medium mx-3"
            >Books</router-link
          >
          <router-link
            to="/"
            class="black--text text-decoration-none font-weight-medium mx-3"
            >My Library</router-link
          >
        </div>

        <v-spacer></v-spacer>

        <div class="mr-6">
          <div class="d-block text-end" v-if="this.$route.name == 'Home'">
            <v-btn
              @click="routerLink"
              small
              class="mx-2"
              color="primary"
              type="submit"
            >
              <p class="my-1">Map</p>
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </div>
          <div class="d-block mt-sm-6 mt-0 mr-2" v-else>
            <div class="d-sm-none d-block">
              <v-btn color="primary" rounded fab @click.stop="dialog = true">
                <v-icon color="grey">mdi-magnify</v-icon>
              </v-btn>

              <v-dialog v-model="dialog" max-width="500">
                <v-card class="px-3 pt-4">
                  <v-form @submit.prevent="search()">
                    <v-text-field
                      v-model="bookName"
                      label="Find the book"
                      prepend-inner-icon="mdi-magnify"
                    ></v-text-field
                  ></v-form>
                </v-card>
              </v-dialog>
            </div>
            <div class="d-sm-block d-none">
              <v-form @submit.prevent="search()">
                <v-text-field
                  v-model="bookName"
                  label="Find the book"
                  prepend-inner-icon="mdi-magnify"
                ></v-text-field
              ></v-form>
            </div>
          </div>
        </div>

        <div>
          <v-menu min-width="220px" nudge-bottom="20" rounded offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab v-on="on" v-bind="attrs">
                <v-avatar size="36">
                  <v-img :src="user.Du.eN"></v-img
                ></v-avatar>
              </v-btn>
            </template>
            <v-card class="py-3">
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <!-- <v-avatar>
                    <v-img style="width: 100%" :src="user.Du.eN"></v-img>
                  </v-avatar> -->
                  <h3>{{ user.Du.tf }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.Du.tv }}
                  </p>
                  <v-btn
                    small
                    color="cyan"
                    class="white--text"
                    style="width: 80%; margin: 0 auto"
                  >
                    Edit Account
                  </v-btn>
                  <v-divider class="my-3 mx-1"></v-divider>
                  <v-btn
                    color="red"
                    small
                    class="white--text"
                    style="width: 80%; margin: 0 auto"
                    @click="logout"
                  >
                    Log out
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </div>
      </v-app-bar>
    </div>
    <div v-else-if="user.Ju">
      <v-app-bar class="px-md-5 px-2" color="white">
        <div>
          <router-link to="/"
            ><img
              class="mt-2 mr-sm-0 mr-2"
              src="https://img.icons8.com/color/40/000000/story-book.png"
          /></router-link>
        </div>
        <div class="d-sm-block d-none">
          <router-link
            to="/"
            class="black--text text-decoration-none font-weight-medium mr-3 ml-6"
            >Home</router-link
          >
          <router-link
            to="/stores"
            class="black--text text-decoration-none font-weight-medium mx-3"
            >Books</router-link
          >
          <router-link
            to="/"
            class="black--text text-decoration-none font-weight-medium mx-3"
            >My Library</router-link
          >
        </div>
        <v-spacer></v-spacer>
        <div class="mr-6">
          <div class="d-block text-end" v-if="this.$route.name == 'Home'">
            <v-btn
              @click="routerLink"
              small
              class="mx-2"
              color="primary"
              type="submit"
            >
              <p class="my-1">Map</p>
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </div>
          <div class="d-block mt-sm-6 mt-0 mr-2" v-else>
            <div class="d-sm-none d-block">
              <v-btn color="primary" rounded fab @click.stop="dialog = true">
                <v-icon color="grey">mdi-magnify</v-icon>
              </v-btn>

              <v-dialog v-model="dialog" max-width="500">
                <v-card class="px-3 pt-4">
                  <v-form @submit.prevent="search()">
                    <v-text-field
                      v-model="bookName"
                      label="Search for book"
                      prepend-inner-icon="mdi-magnify"
                    ></v-text-field
                  ></v-form>
                </v-card>
              </v-dialog>
            </div>
            <div class="d-sm-block d-none">
              <v-form @submit.prevent="search()">
                <v-text-field
                  v-model="bookName"
                  solo
                  dense
                  rounded
                  label="Search for book"
                  prepend-inner-icon="mdi-magnify"
                ></v-text-field
              ></v-form>
            </div>
          </div>
        </div>
        <v-menu bottom min-width="220px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn fab v-on="on">
              <v-avatar size="36"> <v-img :src="user.Ju.AN"></v-img></v-avatar>
            </v-btn>
          </template>
          <v-card class="py-3">
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <!-- <v-avatar>
                  <v-img style="width: 100%" :src="user.Ju.AN"></v-img>
                </v-avatar> -->
                <h3>{{ user.Ju.sf }}</h3>
                <p class="text-caption mt-1">
                  {{ user.Ju.zv }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn
                  small
                  color="cyan"
                  class="white--text"
                  style="width: 80%; margin: 0 auto"
                >
                  Edit Account
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                  small
                  color="red"
                  class="white--text"
                  style="width: 80%; margin: 0 auto"
                  @click="logout"
                >
                  Log out
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      bookName: "",
      dialog: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["getUser"]),
    search() {
      this.$router.push(`/search?q=${this.bookName}`);
      location.reload();
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/sign-in");
    },
    routerLink() {
      return this.$router.push("/map");
    },
  },
  async mounted() {
    this.loader = true;
    await this.getUser().then(() => {
      // console.log(this.user);
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
.v-btn--fab.v-size--default {
  margin-right: 10px;
  height: 0px;
  width: 0px;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: -1px -20px 4px -1px rgb(0 0 0 / 30%),
    8px -20px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
</style>
