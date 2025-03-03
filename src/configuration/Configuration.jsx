import axios from "axios";

const base_url = "http://localhost:3000/api/users"

const api = axios.create({

    baseUrl:base_url,
    timeout:10000,
    headers:{

        "Content-Type":"application/json"

    }
})


export default api;