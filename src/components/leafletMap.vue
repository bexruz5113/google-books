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
          <l-map
            style="height: 460px; z-index: 0"
            :zoom="zoom"
            :center="center"
          >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker
              v-for="(marker, index) in markerLatLng"
              :key="index"
              :lat-lng="marker.position"
            >
              <l-icon
                :icon-size="[38, 38]"
                :icon-url="require('../assets/marker.png')"
              >
              </l-icon>
              <l-popup style="width: 250px">
                <v-card class="mx-auto">
                  <v-img style="width: 100%; height: 150px" :src="marker.img">
                  </v-img>

                  <v-card-title class="font-weight-black">{{
                    marker.title
                  }}</v-card-title>

                  <v-card-subtitle class="black--text py-1">
                    <v-icon color="primary">mdi-map-marker</v-icon> Address:
                    {{ marker.address }}</v-card-subtitle
                  >

                  <v-card-subtitle class="black--text py-1">
                    <v-icon color="primary">mdi-clock</v-icon>
                    Open: {{ marker.open }}
                  </v-card-subtitle>

                  <v-card-subtitle class="black--text py-1"
                    ><v-icon color="primary">mdi-phone</v-icon> Phone: +{{
                      marker.phone
                    }}</v-card-subtitle
                  >
                </v-card>
              </l-popup>
            </l-marker>
          </l-map>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "./navbar.vue";
