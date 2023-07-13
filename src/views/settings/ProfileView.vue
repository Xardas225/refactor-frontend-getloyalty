<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
// Components
import GeneralSection from "@/components/profile/GeneralSection.vue";
import SecuritySection from "@/components/profile/SecuritySection.vue";
import CompanySection from "@/components/profile/CompanySection.vue";
import NavBarSection from "@/components/profile/NavBarSection.vue";
import BreadCrumbs from "@/components/ui/BreadCrumbs.vue";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();

onMounted(async () => {
  await store.setData();
});

const navBarData = reactive([
  {
    title: "Основные данные",
    active: true,
    component: GeneralSection,
  },
  {
    title: "Смена пароля",
    active: false,
    component: SecuritySection,
  },
  {
    title: "Компания",
    active: false,
    component: CompanySection,
  },
]);

const activeComponent = ref(GeneralSection);

const changeComponent = (component: any): void => {
  activeComponent.value = component;
};
</script>

<template>
  <div class="m-auto" v-if="!store.data">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div v-else>
    <BreadCrumbs :items="store.breadcrumbs" />
    <NavBarSection :items="navBarData" @changeComponent="changeComponent" />
    <div class="tab-content card">
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
