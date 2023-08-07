<template>
  <div>
    <button @click="deleteSelected">Delete selected</button>
    <table>
      <thead>
      <tr>
        <th>Select</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(location, index) in paginatedLocations" :key="index">
        <td><input type="checkbox" v-model="location.selected" /></td>
        <td>{{ location.lat }}</td>
        <td>{{ location.lng }}</td>
      </tr>
      </tbody>
    </table>
    <button @click="prevPage" :disabled="page === 0">Previous</button>
    <button @click="nextPage" :disabled="page >= maxPage">Next</button>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: ['locations'],
  emits: ['delete-selected'],
  setup(props, { emit }) {
    const page = ref(0);
    const pageSize = 10;
    const maxPage = computed(() => Math.ceil(props.locations.length / pageSize) - 1);

    const paginatedLocations = computed(() => {
      return props.locations.slice(page.value * pageSize, (page.value + 1) * pageSize);
    });

    const nextPage = () => {
      if (page.value < maxPage.value) page.value++;
    };

    const prevPage = () => {
      if (page.value > 0) page.value--;
    };

    const deleteSelected = () => {
      const newLocations = props.locations.filter(location => !location.selected);
      console.log('newLocations:', newLocations);
      emit('delete-locations', [...newLocations]);
    };

    return { paginatedLocations, nextPage, prevPage, deleteSelected, page, maxPage };
  },
});
</script>
