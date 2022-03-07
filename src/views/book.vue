<template>
  <div>
    <Navbar />
    <v-container class="mx-auto mt-10">
      <v-row>
        <v-col cols="12" class="text-center" v-if="!bookInfo">
          <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
        <v-col v-else cols="12" class="d-flex">
          <v-row>
            <v-col cols="12" md="6" class="mx-auto text-center">
              <span class="imgPosition mx-5">
                <img
                  class="imgBorder"
                  :src="imgLinks(bookInfo.volumeInfo)"
                  alt=""
                />
                <p class="textPosition">#book</p>
              </span>
            </v-col>
            <v-col cols="12" md="6" class="px-md-4 px-1 mt-sm-1 mt-5">
              <div class="d-block px-4 text-lg-left text-sm-center text-left">
                <div v-html="description(bookInfo.volumeInfo)"></div>
                <div class="mb-2">
                  Title: <b class="ml-1">{{ bookInfo.volumeInfo.title }}</b>
                </div>
                <div
                  class="d-flex justify-lg-start justify-sm-center justify-start mb-2"
                >
                  <div>Author:</div>
                  <div class="ml-1">
                    <div
                      v-for="author in authors(bookInfo.volumeInfo)"
                      :key="author.index"
                    >
                      <b class="mb-1">{{ author }}</b>
                    </div>
                    <div class="grey--text text-caption">
                      <b>{{ bookInfo.volumeInfo.publisher }}</b>
                    </div>
                  </div>
                </div>
                <div class="mb-2">
                  Date:
                  <b class="ml-1"
                    >Jan.{{ bookInfo.volumeInfo.publishedDate }}</b
                  >
                </div>
                <div class="mb-2">
                  Language:
                  <b class="ml-1">{{ bookInfo.volumeInfo.language }}</b>
                </div>
                <div class="mb-2">
                  Page: <b class="ml-1">{{ bookInfo.volumeInfo.pageCount }}</b>
                </div>
                <div class="">
                  <a :href="bookInfo.saleInfo.buyLink"
                    >{{ saleability }} reading</a
                  >
                </div>
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
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Navbar, Footer },
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.id);
    this.get_bookInfo(this.$route.params.id);
  },
  computed: {
    ...mapGetters("bookInfo", ["bookInfo"]),
    saleability() {
      return this.bookInfo.saleInfo.saleability.toLowerCase();
    },
  },
  methods: {
    ...mapActions("bookInfo", ["get_bookInfo"]),
    imgLinks(img) {
      return img?.imageLinks.small || "";
    },
    description(text) {
      return text?.description || "";
    },
    authors(author) {
      return author?.authors || "";
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.imgPosition {
  position: relative;
}
.imgBorder {
  width: 100%;
  max-width: 380px;
  border-radius: 15px;
  border: 1px solid gray;
}

@media only screen and (max-width: 768px) {
  .imgBorder {
    width: 100%;
    max-width: 330px;
  }
}
@media only screen and (max-width: 425px) {
  .imgBorder {
    width: 100%;
    max-width: 275px;
  }
}
.textPosition {
  position: absolute;
  right: 0;
  bottom: 55px;
  border-radius: 1.5px;
  padding: 1px 45px;
  background-color: #1976d2;
  color: white;
}
</style>
