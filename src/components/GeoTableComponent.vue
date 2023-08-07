<template>
  <div>
    <button class="delete-btn" @click="deleteSelected">Delete selected</button>
    <table class="styled-table">
      <thead>
      <tr>
        <th>Select</th>
        <th>Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(location, index) in paginatedLocations" :key="index">
        <td><input type="checkbox" v-model="location.selected" /></td>
        <td>{{ location.name }}</td>
        <td>{{ location.lat }}</td>
        <td>{{ location.lng }}</td>
      </tr>
      </tbody>
    </table>
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="page === 0">Previous</button>
      <button @click="nextPage" :disabled="page >= maxPage">Next</button>
    </div>
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
<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  text-align: left;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}
</style>
