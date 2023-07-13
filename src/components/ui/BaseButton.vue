<script setup lang="ts">
import { defineProps } from "vue";

interface FormButton {
  btnText: string;
  tag:
    | "primary"
    | "default"
    | "danger"
    | "secondary"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  type: "submit" | "button" | "reset" | undefined;
}

const props = defineProps<FormButton>();
</script>

<template>
  <button :class="`btn btn-${tag}`" :type="type">
    {{ btnText }}
  </button>
</template>

<style scoped>
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: 0.894rem;
  line-height: 1.54;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  padding: 0.438rem 1.125rem;
}
.btn.btn-primary {
  background-color: #ff4d67;
  color: #fff;
  border-color: transparent;
}
.btn.btn-primary:focus, .btn-primary.focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgba(238, 12, 128, 0.62);
}
.btn.btn-primary:active, .btn-primary.active {
  border-color: rgba(0, 0, 0, 0);
  background: #de2170;
  box-shadow: none;
}
</style>
