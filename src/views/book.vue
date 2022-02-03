<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center" v-if="!bookInfo">
          <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
        <v-col v-else cols="12" class="d-flex">
          <span class="imgPosition mx-5">
            <img
              class="imgBorder"
              :src="imgLinks(bookInfo.volumeInfo)"
              alt=""
            />
            <p class="textPosition">#book</p>
          </span>
          <span class="d-block">
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
.imgBorder {
  border-radius: 15px;
  border: 1px solid gray;
}
.imgPosition {
  position: relative;
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
