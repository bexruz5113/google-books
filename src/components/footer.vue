<template>
  <v-row>
    <v-col cols="12">
      <GMap
        ref="gMap"
        language="th"
        :cluster="{ options: { styles: clusterStyle } }"
        :center="{ lat: locations[0].lat, lng: locations[0].lng }"
        :options="{
          fullscreenControl: false,
          styles: mapStyle,
        }"
        :zoom="15"
        @bounds_changed="checkForMarkers"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected,
            draggable: true,
          }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{ maxWidth: 200 }">
            <b>{{ location.name }}</b>
            <br />
            <br />
            <code>
              lat: {{ location.lat }},
              <br />
              lng: {{ location.lng }}
            </code>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 32.7660824,
          lng: 24.9805382,
          name: "Home",
        },
        {
          lat: 33.7628317,
          lng: 25.9818686,
          name: "Work",
        },
      ],
      pins: {
        selected: "data:image/png;base64,iVBORw...",
        notSelected: "data:image/png;base64,iVBORw...",
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  },
  methods: {
    checkForMarkers() {
      this.locations.forEach((location, i) => {
        location.visible = this.$refs.gMap.map
          .getBounds()
          .contains(this.$refs.gMap.markers[i].getPosition());
      });

      this.locationsVisibleOnMap = this.locations
        .filter((l) => l.visible)
        .map((l) => l.name)
        .join(", ");
    },
  },
};
</script>
