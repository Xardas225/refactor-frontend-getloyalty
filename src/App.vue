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
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("./assets/appwork.css");
.layout-content {
  background-color: #f5f5f5;
}
</style>
