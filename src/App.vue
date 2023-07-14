<script setup lang="ts">
import SideNav from "@/components/ui/SideNav";
import NavBar from "@/components/ui/NavBar";
</script>

<template>
  <div class="layout-wrapper layout-2">
    <div class="layout-inner">
      <SideNav />
      <div class="layout-container">
        <NavBar />
        <div class="layout-content">
          <div class="container-fluid flex-grow-1 container-p-y">
            <Transition name="page" mode="out-in">
              <router-view />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("./assets/appwork.css");
@import url("./assets/theme-air.css");
@import url("./assets/loyalty.css");
.layout-content {
  background-color: #f5f5f5;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.7s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
@media (min-width: 962px) {
  .container,
  .container-fluid {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
}
</style>
