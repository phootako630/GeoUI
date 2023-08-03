<template>
  <div>
    <location-acquisition-component @location-acquired="handleLocationAcquired" />
    <!-- Other components go here -->
  </div>
</template>

<script>
import LocationAcquisitionComponent from '../components/LocationAcquisitionComponent.vue';
import { ref } from 'vue';

export default {
  name: "Home",
  components: {
    LocationAcquisitionComponent
  },
  setup() {
    const location = ref(null);
    const locations = ref([]);

    const handleLocationAcquired = (newLocation) => {
      location.value = newLocation;
      locations.value.push(newLocation)
    }

    return {
      location,
      locations,
      handleLocationAcquired
    }
  }
}

</script>
