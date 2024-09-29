import axios from "axios";

const api = axios.create({
    baseURL: "./data/data.json",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;