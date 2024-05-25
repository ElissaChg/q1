<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const uBikeStop = ref(null)
const route = useRoute()
const id = route.params.id * 1

fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
  .then((res) => res.text())
  .then((data) => {
    uBikeStop.value = JSON.parse(data)[id]
  })
</script>

<template>
  <div>
    <!-- 問題：我希望 /admin/bike/:id 也渲染現在這一頁 -->
    <h1>問題：我希望 /admin/bike/:id 也渲染現在這一頁</h1>
    <h2>場站名稱：{{ uBikeStop.sna }}</h2>
    <ul>
      <li>場站區域：{{ uBikeStop.sarea }}</li>
      <li>目前可用車輛：{{ uBikeStop.available_rent_bikes }}</li>
      <li>總停車格：{{ uBikeStop.total }}</li>
      <li>資料更新時間：{{ uBikeStop.mday }}</li>
    </ul>
  </div>
</template>
