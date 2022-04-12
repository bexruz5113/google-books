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
                  src="https://lh5.googleusercontent.com/p/AF1QipMzPV0Mtg0dyitiwhvoYE3QKB1Yr-JKLfDyvBuq=w408-h544-k-no"
                  alt=""
                />
                <p class="textPosition">#store</p>
              </span>
            </v-col>
            <v-col cols="12" md="6" class="px-md-4 px-1 mt-sm-1 mt-5">
              <div class="d-block px-4 text-lg-left text-sm-center text-left">
                <div class="mb-2"><p class="ml-1 text-h5">iBook.uz</p></div>
                <div class="mb-2">
                  <v-icon color="black" medium>mdi-map-marker</v-icon> 142/1
                  Muqimiy ko'chasi, Тошкент, Узбекистан
                </div>
                <div class="mb-2">
                  <v-icon color="black" medium>mdi-clock</v-icon>
                  09:00 - 18:00
                </div>
                <div class="mb-2">
                  <v-icon color="black" medium>mdi-phone</v-icon>
                  +998934567393
                </div>
                <div class="d-flex align-center">
                  <v-icon class="mr-2" color="black" medium>mdi-web</v-icon>
                  <a href="http://asaxiy.uz/">iBook.uz</a>
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

        <v-col cols="12" class="my-md-10 my-5">
          <p class="text-md-h5 text-h6 font-weight-black ml-2">
            Recommended books
          </p>
          <VueSlickCarousel v-bind="settings">
            <div v-for="(bookRec, index) in recommend" :key="index">
              <div class="text-center">
                <div class="pa-0">
                  <v-list-item-avatar class="frameStyle" size="134">
                    <img class="imgBorder" :src="bookRec.bookImage" />
                  </v-list-item-avatar>
                </div>
                <div class="py-0">
                  <v-list-item color="black">
                    <v-list-item-content>
                      <v-list-item-title
                        style="white-space: normal"
                        class="text-md-body-1"
                      >
                        {{ bookRec.bookName }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
            </div>
            <template #prevArrow="">
              <v-btn fab small class="mx-2" color="primary">
                <v-icon>mdi-arrow-left-bold</v-icon>
              </v-btn>
            </template>
            <template #nextArrow="">
              <v-btn fab small class="mx-2" color="primary">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </v-btn>
            </template>
          </VueSlickCarousel>
        </v-col>
        <v-col cols="12" class="mt-8 mx-auto">
          <p class="text-md-h5 text-h6 font-weight-black ml-2">
            Book store location
          </p></v-col
        >

        <v-col cols="12" class="mx-auto">
          <gmap-map :center="center" :zoom="zoom" ref="map">
            <gmap-marker
              :key="index"
              v-for="(location, index) in locations"
              :position="{ lat: location.lat, lng: location.lng }"
              :clickable="true"
              @click="openInfoWindow(location)"
            />
            <gmap-info-window
              style="height: 500px"
              v-if="selectedLocation !== null"
              :position="{
                lat: selectedLocation.lat,
                lng: selectedLocation.lng,
              }"
              :opened="infoBoxOpen"
              @closeclick="infoBoxOpen = false"
            >
              <div class="infoWindow" style="width: 250px">
                <img class="infoImage" :src="selectedLocation.img" alt="" />
                <h3 id="infoWindow-location">
                  {{ selectedLocation.address }}
                </h3>
                <br />
                <div class="d-flex align-center">
                  <v-icon color="primary">mdi-map-marker</v-icon>
                  <h4>Address:{{ selectedLocation.address }}</h4>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="primary">mdi-clock</v-icon>
                  <h4>Open:{{ selectedLocation.open }}</h4>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="primary">mdi-phone</v-icon>
                  <h4>Phone: +{{ selectedLocation.phone }}</h4>
                </div>
              </div>
            </gmap-info-window>
          </gmap-map>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    Navbar,
    Footer,
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 664,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      recommend: [
        {
          bookImage:
            "http://books.google.com/books/content?id=ktkDAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70xgph7PAlTx-YUMczr8jZa0ajei-lEA-5lg8iLehH4DP_3f7jmuqfK3ECBjSE1hU5m6PsCC_fyfkfpqQ4upFv_20NW-V2-6yVUO1Io0dwbzNqP8cOsDYDoYsgehdJmVwi9FFSO&source=gbs_api",
          bookName: "Flowers and their associations",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=oLMRAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          bookName: "Sunset",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=RxAJAAAAIAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70jYBsQv0sOFRmRbgNVTgTgFKi-dQL7-92-j-v26YRQ1Q9sZESZBwBcEKTSeSVfLcyzQVTr7BNDy_te3xELBaZ176IksqGNeVhdVxTvZxm_hWa_tR7Gl-zjsTNuzfzHi8S6mNHV&source=gbs_api",
          bookName: "Adventures of Sherlock Holmes",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=NtgKAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          bookName: "Император Александр Первий",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=HxKaHeAG0GoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          bookName: "Education in the state of São Paulo",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=OBlKAAAAYAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72zXHlTw4sDfKI9z8peMuFHUOWwqndcBUJdAWkSeJlSTPHjDMgRzEek-iTJrTm9f1ksZUh0B68cohql1QV9qpVrnDy59yRkLnnMIM0-8nFzd1c_MqQyj3TbutNOXcOfirigpXwN&source=gbs_api",
          bookName: "A Little Princess",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=KUsBAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70jtyxIcauYRppFK2o4ZvpAIG7zRaokFGsQpzxUv8Q8NLcaIV1_BqTCiSjosc6BGviJdHtDCuJdINxmZ5kj58mjqv9qPd-61lcKRrfQoU-nOjOo3bMBPH3hQFbL7iaXyhwrFRaN&source=gbs_api",
          bookName: "Early Days of English Princes",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=ktkDAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70xgph7PAlTx-YUMczr8jZa0ajei-lEA-5lg8iLehH4DP_3f7jmuqfK3ECBjSE1hU5m6PsCC_fyfkfpqQ4upFv_20NW-V2-6yVUO1Io0dwbzNqP8cOsDYDoYsgehdJmVwi9FFSO&source=gbs_api",
          bookName: "Flowers and their associations",
        },

        {
          bookImage:
            "http://books.google.com/books/content?id=TtqvdoK7bfIC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE714tjoBbWea2vHMsujoF4ovBePb6h0CCL30Y_tae5FvCKgTrW_D_jEXebECz3S4P1XPyLDCJW_lilMnim0pmU7w2Na03H8iqHEVdShqdMSOt8vVc_Q3KgvOGfl2A7xntxubQHax&source=gbs_api",
          bookName: "CRREL Monograph",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=jHkEAAAAMAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72ddOoi2BSvvC0P3bB7JNlfRO8jIPfNmw8sB_Ww2Iwc_eQ86BFnOLRoEdxlDAFYDaTcgXd4P6D1aGyaHTP7OwpqsqwnC6vi9UHitLTuQwOaR2e_OofrryYNgUG7D483VcRwXPsT&source=gbs_api",
          bookName: "National Directory of Minority Manufacturers",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=34tjAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          bookName: "The Works of George Byron",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=VdscAAAAMAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE718aSYGCFJMQjgU9thz_n6bULxSwslTsnOVSa_FlFzBzSfjtPko7bvwfIQFc0a_OLyvNdglHcTpYjYgxMERQZ0wO9ngnLFxUdQMTIFVjmK6OXT6bppCWQL-EPlyUx4Jnx5QW4N0&source=gbs_api",
          bookName: "The Works of Samuel Taylor Coleridge",
        },
        {
          bookImage:
            "http://books.google.com/books/content?id=ktkDAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70xgph7PAlTx-YUMczr8jZa0ajei-lEA-5lg8iLehH4DP_3f7jmuqfK3ECBjSE1hU5m6PsCC_fyfkfpqQ4upFv_20NW-V2-6yVUO1Io0dwbzNqP8cOsDYDoYsgehdJmVwi9FFSO&source=gbs_api",
          bookName: "Flowers and their associations",
        },
      ],
      zoom: 12,
      center: { lat: 41.30212949222356, lng: 69.24871820381712 },
      // center: [41.30212949222356, 69.24871820381712],
      selectedLocation: null,
      infoBoxOpen: false,
      locations: [
        {
          title: "iBook.uz",
          img: "https://lh5.googleusercontent.com/p/AF1QipMzPV0Mtg0dyitiwhvoYE3QKB1Yr-JKLfDyvBuq=w408-h544-k-no",
          address: "866V+CG9, Tashkent, Uzbekistan",
          open: "09:00 - 20:00",
          phone: 998933187919,
          lat: 41.3110397,
          lng: 69.243862,
          // position: [41.3110397, 69.243862],
        },
      ],
    };
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
    openInfoWindow(location) {
      console.log(location);
      this.selectedLocation = location;
      this.infoBoxOpen = true;
    },
    closeInfoWindow() {
      this.infoBoxOpen = false;
    },
    findMap() {
      this.$router.push("/store-map");
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
.slick-slider {
  display: flex;
  align-items: center;
  justify-self: center;
}
.range {
  font-family: "Cera Pro";
}
.storeImage {
  width: 100%;
  max-width: 110px;
  height: 110px;
  padding: 8px;
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
    max-width: 80px;
    height: 80px;
    padding: 2px;
  }
}
@media only screen and (max-width: 425px) {
  .imgBorder {
    width: 100%;
    max-width: 280px;
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
.frameStyle {
  width: 100%;
  height: 170px;
  max-width: 134px;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0px;
}
.imgBorder {
  background: rgba(197, 191, 191, 0.575);
  padding: 20px 25px;
  margin: 0 auto;
}
.ratingInfo {
  display: flex;
  width: 50px;
  position: relative;
  font-size: 12px;
  font-weight: bold;
  right: 50px;
  bottom: -30px;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  color: rgb(28, 28, 121);
  font-family: sans-serif;
}
</style>
