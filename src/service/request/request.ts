import axios from "axios";

const requestInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL

})

export {requestInstance};