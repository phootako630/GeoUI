<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker v-for="(location, index) in locations" :key="index" :options="{ position: location }" />
  </GoogleMap>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

export default defineComponent({
  props: ['locations'],
  components: { GoogleMap, Marker },
  setup(props) {
    const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

    const center = computed(() => {
      return props.locations.length > 0 ? props.locations[props.locations.length - 1] : { lat: 40.689247, lng: -74.044502 };
    });

    return { center, apiKey };
  },
});
</script>
