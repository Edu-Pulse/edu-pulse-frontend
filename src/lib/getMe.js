import app from "./axiosConfig";

export const getMe = async (setUser) => {
	try {
		const response = await app.get(`user`);
		const data = response.data.data;
		console.log(data);
		setUser(data);
	} catch (error) {
		console.log(error);
	}
};
