<script setup>
import { ref } from 'vue'

const uBikeStops = ref([])

fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
  .then((res) => res.text())
  .then((data) => {
    uBikeStops.value = JSON.parse(data)
  })
</script>

<template>
  <div>
    <h1>YouBike 臺北市公共自行車即時資訊</h1>
    <ul>
      <li v-for="(bike, index) in uBikeStops" :key="bike.sno">
        <RouterLink :to="{ name: 'bike-detail', params: { id: index } }">{{ bike.sna }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
