<script setup lang="ts">
import GeneralSection from '../../components/profile/GeneralSection.vue';
import SecuritySection from '../../components/profile/SecuritySection.vue';
import CompanySection from '../../components/profile/CompanySection.vue';
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
    <CompanySection />
  </div>
</template>