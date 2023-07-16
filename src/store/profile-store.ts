import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";

interface ProfileData {
  id: number;
  fk_company: number;
  avatar: string;
  category: "producer" | "owner" | "employee" | "support";
  confirmed: number;
  language: "ru" | "en";
  login: string;
  pass: string;
  role: string;
  fname: string;
  lname: string;
  position: string;
  company: string;
  industry: string;
  status: "DEACTIVE" | "ACTIVE" | "BLOCK";
}

interface GeneralProfileData {
  avatar: string | undefined;
  login: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  position: string | undefined;
}

interface CompanyProfileData {
  company: string | undefined;
  industry: string | undefined;
}

export const useProfileStore = defineStore("profile", {
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
    data: null as ProfileData | null,
  }),
  actions: {
    async setData(): Promise<void> {
      try {
        const { data } = await axios.get("/api/profile");
        this.data = data[0];
      } catch (error) {
        throw new Error("Abort get data profile");
      }
    },
    async saveGeneralData(data: GeneralProfileData): Promise<void> {
      try {
        axios.post("/api/profile", JSON.stringify(data));
      } catch (error: any) {
        throw new Error(
          `Aborted save general data with error message ${error.message}`
        );
      }
    },
    setAvatar(src: string) {
      if (
        this.data !== null &&
        Object.getOwnPropertyDescriptor(this.data, "avatar")
      )
        this.data.avatar = src;
    },
    deleteAvatar() {
      if (
        this.data !== null &&
        Object.getOwnPropertyDescriptor(this.data, "avatar")
      )
        this.data.avatar = "https://via.placeholder.com/250";
    },
  },
  getters: {
    getGeneralData(): GeneralProfileData {
      return {
        avatar: this.data?.avatar,
        login: this.data?.login,
        firstName: this.data?.fname,
        lastName: this.data?.lname,
        position: this.data?.position,
      };
    },
    getCompanyData(): CompanyProfileData {
      return {
        company: this.data?.company,
        industry: this.data?.industry,
      };
    },
  },
});
