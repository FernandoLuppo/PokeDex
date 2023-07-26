import type { AxiosInstance } from "axios"
import axios from "axios"

export const Api = (): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:8080"
  })
}
