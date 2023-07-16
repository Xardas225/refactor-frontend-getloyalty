<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  btnText: string;
  type: "button" | "submit" | "reset" | undefined;
  tag: string;
}>();
</script>

<template>
  <button class="btn btn-default" :type="type">
    {{ btnText }}
  </button>
</template>

<style scoped>
button {
  font-size: 0.894rem;
}
.btn.btn-default {
  transition: all 0.3s;
  border-color: rgba(24, 28, 33, 0.1);
  background: rgba(0, 0, 0, 0);
  color: #4e5155;
}
.btn.btn-default:hover {
  border-color: rgba(24, 28, 33, 0.1);
  background: rgba(24, 28, 33, 0.06);
  color: #4e5155;
}
</style>