export default {
  name: "Map",
  components: {
    Navbar,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 12,
      center: [41.30212949222356, 69.24871820381712],
      markerLatLng: [
        {
          title: "iBook.uz",
          img: "https://lh5.googleusercontent.com/p/AF1QipMzPV0Mtg0dyitiwhvoYE3QKB1Yr-JKLfDyvBuq=w408-h544-k-no",
          address: "866V+CG9, Tashkent, Uzbekistan",
          open: "09:00 - 20:00",
          phone: 998933187919,
          position: [41.3110397, 69.243862],
        },
        {
          title: "Asaxiy Books",
          img: "https://lh5.googleusercontent.com/p/AF1QipOIcPvrFQvKY2PabJOI52ZDoBeeizMUzFPixFuA=w408-h306-k-no",
          address: "142/1 Muqimiy ko'chasi, Тошкент, Узбекистан",
          open: "10:00 - 21:00",
          phone: 998900350645,
          position: [41.2931869, 69.222],
        },
        {
          title: "Hilol Nashr",
          img: "https://lh5.googleusercontent.com/p/AF1QipNXmYT5KOuFlNrmRiJkDE4XyZE40rlc2PcLsVFI=w408-h280-k-no",
          address: "Маннон уйғур кўчаси, 362-уй, Tashkent 100042, Узбекистан",
          open: "09:00 - 18:00",
          phone: 998977552370,
          position: [41.32278025693745, 69.20686269041931],
        },
        {
          title: "Book.uz",
          img: "https://lh5.googleusercontent.com/p/AF1QipNh6hUlC58_McAb9Hfr_XdntWja_WAAVj0ematC=w426-h240-k-no",
          address: "60 Qatartol ko'chasi, Тошкент 100096",
          open: "09:30 - 21:00",
          phone: 998939695113,
          position: [41.29230856768433, 69.21148647299401],
        },
        {
          title: "Audio kitoblar",
          img: "https://lh5.googleusercontent.com/p/AF1QipP0HEnZq8lGZzzhl6cl43Xdqx2MX8_wf7P2Of2N=w408-h408-k-no",
          address: "61-44 Buyuk Ipak Yo'li, Тошкент 100077",
          open: "10:30 - 16:00",
          phone: 998983012263,
          position: [41.32646597547426, 69.33293716219583],
        },

        {
          title: "Yuridik adabiyotlar",
          img: "https://lh5.googleusercontent.com/p/AF1QipMV-8iEsoK_yJeURukACGz6mk3l1mjl1WfHcloH=w419-h240-k-no",
          address: "100, 25 Mukimi Street, Tashkent 100115",
          open: "09:00 - 18:00",
          phone: 998995547070,
          position: [41.285715823911325, 69.23269668465599],
        },
        {
          title: "Alif kitoblar do'koni",
          img: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
          address: "353-uy, Mannon Uyg'ur ko'chasi, Тошкент 100042",
          open: "09:00 - 21:00",
          phone: 998939695113,
          position: [41.32163515492699, 69.2025842],
        },
        {
          title: "Factor Books Tashkent",
          img: "https://lh5.googleusercontent.com/p/AF1QipOlcaSmceHe8zsYxD4dGWSwXa3XYAdrcvQXO-9c=w408-h408-k-no",
          address: "улица Новза, Tashkent 100115",
          open: "09:00 - 20:00",
          phone: 998970799511,
          position: [41.29088685851796, 69.223279484656],
        },
        {
          title: "KITOBSAVDO.UZ",
          img: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
          address: "Хадра, Tashkent",
          open: "09:00 - 18:00",
          phone: 998712447575,
          position: [41.32203746448023, 69.250686784656],
        },
        {
          title: "Kitob dunyosi",
          img: "https://lh5.googleusercontent.com/p/AF1QipOfiw4mNV2x4cFjBEhT4IM2b1moajkC4dfUp5Tg=w408-h272-k-no",
          address: "Проспект Мустакиллик д, Тошкент",
          open: "09:00 - 21:45",
          phone: 998712321144,
          position: [41.31493145035253, 69.28882716931199],
        },
        {
          title: "Furqon kitob do'koni",
          img: "https://lh5.googleusercontent.com/p/AF1QipMAky3P9Uky019WjdrmUQtLR9A9D_hNM9AVfLtg=w408-h306-k-no",
          address:
            "Тошкент шаҳар, Яшнаобод тумани, «ИСЛОМ ОТА» масжидининг ичида, Тошкент 100074",
          open: "24 hours a day",
          phone: 998971570114,
          position: [41.27712902603299, 69.3091613],
        },
        {
          title: "SHAMS kitoblar do'koni",
          img: "https://lh5.googleusercontent.com/p/AF1QipPGNLqUYVPXQaL5B2SQMgM02-XYmFjFgfD5OQ_T=w642-h240-k-no",
          address:
            "A uy, Chilonzor tumani, Bunyodkor ko'chasi 1-mavze, 11, Тошкент 100043",
          open: "09:00 - 20:00",
          phone: 998946063540,
          position: [41.293858841107955, 69.22618949995123],
        },
        {
          title: "Taskin kitoblar",
          img: "https://lh5.googleusercontent.com/p/AF1QipOyZTv1hUurHZBvYwd8w25wdbNrTOcIxmHB688z=w408-h725-k-no",
          address: "77H9+FMV, Tashkent, Узбекистан",
          open: "24 hours a day",
          phone: 998997217008,
          position: [41.278339567881524, 69.26879029733705],
        },
        {
          title: "Macmillan",
          img: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
          address: "Osiyo ko'chasi, Тошкент",
          open: "10:00 - 15:00",
          phone: 998712353366,
          position: [41.3272603, 69.2899334],
        },
        {
          title: "Malico Books",
          img: "https://lh5.googleusercontent.com/p/AF1QipOxMjX4eXIHPaVGeA6YCGUqUCeamVw6rhEdT76P=w408-h408-k-no",
          address: "Массив К.Шарк 25",
          open: "08:00 - 22:00",
          phone: 998911331500,
          position: [41.26348554146821, 69.1626377],
        },
        {
          title: "Muslim books kitoblar do'koni",
          img: "https://lh5.googleusercontent.com/p/AF1QipPxljDLrzw5l1cLb5iZ6ulTL_ikHMlNvBnY8x-w=w408-h725-k-no",
          address: "Qamarniso ko'chasi, Тошкент, Узбекистан",
          open: "09:00 - 20:00",
          phone: 998888288880,
          position: [41.35838951783291, 69.1940879],
        },
      ],
    };
  },
};
</script>

<style></style>
