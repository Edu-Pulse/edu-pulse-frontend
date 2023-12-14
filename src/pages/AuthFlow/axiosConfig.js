import axios from "axios";

axios.defaults.withCredentials = true;

const baseURL = "https://pragosacademy.et.r.appspot.com/";

const app = axios.create({
	baseURL,
});

app.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error.response.data.err)
);

export default app;
