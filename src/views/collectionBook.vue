<template>
  <div>
    <Navbar />
    <v-container class="mx-auto mt-5">
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-center align-center"
          style="width: 100vw; height: 100vh"
          v-if="!books"
        >
          <div class="text-h5">
            Sorry not found, <router-link to="/"> try again</router-link>
          </div>
        </v-col>
        <v-col
          v-else
          cols="6"
          sm="4"
          md="3"
          lg="2"
          v-for="(find, index) in books"
          :key="index"
          class="d-block my-3 px-3 text-center"
        >
          <router-link :to="`/book/${find.id}`">
            <div class="pa-0">
              <v-list-item-avatar
                class="frameStyle"
                style="height: 170px; max-width: 135px; width: 100%"
              >
                <img
                  class="imgBorder"
                  :src="find.volumeInfo.imageLinks.thumbnail"
                />

                <div class="ratingInfo">
                  <v-icon color="orange" x-small>mdi-star</v-icon>
                  <p class="mb-0 pl-1">
                    {{
                      find.volumeInfo.averageRating
                        ? find.volumeInfo.averageRating
                        : 0
                    }}
                  </p>
                </div>
              </v-list-item-avatar>
            </div>
            <div class="py-0">
              <v-list-item color="black">
                <v-list-item-content>
                  <v-list-item-title class="text-md-body-1">
                    {{ find.volumeInfo.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </router-link>

          <!-- <router-link :to="`/book/${find.id}`">
            <v-list-item class="px-0">
              <v-list-item-avatar size="100" class="frameStyle">
                <img
                  class="imgBorder"
                  :src="find.volumeInfo.imageLinks.thumbnail"
                />
                <div class="ratingInfo">
                  <v-icon color="orange" x-small>mdi-star</v-icon>
                  <p class="mb-0">
                    {{
                      find.volumeInfo.averageRating
                        ? find.volumeInfo.averageRating
                        : 0
                    }}
                  </p>
                </div>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  class="mb-1"
                  v-for="author of find.volumeInfo.authors"
                  :key="author.id"
                >
                  <b class="blue--text d-flex">{{ author }}, </b>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ index + 1 }}. {{ find.volumeInfo.title }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link> -->
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.title);
    this.getbooks(this.$route.query.q);
  },
  computed: {
    ...mapGetters("books", ["books"]),
  },
  methods: {
    ...mapActions("books", ["getbooks"]),
    listAmount(x) {
      return x?.amount || "free";
    },
    retailPrice(y) {
      return y?.amount || "free";
    },
  },
  mounted() {
    console.log("collectionBook=>" + this.$route.name);
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.frameStyle {
  width: 100%;
  height: 170px;
  max-width: 134px;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0px;
}
.imgBorder {
  background: rgba(197, 191, 191, 0.575);
  padding: 20px 25px;
  margin: 0 auto;
}
.ratingInfo {
  display: flex;
  width: 50px;
  position: relative;
  font-size: 12px;
  font-weight: bold;
  right: 50px;
  bottom: -30px;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  color: rgb(28, 28, 121);
  font-family: sans-serif;
}
</style>
