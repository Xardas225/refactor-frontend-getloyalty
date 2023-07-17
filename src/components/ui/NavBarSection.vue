<script setup lang="ts">
import { DefineComponent, defineProps, toRefs, defineEmits } from "vue";

interface NavBarSectionInterface {
  title: string;
  active: boolean;
  component: DefineComponent;
}

const emit = defineEmits<{
  (e: "changeComponent", component: DefineComponent): void;
}>();

const props = defineProps<{
  items: Array<NavBarSectionInterface>;
}>();

const { items } = toRefs(props);

const changeActiveComponent = (component: DefineComponent): void => {
  for (let elem of items.value) {
    elem.component == component ? (elem.active = true) : (elem.active = false);
  }
  emit("changeComponent", component);
};
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
        <li v-for="item in items" :key="item.title" class="nav-item">
            <a
              @click.stop.prevent="changeActiveComponent(item.component)"
              class="nav-link"
              :class="{ active: item.active }"
              data-toggle="tab"
              >{{ item.title }}</a
            >
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
  transition: all .2s;
  color: #a3a4a6;
  cursor: pointer;
}
.nav-link.active,
.nav-link:hover {
  color: #4e5155;
}

</style>
