<script setup lang="ts">
import { defineProps } from "vue";

interface BreadcrumbItem {
  title: string;
  active: boolean;

}

const props = defineProps<{
  items: Array<BreadcrumbItem>
}>();

</script>

<template>
  <div class="row px-2 justify-content-between">
    <ol class="breadcrumb">
      <li
        v-for="item in items"
        :key="item.title"
        class="breadcrumb-item"
        :class="{ 'active': item.active }"
      >
        {{ item.title }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
.breadcrumb {
  background-color: transparent;
}
</style>
