<template>
  <div>
    <Navbar />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-left">
          <div class="d-flex justify-start items-center mt-5">
            <div>
              <img
                src="https://img.icons8.com/color/32/000000/google-maps-new.png"
              />
            </div>
            <div>
              <p class="text-md-h4 text-h5 font-weight-black mb-1">
                All the bookstores location
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="mx-auto">
          <div>
            <gmap-map :center="center" :zoom="zoom" ref="map">
              <gmap-marker
                :key="index"
                v-for="(location, index) in locations"
                :position="{ lat: location.lat, lng: location.lng }"
                :clickable="true"
                @click="openInfoWindow(location)"
              />
              <gmap-info-window
                v-if="selectedLocation !== null"
                :position="{
                  lat: selectedLocation.lat,
                  lng: selectedLocation.lng,
                }"
                :opened="infoBoxOpen"
                @closeclick="infoBoxOpen = false"
              >
                <div class="infoWindow">
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
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
  components: {
    Navbar,
  },
  data: () => ({
    zoom: 13,
    center: { lat: 41.3110397, lng: 69.243862 },
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
      {
        title: "Asaxiy Books",
        img: "https://lh5.googleusercontent.com/p/AF1QipOIcPvrFQvKY2PabJOI52ZDoBeeizMUzFPixFuA=w408-h306-k-no",
        address: "142/1 Muqimiy ko'chasi, Тошкент, Узбекистан",
        open: "10:00 - 21:00",
        phone: 998900350645,
        lat: 41.2931869,
        lng: 69.222,
        // position: [41.2931869, 69.222],
      },
      {
        title: "Hilol Nashr",
        img: "https://lh5.googleusercontent.com/p/AF1QipNXmYT5KOuFlNrmRiJkDE4XyZE40rlc2PcLsVFI=w408-h280-k-no",
        address: "Маннон уйғур кўчаси, 362-уй, Tashkent 100042, Узбекистан",
        open: "09:00 - 18:00",
        phone: 998977552370,
        lat: 41.32278025693745,
        lng: 69.20686269041931,
        // position: [41.32278025693745, 69.20686269041931],
      },
      {
        title: "Book.uz",
        img: "https://lh5.googleusercontent.com/p/AF1QipNh6hUlC58_McAb9Hfr_XdntWja_WAAVj0ematC=w426-h240-k-no",
        address: "60 Qatartol ko'chasi, Тошкент 100096",
        open: "09:30 - 21:00",
        phone: 998939695113,
        lat: 41.29230856768433,
        lng: 69.21148647299401,
        // position: [41.29230856768433, 69.21148647299401],
      },
      {
        title: "Audio kitoblar",
        img: "https://lh5.googleusercontent.com/p/AF1QipP0HEnZq8lGZzzhl6cl43Xdqx2MX8_wf7P2Of2N=w408-h408-k-no",
        address: "61-44 Buyuk Ipak Yo'li, Тошкент 100077",
        open: "10:30 - 16:00",
        phone: 998983012263,
        lat: 41.32646597547426,
        lng: 69.33293716219583,
        // position: [41.32646597547426, 69.33293716219583],
      },

      {
        title: "Yuridik adabiyotlar",
        img: "https://lh5.googleusercontent.com/p/AF1QipMV-8iEsoK_yJeURukACGz6mk3l1mjl1WfHcloH=w419-h240-k-no",
        address: "100, 25 Mukimi Street, Tashkent 100115",
        open: "09:00 - 18:00",
        phone: 998995547070,
        lat: 41.285715823911325,
        lng: 69.23269668465599,
        // position: [41.285715823911325, 69.23269668465599],
      },
      {
        title: "Alif kitoblar do'koni",
        img: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
        address: "353-uy, Mannon Uyg'ur ko'chasi, Тошкент 100042",
        open: "09:00 - 21:00",
        phone: 998939695113,
        lat: 41.32163515492699,
        lng: 69.2025842,
        // position: [41.32163515492699, 69.2025842],
      },
      {
        title: "Factor Books Tashkent",
        img: "https://lh5.googleusercontent.com/p/AF1QipOlcaSmceHe8zsYxD4dGWSwXa3XYAdrcvQXO-9c=w408-h408-k-no",
        address: "улица Новза, Tashkent 100115",
        open: "09:00 - 20:00",
        phone: 998970799511,
        lat: 41.29088685851796,
        lng: 69.223279484656,
        // position: [41.29088685851796, 69.223279484656],
      },
      {
        title: "KITOBSAVDO.UZ",
        img: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
        address: "Хадра, Tashkent",
        open: "09:00 - 18:00",
        phone: 998712447575,
        lat: 41.32203746448023,
        lng: 69.250686784656,
        // position: [41.32203746448023, 69.250686784656],
      },
      {
        title: "Kitob dunyosi",
        img: "https://lh5.googleusercontent.com/p/AF1QipOfiw4mNV2x4cFjBEhT4IM2b1moajkC4dfUp5Tg=w408-h272-k-no",
        address: "Проспект Мустакиллик д, Тошкент",
        open: "09:00 - 21:45",
        phone: 998712321144,
        lat: 41.31493145035253,
        lng: 69.28882716931199,
        // position: [41.31493145035253, 69.28882716931199],
      },
      {
        title: "Furqon kitob do'koni",
        img: "https://lh5.googleusercontent.com/p/AF1QipMAky3P9Uky019WjdrmUQtLR9A9D_hNM9AVfLtg=w408-h306-k-no",
        address:
          "Тошкент шаҳар, Яшнаобод тумани, «ИСЛОМ ОТА» масжидининг ичида, Тошкент 100074",
        open: "24 hours a day",
        phone: 998971570114,
        lat: 41.27712902603299,
        lng: 69.3091613,
        // position: [41.27712902603299, 69.3091613],
      },
      {
        title: "SHAMS kitoblar do'koni",
        img: "https://lh5.googleusercontent.com/p/AF1QipPGNLqUYVPXQaL5B2SQMgM02-XYmFjFgfD5OQ_T=w642-h240-k-no",
        address:
          "A uy, Chilonzor tumani, Bunyodkor ko'chasi 1-mavze, 11, Тошкент 100043",
        open: "09:00 - 20:00",
        phone: 998946063540,
        lat: 41.293858841107955,
        lng: 69.22618949995123,
        // position: [41.293858841107955, 69.22618949995123],
      },
      {
        title: "Taskin kitoblar",
        img: "https://lh5.googleusercontent.com/p/AF1QipOyZTv1hUurHZBvYwd8w25wdbNrTOcIxmHB688z=w408-h725-k-no",
        address: "77H9+FMV, Tashkent, Узбекистан",
        open: "24 hours a day",
        phone: 998997217008,
        lat: 41.278339567881524,
        lng: 69.26879029733705,
        // position: [41.278339567881524, 69.26879029733705],
      },
      {
        title: "Macmillan",
        img: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
        address: "Osiyo ko'chasi, Тошкент",
        open: "10:00 - 15:00",
        phone: 998712353366,
        lat: 41.3272603,
        lng: 69.2899334,
        // position: [41.3272603, 69.2899334],
      },
      {
        title: "Malico Books",
        img: "https://lh5.googleusercontent.com/p/AF1QipOxMjX4eXIHPaVGeA6YCGUqUCeamVw6rhEdT76P=w408-h408-k-no",
        address: "Массив К.Шарк 25",
        open: "08:00 - 22:00",
        phone: 998911331500,
        lat: 41.26348554146821,
        lng: 69.1626377,
        // position: [41.26348554146821, 69.1626377],
      },
      {
        title: "Muslim books kitoblar do'koni",
        img: "https://lh5.googleusercontent.com/p/AF1QipPxljDLrzw5l1cLb5iZ6ulTL_ikHMlNvBnY8x-w=w408-h725-k-no",
        address: "Qamarniso ko'chasi, Тошкент, Узбекистан",
        open: "09:00 - 20:00",
        phone: 998888288880,
        lat: 41.35838951783291,
        lng: 69.1940879,
        // position: [41.35838951783291, 69.1940879],
      },
    ],
  }),
  methods: {
    openInfoWindow(location) {
      console.log(location);
      this.selectedLocation = location;
      this.infoBoxOpen = true;
    },
    closeInfoWindow() {
      this.infoBoxOpen = false;
    },
  },
};
</script>
<style>
.vue-map-container {
  height: 480px;
}
.infoWindow {
  width: 100%;
  height: 320px;
}

.infoImage {
  max-width: 300px;
  width: 100%;
  height: 200px;
}
</style>
