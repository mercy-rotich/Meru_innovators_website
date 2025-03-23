import axios from "axios";

const base_url = "https://7h3pspsq-8000.uks1.devtunnels.ms/";

const api = axios.create({
    baseURL: base_url, 
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
