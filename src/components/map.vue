<template>
  <div>
    <Navbar />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-left">
          <p class="text-md-h4 text-h5 font-weight-black mb-1">
            Your coordinates:
          </p>
          <p class="mb-1">Latitude: {{ coordinates.lat }}</p>
          <p>Longitude: {{ coordinates.lng }}</p>
        </v-col>
        <v-col cols="12" class="mx-auto">
          <GmapMap
            :center="coordinates"
            :zoom="13"
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
              :draggable="true"
              :title="m.title"
              @click="center = m.position"
            />
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
      coordinates: {
        lat: 0,
        lng: 0,
      },
      markers: [
        {
          title: "book Store",
          position: { lat: 41.350698, lng: 69.291603 },
        },
        {
          title: "book Store",
          position: { lat: 41.3077191, lng: 69.199665 },
        },
        {
          title: "book Store",
          position: { lat: 41.3147904, lng: 69.2867243 },
        },
        {
          title: "book Store",
          position: { lat: 41.2834393, lng: 69.2105532 },
        },
        {
          title: "book Store",
          position: { lat: 41.3226139, lng: 69.2199946 },
        },
        {
          title: "book Store",
          position: { lat: 41.3353898, lng: 69.3714674 },
        },
        {
          title: "book Store",
          position: { lat: 41.3199066, lng: 69.2570735 },
        },
        {
          title: "book Store",
          position: { lat: 41.3216835, lng: 69.1675653 },
        },
        {
          title: "book Store",
          position: { lat: 41.2734906, lng: 69.1474545 },
        },
        {
          title: "book Store",
          position: { lat: 41.2858065, lng: 69.2507301 },
        },
        {
          title: "book Store",
          position: { lat: 41.3110437, lng: 69.2416733 },
        },
        {
          title: "book Store",
          position: { lat: 41.3104555, lng: 69.267881 },
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
