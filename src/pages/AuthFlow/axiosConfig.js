import axios from "axios";

axios.defaults.withCredentials = true;

const baseURL = 'https://pragos-academy-api-production.up.railway.app/'

const app = axios.create({
    baseURL
})

app.interceptors.response.use(
    response => (response),
    error => (Promise.reject(error.response.data.err))
)

export default app