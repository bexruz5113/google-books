<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col cols="12"><p class="text-h3 font-weight-bold">Books</p></v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(book, index) in books"
        :key="index"
        class="my-3 px-3 mx-auto"
      >
        <!-- <v-card class="mx-auto" tile>
          <v-row align="end" class="fill-height">
            <v-col cols="12" sm="4">
              <v-avatar
                class="d-flex justify-start"
                color="white"
                size="160"
                tile
              >
                <div class="imgPosition">
                  <img
                    class="imgBorder"
                    :src="book.volumeInfo.imageLinks.thumbnail"
                    alt=""
                  />
                  <span class="iconPosition"
                    ><a :href="book.saleInfo.buyLink"
                      ><v-icon x-large color="black"
                        >mdi-tray-arrow-down</v-icon
                      ></a
                    ></span
                  >
                </div>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="8"
              ><div class="mx-3 mt-4">
                <p class="text-md-body-1 font-weight-black px-2 py-3 mb-0">
                  {{ book.volumeInfo.title }}
                </p>

                <span class="d-flex"
                  ><p
                    v-for="author of book.volumeInfo.authors"
                    :key="author.id"
                  >
                    Author: <b class="blue--text">{{ author }} </b>
                  </p>
                  <p class="pl-3">
                    dec {{ book.volumeInfo.publishedDate }}
                  </p></span
                >
                <p>Lang: {{ book.volumeInfo.language }}</p>
                <p>Page : {{ book.volumeInfo.pageCount }} lorem</p>
                <span
                  ><v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
                  ></v-rating
                ></span></div
            ></v-col>
          </v-row>
        </v-card> -->
        <v-card class="mx-auto">
          <v-list-item class="pl-0">
            <v-list-item-avatar
              style="width: 100%; max-width: 90px; height: 100px"
              class="imgBorder"
              color="grey"
            >
              <div class="imgPosition">
                <img
                  class="imgBorder"
                  :src="book.volumeInfo.imageLinks.thumbnail"
                  alt=""
                />
                <span class="iconPosition"
                  ><a :href="book.saleInfo.buyLink"
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
                v-for="author of book.volumeInfo.authors"
                :key="author.id"
              >
                <b class="blue--text d-flex">{{ author }}, </b>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ book.volumeInfo.title }}
              </v-list-item-subtitle>
              <span class="pt-2">
                <v-rating
                  v-model="book.volumeInfo.averageRating"
                  background-color="grey"
                  color="orange accent-4"
                  dense
                  half-increments
                  hover
                  size="18"
                ></v-rating>
              </span>
            </v-list-item-content>
          </v-list-item>
          <div class="d-flex justify-space-between align-center">
            <v-card-title class="text-sm-body-2">
              <p class="mb-0 font-weight-black">$12.99</p>
              <p class="mb-0 grey--text text-decoration-line-through">$10.09</p>
              <!-- <b>${{ listAmount(book.saleInfo.listPrice.amount) }}</b> -->
              <!-- <b class="grey--text text-decoration-line-through"
                >${{ book.saleInfo.retailPrice }}</b
              > -->
            </v-card-title>
            <v-card-actions class="pt-0">
              <a class="linkStyle" :href="book.saleInfo.buyLink"> Buy Now </a>
            </v-card-actions>
          </div>
        </v-card>
        <!-- <v-card class="divPosition white lighten-4">
          <div class="d-flex justify-start">
            <div class="imgPosition">
              <img
                class="imgBorder"
                :src="book.volumeInfo.imageLinks.thumbnail"
                alt=""
              />
              <span class="iconPosition"
                ><a :href="book.saleInfo.buyLink"
                  ><v-icon x-large color="black">mdi-tray-arrow-down</v-icon></a
                ></span
              >
            </div>
            <div class="mx-3 mt-4">
              <p class="text-md-body-1 font-weight-black px-2 py-3 mb-0">
                {{ book.volumeInfo.title }}
              </p>

              <span class="d-flex"
                ><p v-for="author of book.volumeInfo.authors" :key="author.id">
                  Author: <b class="blue--text">{{ author }} </b>
                </p>
                <p class="pl-3">
                  dec {{ book.volumeInfo.publishedDate }}
                </p></span
              >
              <p>Lang: {{ book.volumeInfo.language }}</p>
              <p>Page : {{ book.volumeInfo.pageCount }} lorem</p>
              <span
                ><v-rating
                  v-model="rating"
                  background-color="white"
                  color="yellow accent-4"
                  dense
                  half-increments
                  hover
                  size="18"
                ></v-rating
              ></span>
            </div>
          </div>
        </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },

  computed: {
    ...mapGetters("books", ["books"]),
  },
  methods: {
    ...mapActions("books", ["getbooks"]),
    // listAmount(amount) {
    //   return amount || "free";
    // },
  },
  async mounted() {
    await this.getbooks();
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
