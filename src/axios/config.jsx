import axios from "axios";

const fetch = axios.create({
    baseURL: "https://json-server-oh2f.onrender.com/hamburguer"
})

export default fetch