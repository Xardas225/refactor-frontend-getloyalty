<script setup lang="ts">
import { defineProps } from "vue";

interface NavBarSectionInterface {
  title: string,
  active: boolean,
  component: string
}

const props = defineProps<{
  items: Array<NavBarSectionInterface>
}>();
</script>

<template>
  <nav class="navbar navbar-expand-xl bg-light my-4">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-sections"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-sections">
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab">Основные данные</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #f1f1f2 !important;
  color: #a3a4a6;
}
.nav-link {
  color: #a3a4a6;
  cursor: pointer;
}
.nav-link.active,
.nav-link:hover {
  color: #4e5155;
}
</style>
