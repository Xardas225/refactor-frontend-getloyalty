<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  value: String
})

</script>

<template>
  <div class="progress">
    <div class="progress-bar" :style="{'width': `${value}%`}"></div>
  </div>
</template>

<style scoped>
.progress {
  height: 4px;
}
.progress-bar {
  background-color: #FF4D67;
  color: #fff;
}

</style>
