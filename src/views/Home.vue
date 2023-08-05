<template>
  <div>
    <location-acquisition-component @location-acquired="handleLocationAcquired" />
    <location-search-component @search-location="handleLocationSearched" />
    <!-- Other components go here -->
  </div>
</template>

<script>
import LocationAcquisitionComponent from '../components/LocationAcquisitionComponent.vue';
import LocationSearchComponent from '../components/LocationSearchComponent.vue';
import { ref } from 'vue';
import { fetchLocationCoordinates } from "@/services/api";

export default {
  name: "Home",
  components: {
    LocationAcquisitionComponent,
    LocationSearchComponent,
  },
  setup() {
    const location = ref(null);
    const locations = ref([]);

    const handleLocationAcquired = (newLocation) => {
      location.value = newLocation;
      locations.value.push(newLocation)
    };
    // handle location searched by user
    const handleLocationSearched = async (locationName) => {
      const newLocation = await fetchLocationCoordinates(locationName);
      location.value = newLocation;
      locations.value.push(newLocation);
    };

    return {
      location,
      locations,
      handleLocationAcquired,
      handleLocationSearched
    }
  }
}

</script>
