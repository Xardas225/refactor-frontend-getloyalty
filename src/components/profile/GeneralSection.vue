<script setup lang="ts">
// Vue
import { reactive } from "vue";
// Components
import BaseButton from "../ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();

const { login, firstName, lastName, position } = store.getGeneralData;

const formData = reactive({
  login: login,
  firstName: firstName,
  lastName: lastName,
  position: position,
});

const save = async () => {
  
}
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
        <div class="d-flex justify-content-end">
          <BaseButton
            @click="save"
            class="mr-2"
            type="button"
            btnText="Сохранить"
            tag="primary"
          />
          <BaseButton type="button" btnText="Отмена" tag="default" />
        </div>
      </div>
    </div>
  </div>
</template>
