import axios from "axios";

const baseURL: string = "http://localhost:3000";
const contentType: string = "application/json";

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": contentType
    }
});