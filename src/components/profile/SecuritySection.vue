<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "@/components/ui/BaseInput.vue";

const formData = reactive({
  curPassword: "",
  newPassword: "",
  repNewPassword: "",
});
</script>

<template>
  <div class="tab-pane fade show active settings-section">
    <div class="p-0">
      <div class="card-body">
        <BaseInput
          labelText="Текущий пароль"
          inputType="password"
          placeholder="Введите текущий пароль"
          v-model:input="formData.curPassword"
        />
        <BaseInput
          labelText="Новый пароль"
          inputType="password"
          :disabled="true"
          placeholder="Введите новый пароль"
          v-model:input="formData.newPassword"
        />
        <BaseInput
          labelText="Подтвердите новый пароль"
          inputType="password"
          :disabled="true"
          placeholder="Введите повторно новый пароль"
          v-model:input="formData.repNewPassword"
        />
      </div>
    </div>
  </div>
</template>
