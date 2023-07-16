<script setup lang="ts">
// Vue
import { ref, onMounted, defineExpose, defineEmits } from "vue";
// Bootstrap
import { Modal } from "bootstrap";
// Components
import BaseButton from "@/components/ui/BaseButton.vue";
// Cropper
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const emit = defineEmits(["croppedImageData"]) 

const modalElement = ref(null);
let modalObj;

onMounted(() => {
  modalObj = new Modal(modalElement.value);
});

const _show = () => {
  modalObj.show();
};

defineExpose({ show: _show });

const uploadImage = ref(null);
const cropper = ref(null);
const fileInput = ref(null);

const getUploadMessage = (e: Event) => {
  const file = e.target.files[0];
  uploadImage.value = URL.createObjectURL(file);
};

const croppedImageData = {
  file: null,
  imageUrl: null,
  height: null,
  width: null,
  left: null,
  top: null,
};

const crop = () => {
  const { coordinates, canvas } = cropper.value.getResult();

  croppedImageData.file = fileInput.value.files[0];
  croppedImageData.imageUrl = canvas.toDataURL();
  croppedImageData.height = coordinates.height;
  croppedImageData.width = coordinates.width;
  croppedImageData.left = coordinates.left;
  croppedImageData.top = coordinates.top;

  emit("croppedImageData", croppedImageData);
  modalObj.hide();
};
</script>

<template>
  <div id="modal" class="modal" ref="modalElement">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title">Загрузка новой фотографии профиля</span>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="input__wrapper position-relative m-4 text-center">
            <input
              ref="fileInput"
              @change="getUploadMessage"
              type="file"
              id="input_file"
            />
            <label for="input_file" class="input__file-button">
              <span class="input__file-icon-wrapper">
                <font-awesome-icon width="25" icon="fa-solid fa-upload" />
              </span>
              <span class="input__file-button-text">Выберите файл</span>
            </label>
            <div class="text-light text-left small mt-1">
              Загрузите фото в формате JPEG, PNG.
            </div>
          </div>
          <Cropper ref="cropper" :src="uploadImage" @change="change"/>
        </div>
        <div class="modal-footer">
          <BaseButton @click="crop" v-if="uploadImage" type="button" btnText="Загрузить" tag="primary" />
          <BaseButton
            type="button"
            btnText="Отмена"
            tag="default"
            data-dismiss="modal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-title {
  font-weight: 500;
  font-size: 1.05rem;
}
.text-light {
  color: #babbbc !important;
}
#input_file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
}
.input__file-icon-wrapper {
  height: 50px;
  width: 50px;
  margin-right: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-right: 1px solid #ff5273;
}
.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
}

.input__file-button {
  transition: all 0.4s;
  width: 100%;
  max-width: 200px;
  height: 50px;
  background: #fff;
  color: #ff5273;
  border: 1px solid #ff5273;
  font-size: 0.894rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
}
.input__file-button:hover {
  background: #ff5273;
  color: #fff;
}
.input__file-button:hover > .input__file-icon-wrapper {
  border-right: 1px solid #fff;
}
</style>
