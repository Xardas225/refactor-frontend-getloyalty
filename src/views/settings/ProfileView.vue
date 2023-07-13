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
  await store.getData()
  console.log(store.data);
})

const breadcrumbData = [
  {
    title: "Настройки",
    active: false,
  },
  {
    title: "Профиль",
    active: true,
  },
];

const navBarData = reactive([
  {
    title: 'Основные данные',
    active: true,
    component: GeneralSection
  },
  {
    title: 'Смена пароля',
    active: false,
    component: SecuritySection
  },
  {
    title: 'Компания',
    active: false,
    component: CompanySection
  }
])

const activeComponent = ref(GeneralSection);

const changeComponent = (component: any):void => {
  activeComponent.value = component;
}
</script>

<template>
  <BreadCrumbs :items="breadcrumbData" />
  <NavBarSection :items="navBarData" @changeComponent="changeComponent"/>
  <div class="tab-content card">
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>
