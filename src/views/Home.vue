<template>
  <v-container fluid>
    <!-- Location Acquisition Component -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="10">
        <location-acquisition-component @location-acquired="handleLocationAcquired" />
      </v-col>
    </v-row>

    <!-- Location Search Component -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="10">
        <location-search-component @search-location="handleLocationSearched" />
      </v-col>
    </v-row>

    <!-- Map Component -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12">
        <map-component :locations="locations" />
      </v-col>
    </v-row>


    <!-- Geo Table Component -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <geo-table-component :locations="locations" @delete-locations="handleDeleteLocations" />
      </v-col>
    </v-row>

    <!-- Other components go here -->

  </v-container>
</template>


<script>
import LocationAcquisitionComponent from '../components/LocationAcquisitionComponent.vue';
import LocationSearchComponent from '../components/LocationSearchComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import GeoTableComponent from '../components/GeoTableComponent.vue';
import { ref, watch } from 'vue';
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
      locations.value = [...locations.value, newLocation];
    };
    // handle location searched by user
    const handleLocationSearched = async (locationName) => {
      const newLocation = await fetchLocationCoordinates(locationName);
      //console.log("Fetched Location:", newLocation);
      newLocation.name = locationName;
      newLocation.selected = false;
      location.value = newLocation;
      locations.value = [...locations.value, newLocation];
      console.log("Locations array length after pushing:", locations.value.length);
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
