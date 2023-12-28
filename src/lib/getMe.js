import app from "./axiosConfig";
import toast from "react-hot-toast";

export const getMe = async (setUser) => {
	try {
		const response = await app.get(`user`);
		const data = response.data.data;
		setUser(data);
	} catch (error) {
		toast.error("Something went wrong!");
	}
};
