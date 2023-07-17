<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  btnText: string;
  type: "button" | "submit" | "reset" | undefined;
}>();
</script>

<template>
  <button
    class="btn btn-outline-primary"
    :type="type"
    @click="$emit('showModal', true)"
  >
    {{ btnText }}
  </button>
</template>

<style scoped>
button {
  font-size: .894rem;
}
.btn.btn-outline-primary {
  transition: all .3s;
  border: 1px solid #FF4D67;
  color: #FF4D67;
  background-color: #fff;
}
.btn.btn-outline-primary:hover {
  color: #fff;
  background-color: #FF4D67;
}
</style>
