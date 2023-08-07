<template>
  <div>
    <location-acquisition-component @location-acquired="handleLocationAcquired" />
    <location-search-component @search-location="handleLocationSearched" />
    <map-component :locations="locations" />
    <geo-table-component :locations="locations" @delete-locations="handleDeleteLocations" />
    <!-- Other components go here -->
  </div>
</template>

<script>
import LocationAcquisitionComponent from '../components/LocationAcquisitionComponent.vue';
import LocationSearchComponent from '../components/LocationSearchComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import GeoTableComponent from '../components/GeoTableComponent.vue';
import { ref } from 'vue';
import { fetchLocationCoordinates } from "@/services/api";

export default {
  name: "Home",
  components: {
    LocationAcquisitionComponent,
    LocationSearchComponent,
    MapComponent,
    GeoTableComponent
  },
  setup() {
    const location = ref(null);
    const locations = ref([]);

    const handleLocationAcquired = (newLocation) => {
      newLocation.selected = false;
      location.value = newLocation;
      locations.value.push(newLocation)
    };
    // handle location searched by user
    const handleLocationSearched = async (locationName) => {
      const newLocation = await fetchLocationCoordinates(locationName);
      newLocation.selected = false;
      location.value = newLocation;
      locations.value.push(newLocation);
    };

    const handleDeleteLocations = (newLocations) => {
      console.log('newLocations:', newLocations);
      locations.value = [...newLocations];
      console.log('locations.value:', locations.value);
    };

    return {
      location,
      locations,
      handleLocationAcquired,
      handleLocationSearched,
      handleDeleteLocations
    }
  }
}
</script>
