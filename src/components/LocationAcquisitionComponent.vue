<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" align="center">
        <h1>You can hit the button for your Geo-location</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4" align="center">
        <v-btn color="primary" dark large @click="getGeoLocation">
          Get Geo-location
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field
          label="Your Location"
          v-model="location"
          readonly
          outlined
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { ref } from 'vue';


export default {
  name: "LocationAcquisitionComponent",
  setup(props, { emit }) {
    const location = ref('');

    // Get the current location using Browser Geolocation API
    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            selected: false
          };
          emit("location-acquired", newLocation);

          // After getting the coordinates, get the address
          getAddressFrom(position.coords.latitude, position.coords.longitude);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    const getAddressFrom = (latitude, longitude) => {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_APP_GOOGLE_API_KEY}`;
      axios.get(url)
        .then((response) => {
          location.value = response.data.results[0].formatted_address;
          console.log(response.data.results[0].formatted_address);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    return {
      getGeoLocation,
      location
    }
  }
}
</script>

<style scoped>

</style>
