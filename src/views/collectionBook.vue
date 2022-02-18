<template>
  <div>
    <Navbar />
    <v-container class="mx-auto">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(find, index) in books"
          :key="index"
          class="d-flex justify-start my-3 px-3"
        >
          <v-card class="mx-auto pa-2">
            <v-list-item class="px-0">
              <v-list-item-avatar
                style="width: 100%; max-width: 90px; height: 100px"
                class="imgBorder"
                color="grey"
              >
                <div class="imgPosition">
                  <v-img
                    class="imgBorder"
                    :src="find.volumeInfo.imageLinks.thumbnail"
                    alt=""
                  ></v-img></div
              ></v-list-item-avatar>
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
                <span class="d-flex justify-space-between pt-2">
                  <span
                    ><v-rating
                      v-model="find.volumeInfo.averageRating"
                      background-color="grey"
                      color="orange accent-4"
                      dense
                      half-increments
                      hover
                      size="18"
                    ></v-rating
                  ></span>
                  <span>
                    <router-link :to="`/book/${find.id}`">
                      <p class="text-caption text-md-body-1">More Info</p>
                    </router-link>
                  </span>
                </span>
              </v-list-item-content>
            </v-list-item>
            <div class="d-flex justify-space-between align-center">
              <v-card-title class="pl-0 text-caption text-md-body-1">
                <p class="mb-0 font-weight-black">$12.99-</p>

                <p class="mb-0 grey--text text-decoration-line-through">
                  $10.09
                </p>
                <!-- <b>${{ listAmount(find.saleInfo.listPrice) }}</b>
                <b class="grey--text text-decoration-line-through"
                  >${{ retailPrice(find.saleInfo.retailPrice) }}</b
                > -->
              </v-card-title>
              <v-card-actions class="pt-0 pr-0">
                <a
                  class="linkStyle text-caption text-md-body-1"
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
    // console.log(this.$route.params.title);
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
    console.log(this.$route.name);
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
