<script setup lang="ts">
import GeneralSection from '../../components/profile/GeneralSection.vue';
import SecuritySection from '../../components/profile/SecuritySection.vue';
import BreadCrumbs from "@/components/ui/BreadCrumbs.vue";

const breadcrumbData = [
  {
    title: 'Настройки',
    active: false,
  },
  {
    title: 'Профиль',
    active: true,
  }
]
</script>


<template>
  <BreadCrumbs :items="breadcrumbData"/>
  <div class="tab-content card">
    <GeneralSection />
    <SecuritySection />
  </div>
</template>