<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-text-field
          v-model="searchText"
          label="Search Location"
          append-icon="mdi-magnify"
          filled
          @keyup.enter="searchLocation"
          @click:append="searchLocation"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn color="primary" block @click="searchLocation">Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {onMounted, ref} from 'vue';
export default {
  name: "LocationSearchComponent",
  setup(props, { emit }) {
    const searchText = ref('');
    //const autocompleteInput = ref(null);

    const searchLocation = () => {
      emit('search-location', searchText.value);
    }
    /*onMounted(() => {
      const autocomplete = new google.maps.places.Autocomplete(autocompleteInput.value.$el);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          searchText.value = place.name;
        }
      });
    });*/
    return {
      searchText,
      searchLocation,
      //autocompleteInput
    }
  }
}
</script>

<style scoped>

</style>
