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
import { ref } from 'vue';
export default {
  name: "LocationSearchComponent",
  setup(props, { emit }) {
    const searchText = ref('');
    const searchLocation = () => {
      emit('search-location', searchText.value);
    }
    return {
      searchText,
      searchLocation
    }
  }
}
</script>

<style scoped>

</style>
