<script setup lang="ts">
import { defineProps, defineEmits, toRefs, computed } from "vue"

const props = defineProps({
  labelText: {
    type: String, 
    default: ''
  },
  inputType: { type: String as () => 'text' | 'password' | 'email' | 'number' | undefined, default: 'text' },
  placeholder: {
    type: String, 
    default: ''
  },
  disabled: {
    type: Boolean, 
    default: false
  },
  input: String,
})

const { input } = toRefs(props);

const emit = defineEmits(['update:input']);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val),
});


</script>

<template>
  <div class="form-group">
    <label class="form-label">{{ labelText }}</label>
    <input
      :type="inputType"
      class="form-control"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="inputComputed"
    />
  </div>
</template>

<style scoped>
.form-control {
  font-size: .894rem;
}
</style>
