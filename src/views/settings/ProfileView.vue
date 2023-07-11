<script setup lang="ts">
import { ref } from "vue";
import GeneralSection from "../../components/profile/GeneralSection.vue";
import SecuritySection from "../../components/profile/SecuritySection.vue";
import CompanySection from "../../components/profile/CompanySection.vue";
import NavBarSection from "../../components/profile/NavBarSection.vue";
import BreadCrumbs from "@/components/ui/BreadCrumbs.vue";

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

const navBarData = [
  {
    title: 'Основные данные',
    active: true,
    component: GeneralSection
  },
  {
    title: 'Смена пароля',
    active: true,
    component: SecuritySection
  },
  {
    title: 'Компания',
    active: true,
    component: CompanySection
  }
]

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
