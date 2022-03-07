<template>
  <div>
    <Navbar />
    <v-container class="mx-auto mt-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(find, index) in books"
          :key="index"
          class="d-flex justify-start my-3 px-3"
        >
          <v-card class="mx-auto pa-3">
            <v-list-item class="px-0">
              <v-list-item-avatar size="100" class="imgBorder">
                <img :src="find.volumeInfo.imageLinks.thumbnail" />
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
                <div class="d-flex justify-space-between pt-2">
                  <div>
                    <v-rating
                      v-model="find.volumeInfo.averageRating"
                      background-color="grey"
                      color="orange accent-4"
                      dense
                      readonly
                      size="17"
                    ></v-rating>
                  </div>

                  <div>
                    <router-link :to="`/book/${find.id}`">
                      <p class="text-caption text-md-body-1">More Info</p>
                    </router-link>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
            <div class="d-flex justify-space-between align-center mt-3">
              <v-card-title class="pl-0 text-caption text-md-body-1">
                <small class="mb-0 grey--text text-decoration-line-through">
                  $10.09
                </small>
                <!-- <b>${{ listAmount(find.saleInfo.listPrice) }}</b>
                <b class="grey--text text-decoration-line-through"
                  >${{ retailPrice(find.saleInfo.retailPrice) }}</b
                > -->
              </v-card-title>
              <v-card-actions class="pt-0 pr-0">
                <a
                  class="linkStyle text-caption text-md-body-2"
                  :href="find.saleInfo.buyLink"
                >
                  Buy Now
                </a>
              </v-card-actions>
            </div>
          </v-card>
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
.imgBorder {
  border-radius: 5px;
  margin-top: 0;
  border: 1px solid rgba(63, 62, 62, 0.575);
}

.linkStyle {
  padding: 2px 5px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #1976d2;
}
</style>
