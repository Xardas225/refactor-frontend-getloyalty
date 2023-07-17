<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, toRefs, computed } from "vue";

interface BaseInput {
  labelText?: string;
  inputType: "text" | "password" | "email" | "number" | "file" | undefined;
  placeholder?: string;
  disabled?: boolean;
  input: string | undefined;
  error?: boolean;
  success?: boolean;
}

const props = withDefaults(defineProps<BaseInput>(), {
  success: false,
  error: false,
  placeholder: "",
});

const { input } = toRefs(props);

const emit = defineEmits(["update:input"]);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>

<template>
  <div class="form-group position-relative">
    <label class="form-label">{{ labelText }}</label>
    <input
      :type="inputType"
      class="form-control"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="inputComputed"
      :class="{
        'border border-2 border-danger': error,
        'border border-2 border-success': success,
      }"
    />
    <font-awesome-icon
      class="icon icon-success"
      v-if="success"
      icon="fa-solid fa-check"
    />
    <font-awesome-icon
      class="icon icon-danger"
      v-if="error"
      icon="fa-solid fa-triangle-exclamation"
    />
  </div>
</template>

<style scoped>
.form-control {
  font-size: 0.894rem;
  border: 1px solid rgba(24, 28, 33, 0.1);
}
.icon {
  position: absolute;
  top: 60%;
  right: 10px;
}
.icon-success {
  color: #28a745;
}
.icon-danger {
  color: #dc3545;
}
</style>
