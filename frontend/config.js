import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://ml-kit-prj.herokuapp.com/api/"
    // baseURL: "http://localhost:8050/api/"
})