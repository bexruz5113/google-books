<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>your coordinates:</h1>
          <!-- <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    // this.$getLocation({}).then((coordinates) => {
    //   this.coordinates = coordinates;
    // });
  },
};
</script>

<style></style>
