<script setup lang="ts">
// Vue
import { ref, reactive, computed } from "vue";
// Components
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import ShowCropperModalButton from "@/components/ui/сropper/ShowCropperModalButton.vue";
import DeleteCropperButton from "@/components/ui/сropper/DeleteCropperButton.vue";
import CropperModal from "@/components/ui/сropper/CropperModal.vue";
// Store
import { useProfileStore } from "@/store/profile-store";
const store = useProfileStore();
// Validate
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const { avatar, login, firstName, lastName, position } = store.getGeneralData;

const formData = reactive({
  avatar: avatar,
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

v$.value.$reset();

const save = async () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("Error validation");
    return;
  }

  store.saveGeneralData(formData);
};

const cropperModal = ref();
const defaultAvatar = "https://via.placeholder.com/250";

const showModal = () => {
  cropperModal.value.show();
};

interface CroppedImageData {
  file: File;
  imageUrl: Blob;
  height: number;
  width: number;
  left: number;
  top: number;
}

const setCroppedImageData = (data: CroppedImageData) => {
  formData.avatar = data.imageUrl;
  store.setAvatar(data.imageUrl);
};

const deleteCropImage = () => {
  formData.avatar = defaultAvatar;
  store.deleteAvatar();
};
</script>

<template>
  <div class="tab-pane fade show active settings-section">
    <div class="p-0">
      <div
        class="card p-2 d-flex flex-row justify-content-start align-items-center"
      >
        <Transition>
          <img
            :src="formData.avatar || defaultAvatar"
            id="profile_avatar"
            class="rounded ml-4 my-2"
          />
        </Transition>
        <div class="card-body ml-2">
          <ShowCropperModalButton
            @showModal="showModal"
            btnText="Загрузить новое фото"
            type="button"
          />
          <DeleteCropperButton
            class="ml-2"
            @click="deleteCropImage"
            btnText="Удалить фото"
            type="button"
            v-if="formData.avatar !== defaultAvatar"
          />
          <teleport to="body">
            <CropperModal
              ref="cropperModal"
              @croppedImageData="setCroppedImageData"
            />
          </teleport>
        </div>
      </div>
      <hr class="border-light m-0" />
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

<style scoped>
#profile_avatar {
  width: 100px;
}
.card,
.nav-tabs-top > .tab-content,
.nav-tabs-right > .tab-content,
.nav-tabs-bottom > .tab-content,
.nav-tabs-left > .tab-content {
  box-shadow: none !important;
}
</style>
