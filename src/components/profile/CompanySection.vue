<script setup lang="ts">
// Vue
import { reactive, computed } from "vue";
// Components
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();
// Validate
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

const { company, industry } = store.getCompanyData;

const formData = reactive({
  company: company,
  industry: industry,
});

const rules = computed(() => {
  return {
    company: { required },
    industry: { required },
  };
});

const v$ = useVuelidate(rules, formData);

const save = () => {
  v$.value.$validate();
  if (v$.value.$error) {
    toast.error('Проверьте правильность заполнения данных!')
    return;
  }
  toast.success("Данные успешно сохранены!");
  // send data logic
};
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
          :error="v$.company.$invalid"
        />
        <BaseInput
          labelText="Отрасль"
          inputType="text"
          :disabled="true"
          v-model:input="formData.industry"
          :error="v$.industry.$invalid"
        />
        <div class="d-flex justify-content-end">
          <BaseButton
            @click="save"
            class="mr-2"
            type="button"
            btnText="Сохранить"
            tag="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>
