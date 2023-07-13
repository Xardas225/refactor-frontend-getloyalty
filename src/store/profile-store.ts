import { defineStore } from "pinia";
import axios from "axios";

export const useProfileStore = defineStore('profile', {
  state: () => ({
    breadcrumbs: [],
    navBar: [],
    data: {}
  }),
  actions: {
    async getData() {
      
    }
  }
})