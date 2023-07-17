import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";

export const useEmployeesStore = defineStore("employees", {
  state: () => ({
    breadcrumbs: [
      {
        title: "Настройки",
        active: false,
      },
      {
        title: "Сотрудники",
        active: true,
      },
    ],
    data: null
  }),
});
