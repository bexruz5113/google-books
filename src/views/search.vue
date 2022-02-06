<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col cols="12">
        <v-row class="d-flex align-center my-5">
          <v-col cols="12" sm="6"
            ><p class="text-h3 font-weight-bold">Books</p></v-col
          >
          <v-col cols="12" sm="6">
            <v-toolbar flat color="transparent">
              <v-text-field
                v-model="searchName"
                @input="onChangeSearch"
                append-icon="mdi-magnify"
                label="Search Music"
                single-line
              ></v-text-field>
            </v-toolbar>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="text-center" v-if="!findBook.length">
        <p>What kind of book are we searching... o0</p>
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
                <span class="iconPosition"
                  ><a :href="find.saleInfo.buyLink"
                    ><v-icon x-large color="black"
                      >mdi-tray-arrow-down</v-icon
                    ></a
                  ></span
                >
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

export default {
  name: "Home",
  data() {
    return {
      BookName: "flowers",
      searchName: "",
      findBook: [],
    };
  },

  computed: {
    ...mapGetters("search", ["search"]),
  },
  // watch: {
  //   searchName() {
  //     this.findBook = this.search.filter((find) => {
  //       return find.volumeInfo.title.match(
  //         this.getsearch(this.searchName ? this.searchName : this.BookName)
  //       );
  //     });
  //     // this.getsearch(this.BookName.match(this.searchName));
  //   },
  // },
  methods: {
    ...mapActions("search", ["getsearch"]),
    listAmount(x) {
      return x?.amount || "free";
    },
    retailPrice(y) {
      return y?.amount || "free";
    },
    onChangeSearch: _.debounce(function () {
      console.log("axaxa");
      if (this.searchName) {
        this.getsearch(this.searchName).then(() => {
          this.findBook = this.search;
        });
      }
      this.findBook = [];
    }, 600),
  },
  async mounted() {
    await this.getsearch(this.BookName);
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
