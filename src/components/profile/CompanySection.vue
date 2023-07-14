<script setup lang="ts">
// Vue
import { reactive } from "vue";
// Components
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();

const { company, industry } = store.getCompanyData;

const formData = reactive({
  company: company,
  industry: industry,
});

const save = () => {
  console.log('click');
}
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
