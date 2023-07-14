<script setup lang="ts">
// Vue
import { reactive, computed } from "vue";
// Components
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
// Validate
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const formData = reactive({
  curPassword: "",
  newPassword: "",
  confNewPassword: "",
});

const rules = computed(() => {
  return {
    curPassword: { required, minLength: minLength(6) },
    newPassword: { required, minLength: minLength(6) },
    confNewPassword: { required, minLength: minLength(6) },
  };
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
          v-model:input="formData.confNewPassword"
        />
      </div>
    </div>
  </div>
</template>
