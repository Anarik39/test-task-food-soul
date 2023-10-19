import { defineStore } from 'pinia'
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export const useMainStore = defineStore('main', () => {
  const get = async <T>(path: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const { data } = await axios.get<T>(path, config);

      return data
    } catch (e: any) {
      throw e;
    }
  }

  return { get }
})
