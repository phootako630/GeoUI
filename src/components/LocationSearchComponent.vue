<template>
<div>
  <v-text-field
    v-model='searchText'
    label='Search Location'
    @keyup.enter='searchLocation'/>
  <v-btn @click="searchLocation">Search</v-btn>
</div>
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
