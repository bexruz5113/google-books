<template>
  <div>
    <v-container class="mx-auto">
      <v-row>
        <v-col cols="12">
          <v-row class="d-block my-5">
            <!-- <v-col cols="12" sm="6"
              ><p class="text-h2 text-center my-md-0 my-5 font-weight-bold">
                <b class="blue--text">G</b>
                <b class="red--text">o</b>
                <b class="orange--text">o</b>
                <b class="blue--text">g</b>
                <b class="green--text">l</b>
                <b class="red--text">e </b>

                <b class="blue--text"> B</b>
                <b class="red--text">o</b>
                <b class="orange--text">o</b>
                <b class="blue--text">k</b>
                <b class="green--text">s</b>
              </p></v-col
            > -->
            <v-col cols="12" md="4" class="mb-10 mt-5 mx-auto text-center">
              <router-link to="/">
                <v-img
                  style="width: 100%; max-width: 500px"
                  src="../assets/logo1.png"
                ></v-img>
              </router-link>
            </v-col>
            <v-col cols="12" md="6" class="my-md-0 mx-auto my-5">
              <v-toolbar class="mx-5" flat color="transparent">
                <v-text-field
                  v-model="searchName"
                  @input="onChangeSearch"
                  append-icon="mdi-magnify"
                  label="Search books"
                  single-line
                ></v-text-field>
              </v-toolbar>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="text-center mt-10" v-if="!findBook.length">
          <div class="mx-auto">
            <img
              style="width: 100%; max-width: 250px"
              src="../assets/book.svg"
              alt=""
            />
          </div>
        </v-col>
        <v-col
          v-else
          cols="12"
          sm="6"
          md="4"
          v-for="(find, index) in findBook"
          :key="index"
          class="d-flex justify-start my-3 px-3"
        >
          <v-card class="mx-auto pa-2">
            <v-list-item class="pl-0">
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
                  ></v-img>
                  <!-- <span class="iconPosition"
                    ><a :href="find.saleInfo.buyLink"
                      ><v-icon x-large color="black"
                        >mdi-tray-arrow-down</v-icon
                      ></a
                    ></span
                  > -->
                </div></v-list-item-avatar
              >
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
                      More Info
                    </router-link>
                  </span>
                </span>
              </v-list-item-content>
            </v-list-item>
            <div class="d-flex justify-space-between align-center">
              <v-card-title class="text-sm-body-2">
                <b>${{ listAmount(find.saleInfo.listPrice) }}</b>
                <b class="grey--text text-decoration-line-through"
                  >${{ retailPrice(find.saleInfo.retailPrice) }}</b
                >
              </v-card-title>
              <v-card-actions class="pt-0">
                <a class="linkStyle" :href="find.saleInfo.buyLink"> Buy Now </a>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      searchName: "",
      findBook: [],
    };
  },

  computed: {
    ...mapGetters("searchBook", ["searchBook"]),
  },
  // watch: {
  //   page() {
  //     this.getSearchBook({
  //       pagination: this.page,
  //       payload: this.searchName,
  //     });
  //   },
  // },
  methods: {
    ...mapActions("searchBook", ["getSearchBook"]),
    listAmount(x) {
      return x?.amount || "free";
    },
    retailPrice(y) {
      return y?.amount || "free";
    },
    onChangeSearch: _.debounce(function () {
      if (this.searchName) {
        this.getSearchBook(this.searchName).then(() => {
          this.findBook = this.searchBook;
        });
      }
      this.findBook = [];
    }, 700),
  },
  async mounted() {
    await this.getSearchBook();
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
