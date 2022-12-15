import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://json-server-oh2f.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
})

export default blogFetch;