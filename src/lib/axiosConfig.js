import axios from "axios";

axios.defaults.withCredentials = true;

const baseURL = "https://pragosacademy.et.r.appspot.com/";

const app = axios.create({
	baseURL,
});

app.interceptors.response.use(
	(response) => response,
	(error) => {
		const status = error.response?.status || 500;
		if (status === 401) {
			window.location =
				window.location.protocol +
				"//" +
				window.location.host +
				"/not-logged-in";
		} else {
			return Promise.reject(error); // Delegate error to calling side
		}
	}
);

export default app;
