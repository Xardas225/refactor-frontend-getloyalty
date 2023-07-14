<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, toRefs, computed } from "vue"

interface BaseInput {
  labelText: string;
  inputType: 'text' | 'password' | 'email' | 'number' | undefined;
  placeholder: string;
  disabled?: boolean;
  input: string | undefined;
  error: boolean;
}

const props = withDefaults(defineProps<BaseInput>(), {
  error: false,
}) 

const { input } = toRefs(props);

const emit = defineEmits(['update:input']);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val),
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
      }"
    />
  </div>
</template>

<style scoped>
.form-control {
  font-size: .894rem;
}
</style>
