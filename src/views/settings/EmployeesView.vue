<script setup lang="ts">
// Vue
import { ref } from "vue";
// Components
import BreadCrumbs from "@/components/ui/BreadCrumbs.vue";
// Store
import { useEmployeesStore } from "@/store/employees-store";
const store = useEmployeesStore();


</script>

<template>
  <BreadCrumbs :items="store.breadcrumbs" />
  <div class="m-auto" v-if="!store.data">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div v-else>
    <div class="tab-content card">
        
    </div>
  </div>
</template>
