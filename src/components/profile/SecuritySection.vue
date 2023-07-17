<script setup lang="ts">
// Vue
import { reactive, computed, ref } from "vue";
// Components
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
// Validate
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import delayWatch from "vue3-delay-watch";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();

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

const v$ = useVuelidate(rules, formData)

const isDisabledFields = ref(true)

const checkOldPass = async () => {
  await store.checkPass(formData.curPassword)
  if(store.isPass) isDisabledFields.value = false;
  else isDisabledFields.value = true;
}

delayWatch(
  () => formData.curPassword,
  () => {
    checkOldPass();
  },
  2000,
  () => {}
);

const save = () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("Error validation");
    return;
  }
}
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
          :success="! isDisabledFields"
        />
        <BaseInput
          labelText="Новый пароль"
          inputType="password"
          :disabled="isDisabledFields"
          placeholder="Введите новый пароль"
          v-model:input="formData.newPassword"
          :success="!v$.newPassword.$invalid"
        />
        <BaseInput
          labelText="Подтвердите новый пароль"
          inputType="password"
          :disabled="isDisabledFields"
          placeholder="Введите повторно новый пароль"
          v-model:input="formData.confNewPassword"
          :success="!v$.newPassword.$invalid && formData.newPassword == formData.confNewPassword"
        />
        <div class="d-flex justify-content-end">
          <BaseButton
            @click="save"
            type="button"
            btnText="Сохранить"
            tag="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>
