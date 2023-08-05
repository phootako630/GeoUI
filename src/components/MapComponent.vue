<template>
  <div style="height: 500px; width: 100%;">
    <GMap
      :zoom="10"
      :center="center"
      :options="{fullscreenControl: false, streetViewControl: false}"
      @google-map-ready="handleMapReady"
    >
      <GMapMarker
        v-for="(location, index) in locations"
        :key="index"
        :position="location"
        :options="{ draggable: false }"
      />
    </GMap>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  components: {
    GoogleMap,
    Marker,
  },
  props: {
    locations: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const center = ref({ lat: 0, lng: 0 });
    const map = ref(null);

    const handleMapReady = (mapInstance) => {
      map.value = mapInstance;
      if (props.locations.length > 0) {
        center.value = props.locations[props.locations.length - 1];
      }
    };

    onMounted(() => {
      if (props.locations.length > 0) {
        center.value = props.locations[props.locations.length - 1];
      }
    });

    return {
      center,
      handleMapReady
    };
  },
};
</script>
