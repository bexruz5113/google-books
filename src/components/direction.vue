<!-- <template>
  <div>
    <gmap-map
      v-show="showMap"
      ref="mapXX"
      :center="coords"
      :zoom="15"
      style="width: 100%; height: 300px"
    >
      <gmap-marker :position="coords"> </gmap-marker>
      <gmap-marker :position="destination"> </gmap-marker>
    </gmap-map>
    <button @click="getDirection">get direction</button>
  </div>
</template>

<script>
export default {
  directionsService: null,
  directionsDisplay: null,
  data() {
    return {
      showMap: true,
      coords: { lat: 41.310618, lng: 69.320704 },
      destination: { lat: 41.2931869, lng: 69.222 }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsService = new google.maps.DirectionsService()
        this.$options.directionsDisplay = new google.maps.DirectionsRenderer()
        this.$options.directionsDisplay.setMap(this.$refs.mapXX.$mapObject)
      })
    })
  },
  methods: {
    getDirection() {
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsDisplay.set('directions', null)
        this.$options.directionsService.route(
          {
            origin: this.coords,
            destination: this.destination,
            travelMode: 'DRIVING'
          },
          (result, status) => {
            if (status === 'OK') {
              this.$options.directionsDisplay.setDirections(result)
            }
          }
        )
      })
    }
  }
}
</script> -->