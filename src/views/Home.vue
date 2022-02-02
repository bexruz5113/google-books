<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        v-for="(book, index) in books"
        :key="index"
        class="my-3 px-3 mx-auto"
      >
        <v-card class="white lighten-4">
          <div class="d-flex justify-start">
            <div>
              <img
                class="imgBorder"
                :src="book.volumeInfo.imageLinks.thumbnail"
                alt=""
              />
            </div>
            <div>
              <p class="text-md-body-1 font-weight-black px-2 py-3 mb-0">
                {{ book.volumeInfo.title }}
              </p>

              <p v-for="author of book.volumeInfo.authors" :key="author.id">
                Author:
                <b v-if="!author.length" class="blue--text">Someone</b>
                <b v-else class="blue--text">{{ author }}</b>
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",

  created() {
    this.getbooks();
  },

  computed: {
    ...mapGetters("books", ["books"]),
  },
  methods: {
    ...mapActions("books", ["getbooks"]),
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.imgBorder {
  border: 1px solid gray;
}
</style>
