<template>
  <div>
    <v-container class="mx-auto">
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
            <v-col cols="12" md="6" class="px-4">
              <span class="d-block px-4">
                <span v-html="description(bookInfo.volumeInfo)"></span>

                <span class="d-flex py-3">
                  <p>Author:</p>
                  <span
                    v-for="author in authors(bookInfo.volumeInfo)"
                    :key="author.index"
                  >
                    <p class="px-2 primary--text">{{ author }};</p>
                  </span></span
                >
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.id);
    this.get_bookInfo(this.$route.params.id);
  },
  computed: {
    ...mapGetters("bookInfo", ["bookInfo"]),
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
  max-width: 450px;
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
