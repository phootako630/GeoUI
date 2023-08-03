<template>
  <div>
    <h1>You can hit the button for your Geo-location</h1>
    <v-btn @click="getGeoLocation">Get Geo-location</v-btn>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "LocationAcquisitionComponent",
  setup(props, { emit }) {
    // Get the current location using Browser Geolocation API
    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          emit("location-acquired", position.coords.latitude, position.coords.longitude);
        })
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    return {
      getGeoLocation
    }
  }
}
</script>

<style scoped>

</style>
