<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  btnText: string;
  type: "button" | "submit" | "reset" | undefined;
  tag: string;
}>();
</script>

<template>
  <button
    :class="`btn btn-${tag}`"
    :type="type"
    @click="$emit('showModal', true)"
  >
    {{ btnText }}
  </button>
</template>
