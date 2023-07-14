<script setup lang="ts">
// Vue
import { reactive, computed } from "vue";
// Components
import BaseButton from "../ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();
// Validate
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const { login, firstName, lastName, position } = store.getGeneralData;

const formData = reactive({
  login: login,
  firstName: firstName,
  lastName: lastName,
  position: position,
});

const rules = computed(() => {
  return {
    login: { required, email },
    firstName: { required, minLength: minLength(3) },
    lastName: { required },
    position: {},
  };
});

const v$ = useVuelidate(rules, formData);

v$.value.$reset()

const save = async () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("Error validation");
  }

  store.saveGeneralData(formData);
};
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
          :error="v$.login.$invalid"
        />
        <BaseInput
          labelText="Имя"
          inputType="text"
          placeholder="Укажите имя"
          v-model:input="formData.firstName"
          :error="v$.firstName.$invalid"
        />
        <BaseInput
          labelText="Фамилия"
          inputType="text"
          placeholder="Укажите фамилию"
          v-model:input="formData.lastName"
          :error="v$.lastName.$invalid"
        />
        <BaseInput
          labelText="Должность"
          inputType="text"
          placeholder="Укажите должность"
          v-model:input="formData.position"
          :error="v$.position.$invalid"
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
