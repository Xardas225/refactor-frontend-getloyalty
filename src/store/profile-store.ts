import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";

interface ProfileData {
  user_id: number;
  fk_company: number;
  user_avatar: string;
  user_category: 'producer' | 'owner' | 'employee' | 'support';
  user_confirmed: number;
  user_language: 'ru' | 'en';
  user_login: string;
  user_pass: string;
  user_descr: string;
  user_rights: string;
  user_role: string;
  user_status: 'DEACTIVE' | 'ACTIVE' | 'BLOCK';
}

interface PreparedProfileData extends ProfileData {
  user_fname: string;
  user_lname: string;
  user_position: string;
}

interface GeneralProfileData {
  login: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  position: string | undefined;
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    breadcrumbs: [
      {
        title: "Настройки",
        active: false,
      },
      {
        title: "Профиль",
        active: true,
      },
    ],
    data: null as PreparedProfileData | null
  }),
  actions: {
    async setData(): Promise<void> {
      try {
        const { data } = await axios.post('/api/profile')
        this.data = this.prepareData(data[0]);
      } catch (error) {
        throw new Error("Abort get data profile");
      }
    },
    prepareData(data: ProfileData): PreparedProfileData {
      try {
        const { fname, lname, position } = JSON.parse(data.user_descr);
        return ({
          ...data,
          user_fname: fname,
          user_lname: lname,
          user_position: position
        })
      } catch (error: any) {
        throw new Error(`Prepare profile data aborted with message ${error.message}`)
      }
    }
  },
  getters: {
    getGeneralData(): GeneralProfileData {
      return ({
        login: this.data?.user_login,
        firstName: this.data?.user_fname,
        lastName: this.data?.user_lname,
        position: this.data?.user_position
      })
    }
  }
})