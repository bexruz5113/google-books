<template>
  <div style="background: #f4f7fd">
    <Navbar />
    <v-container class="mx-auto mt-10 border-2 border-gray">
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
            <v-col
              cols="12"
              md="6"
              class="mx-auto text-center white rounded-xl py-lg-10 py-5"
            >
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
              <div v-if="!bookInfo.volumeInfo">
                <v-sheet
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class="pa-3"
                >
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="text@20"
                  ></v-skeleton-loader>
                </v-sheet>
              </div>
              <div
                v-else
                class="d-block px-4 text-lg-left text-sm-center text-left"
              >
                <!-- <div v-html="description(bookInfo.volumeInfo)"></div> -->
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
                    >Jan. {{ bookInfo.volumeInfo.publishedDate }}
                  </b>
                </div>
                <div class="mb-2">
                  Language:
                  <b class="ml-1">
                    {{ bookInfo.volumeInfo.language }}
                  </b>
                </div>
                <div class="mb-2">
                  Page:
                  <b class="ml-1"> {{ bookInfo.volumeInfo.pageCount }} </b>
                </div>
                <div class="">
                  <a :href="bookInfo.saleInfo.buyLink"
                    >{{ saleability }} reading</a
                  >
                </div>
                <div class="mt-3">
                  <p class="text-h6 mb-1">Overview</p>
                  <p class="range text-body-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit sunt, dolore amet animi ipsa autem voluptate excepturi
                    culpa dolorem vel. Debitis recusandae quis quo, rerum
                    pariatur odit accusantium culpa maxime impedit perspiciatis
                    quaerat ratione et asperiores veritatis magnam! Voluptas
                    molestiae non facilis similique, ea facere ratione officia
                    illo, aut dolorum eaque nam ad iste odit impedit, sint est
                    dignissimos! Ipsa voluptatum illo, obcaecati iste
                    consequuntur ullam placeat. Eligendi molestiae quasi
                    doloribus animi nulla illum quisquam veritatis similique,
                    perspiciatis aut repellendus voluptates non veniam dicta
                    amet dolores, deleniti blanditiis aperiam autem quos. Unde
                    facilis architecto modi rem minima.
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="mt-8 mx-auto">
          <p class="text-md-h4 text-h5 font-weight-black ml-2">
            Book stores
          </p></v-col
        >

        <!-- <v-col class="my-2 mx-auto" cols="10">
          <v-card class="pa-2 mx-2" outlined>
            <v-list-item class="mb-2 d-flex align-start">
              <v-list-item-avatar tile size="100" color="grey"
                ><img
                  src="https://lh5.googleusercontent.com/p/AF1QipNXmYT5KOuFlNrmRiJkDE4XyZE40rlc2PcLsVFI=w408-h280-k-no"
                  alt=""
              /></v-list-item-avatar>
              <v-list-item-content>
                <div class="text-h5 mb-1">Hilol Nashr</div>
                <v-list-item-title class="blue--text my-2 ml-2"
                  >20 000 so'm</v-list-item-title
                >
                <v-list-item-title class="mb-1">
                  <v-icon color="info">mdi-map-marker</v-icon>
                  362-уй, Маннон уйғур кўчаси, Tashkent 100042, Узбекистан
                </v-list-item-title>
                <v-list-item-subtitle class="my-2 ml-1">
                  <v-icon color="info">mdi-phone</v-icon> +998939695113
                </v-list-item-subtitle>

                <v-list-item-action class="ml-0">
                  <v-btn
                    @click="findMap"
                    class="blue lighten-5 blue--text text-caption"
                    small
                    outlined
                    rounded
                  >
                    <v-icon small>mdi-map-outline</v-icon>
                    View on map
                  </v-btn>
                </v-list-item-action>
              </v-list-item-content>
              <div class="d-flex justify-end align-start">
                <p class="range">2.34 km</p>
              </div>
            </v-list-item>
          </v-card>
        </v-col> -->

        <v-col
          class="my-2 mx-auto"
          cols="12"
          v-for="(store, index) in stores"
          :key="index"
        >
          <v-card class="pa-2 mx-2" outlined rounded="lg">
            <div class="d-block">
              <div class="d-flex">
                <div class="mx-sm-2">
                  <img class="storeImage" :src="store.img" alt="" />
                </div>
                <div style="width: 90%">
                  <div>
                    <div class="d-flex justify-space-between align-center">
                      <div>
                        <p
                          class="text-md-h5 text-sm-body-2 font-weight-black mb-1"
                        >
                          {{ store.name }}
                        </p>
                      </div>
                      <div>
                        <p class="font-weight-bold text-caption mr-1 my-1">
                          {{ store.range }} km
                        </p>
                      </div>
                    </div>
                    <div>
                      <p class="blue--text text-md-h6 text-sm-body-2 mb-1">
                        {{ store.cost }} so'm
                      </p>
                    </div>
                  </div>
                  <div
                    style="width: 100%"
                    class="d-sm-flex d-none justify-start mb-2"
                  >
                    <div class="mr-2">
                      <v-btn
                        @click="copy(+998934567393)"
                        class="blue lighten-5 blue--text text-caption"
                        small
                        outlined
                        rounded
                      >
                        <v-icon color="info" small>mdi-phone</v-icon>
                        +998934567393
                      </v-btn>
                    </div>
                    <div class="ml-2">
                      <v-btn
                        @click="findMap"
                        class="blue lighten-5 blue--text text-caption"
                        small
                        outlined
                        rounded
                      >
                        <v-icon small>mdi-map-outline</v-icon>
                        View on map
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="width: 100%"
                class="d-sm-none d-flex justify-start mb-2"
              >
                <div class="mr-2">
                  <v-btn
                    @click="copy(+998934567393)"
                    class="blue lighten-5 blue--text text-caption"
                    small
                    outlined
                    rounded
                  >
                    <v-icon color="info" small>mdi-phone</v-icon>
                    +998934567393
                  </v-btn>
                </div>
                <div class="ml-2">
                  <v-btn
                    @click="findMap"
                    class="blue lighten-5 blue--text text-caption"
                    small
                    outlined
                    rounded
                  >
                    <v-icon small>mdi-map-outline</v-icon>
                    View on map
                  </v-btn>
                </div>
              </div>
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
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  components: { Navbar, Footer },
  data() {
    return {
      stores: [
        {
          img: "https://lh5.googleusercontent.com/p/AF1QipOfiw4mNV2x4cFjBEhT4IM2b1moajkC4dfUp5Tg=w408-h272-k-no",
          name: "Kitob dunyosi",
          range: 2.35,
          cost: 44000,
        },
        {
          img: "https://lh5.googleusercontent.com/p/AF1QipOIcPvrFQvKY2PabJOI52ZDoBeeizMUzFPixFuA=w408-h306-k-no",
          name: "Asaxiy Books",
          range: 3.81,
          cost: 34000,
        },
        {
          img: "https://lh5.googleusercontent.com/p/AF1QipNXmYT5KOuFlNrmRiJkDE4XyZE40rlc2PcLsVFI=w408-h280-k-no",
          name: "Hilol Nashr",
          range: 5.87,
          cost: 28000,
        },
        {
          img: "https://lh5.googleusercontent.com/p/AF1QipNh6hUlC58_McAb9Hfr_XdntWja_WAAVj0ematC=w426-h240-k-no",
          name: "Book.uz",
          range: 4.44,
          cost: 33000,
        },
        {
          img: "https://lh5.googleusercontent.com/p/AF1QipP0HEnZq8lGZzzhl6cl43Xdqx2MX8_wf7P2Of2N=w408-h408-k-no",
          name: "Audio kitoblar",
          range: 1.18,
          cost: 34000,
        },
        {
          img: "https://lh5.googleusercontent.com/p/AF1QipOxMjX4eXIHPaVGeA6YCGUqUCeamVw6rhEdT76P=w408-h408-k-no",
          name: "Macmillan",
          range: 5.87,
          cost: 37000,
        },
      ],
    };
  },
  created() {
    console.log("vaxaxaxaxa=> " + this.$route.params.id);
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
    findMap() {
      this.$router.push("/stores");
    },
    copy(value) {
      navigator.clipboard.writeText(value);
    },
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
  text-decoration: none;
}
.range {
  font-family: "Cera Pro";
}
.storeImage {
  width: 100%;
  max-width: 110px;
  height: 100px;
  padding: 2px;
}
.imgPosition {
  position: relative;
}
.imgBorder {
  width: 100%;
  max-width: 330px;
}
@media only screen and (max-width: 768px) {
  .imgBorder {
    width: 100%;
    max-width: 330px;
  }
  .storeImage {
    width: 100%;
    max-width: 100px;
    height: 85px;
    padding: 2px;
  }
}
@media only screen and (max-width: 425px) {
  .imgBorder {
    width: 100%;
    max-width: 280px;
  }
  .storeImage {
    height: 70px;
    padding: 5px;
  }
}
.textPosition {
  position: absolute;
  right: 0;
  bottom: 100px;
  border-radius: 2px;
  padding: 1px 45px;
  background-color: #2a80d6;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
