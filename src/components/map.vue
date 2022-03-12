<template>
  <div>
    <Navbar />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-left">
          <p class="text-md-h4 text-h5 font-weight-black mb-1">
            Your coordinates:
            <img
              src="https://img.icons8.com/color/32/000000/google-maps-new.png"
            />
          </p>
          <p class="mb-1">Latitude: {{ coordinates.lat }}</p>
          <p>Longitude: {{ coordinates.lng }}</p>
        </v-col>
        <v-col cols="12" class="mx-auto">
          <GmapMap
            :center="coordinates"
            :zoom="12"
            map-type-id="roadmap"
            style="
              width: 100%;
              max-width: 1280px;
              height: 480px;
              margin: 0 auto;
            "
            ref="mapRef"
          >
            <GmapMarker
              style="padding: 50px; color: blue"
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :title="m.title"
              :icon="{
                url: require('../assets/marker.png'),
                scaledSize: { height: 46, width: 46 },
                labelOrigin: { x: 0, y: 50 },
              }"
              :label="{
                text: m.title,
                color: 'white',
                fontSize: '12px',
                fontFamily: 'din_round_otbold',
              }"
              @click="center = m.position"
            >
              <GmapInfoWindow
                :opened="infoBoxOpen"
                @closeclick="infoBoxOpen = true"
                :options="{
                  pixelOffset: { width: 0, height: 0 },
                  content: 'salom',
                }"
              ></GmapInfoWindow>
            </GmapMarker>
          </GmapMap>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
  name: "Map",
  components: {
    Navbar,
  },
  data() {
    return {
      map: null,
      infoBoxOpen: false,
      coordinates: {
        lat: 0,
        lng: 0,
      },
      markers: [
        {
          title: "iBook.uz",
          position: { lat: 41.3122829, lng: 69.189708 },
        },
        {
          title: "Asaxiy Books",
          position: { lat: 41.2919162, lng: 69.2211632 },
        },
        {
          title: "Hilol Nashr",
          position: { lat: 41.3211484, lng: 69.1956506 },
        },
        {
          title: "Book.uz",
          position: { lat: 41.3146907, lng: 69.1897077 },
        },
        {
          title: "Audio kitoblar",
          position: { lat: 41.3113936, lng: 69.2477858 },
        },

        {
          title: "Yuridik adabiyotlar",
          position: { lat: 41.2856997, lng: 69.2327396 },
        },
        {
          title: "Alif kitoblar do'koni",
          position: { lat: 41.3216835, lng: 69.1675653 },
        },
        {
          title: "Factor Books Tashkent",
          position: { lat: 41.290774, lng: 69.2233224 },
        },
        {
          title: "KITOBSAVDO.UZ",
          position: { lat: 41.3218602, lng: 69.2507297 },
        },
        {
          title: "Kitob dunyosi",
          position: { lat: 41.3147864, lng: 69.288913 },
        },
        {
          title: "Furqon kitob do'koni",
          position: { lat: 41.2771129, lng: 69.3091613 },
        },
        {
          title: "ShAMS kitoblar do'koni",
          position: { lat: 41.2936815, lng: 69.2261895 },
        },
        {
          title: "Taskin kitoblar",
          position: { lat: 41.2783154, lng: 69.2687903 },
        },
        {
          title: "Macmillan",
          position: { lat: 41.3272603, lng: 69.2899334 },
        },
        {
          title: "Malico Books",
          position: { lat: 41.2632436, lng: 69.1626377 },
        },
        {
          title: "Muslim books kitoblar do'koni",
          position: { lat: 41.3583412, lng: 69.1940879 },
        },
      ],
    };
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 41.3106176, lng: 69.2224 });
    });
  },
};
</script>

<style></style>
