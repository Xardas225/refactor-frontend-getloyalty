<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "@/components/ui/BaseInput.vue";

const formData = reactive({
  company: "",
  industry: "",
});
</script>

<template>
  <div class="tab-pane fade show active settings-section">
    <div class="p-0">
      <div class="card-body">
        <BaseInput
          labelText="Название компании"
          inputType="text"
          placeholder="Введите название компании"
          v-model:input="formData.company"
        />
        <BaseInput
          labelText="Отрасль"
          inputType="text"
          :disabled="true"
          v-model:input="formData.industry"
        />
      </div>
    </div>
  </div>
</template>
