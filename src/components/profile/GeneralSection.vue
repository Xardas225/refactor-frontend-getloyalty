<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "@/components/ui/BaseInput.vue";

const formData = reactive({
  login: "",
  firstName: "",
  lastName: "",
  position: "",
});
</script>

<template>
  <div class="tab-pane fade show active settings-section">
    <div class="p-0">
      <div class="card-body">
        <BaseInput
          labelText="Логин"
          inputType="email"
          placeholder="Укажите e-mail"
          v-model:input="formData.login"
        />
        <BaseInput
          labelText="Имя"
          inputType="text"
          placeholder="Укажите имя"
          v-model:input="formData.firstName"
        />
        <BaseInput
          labelText="Фамилия"
          inputType="text"
          placeholder="Укажите фамилию"
          v-model:input="formData.lastName"
        />
        <BaseInput
          labelText="Должность"
          inputType="text"
          placeholder="Укажите должность"
          v-model:input="formData.position"
        />
      </div>
    </div>
  </div>
</template>
