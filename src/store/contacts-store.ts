import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    breadcrumbs: [
      {
        title: "Настройки",
        active: false,
      },
      {
        title: "Контакты",
        active: true,
      },
    ],
  }),
});
