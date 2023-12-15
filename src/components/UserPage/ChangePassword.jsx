import { useContext, useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";
import app from "../../pages/AuthFlow/axiosConfig";
import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
	const { user } = useContext(AuthContext);
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			let data = JSON.stringify({
				oldPassword,
				newPassword,
			});

			const response = await app.put("user/change-password", data, {
				headers: {
					"Content-Type": "application/json",
					Accept: "*/*",
				},
			});
			console.log(response.data);
			if (response.data.error === true) {
				toast.error(response.data.message);
				setIsLoading(false);
			} else {
				toast.success(response.data.message);
				setIsLoading(false);
				setTimeout(() => {
					navigate(0);
				}, 1500);
			}
		} catch (error) {
			toast.error("Something went wrong!");
			setIsLoading(false);
			return;
		}
	};

	const handleForgetPassword = async (e) => {
		e.preventDefault();
		try {
			const response = await app.get(`forgot-password/${user.email}`);
			console.log(response.data);
			if (response.data.error === true) {
				toast.error(response.data.message);
			} else {
				toast.success(response.data.data);
			}
		} catch (error) {
			toast.error(error.message);
			return;
		}
	};

	return (
		<div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
			<h2 className="text-2xl font-semibold">Ubah Password</h2>
			<form className="w-full space-y-4">
				<Input
					placeholder="Password Lama"
					label="Masukkan Password Lama"
					type="password"
					className="w-full"
					value={oldPassword}
					onChange={(e) => setOldPassword(e.target.value)}
				/>
				<Input
					placeholder="Password Baru"
					label="Masukkan Password Baru"
					type="password"
					className="w-full"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				<Input
					placeholder="Ulangi password"
					label="Ulangi Password Baru"
					type="password"
					className="w-full"
					value={repeatPassword}
					onChange={(e) => setRepeatPassword(e.target.value)}
				/>
				<label
					className="font-poppins text-xs font-normal leading-[18px] text-darkblue-05 mb-1 cursor-pointer"
					onClick={handleForgetPassword}
				>
					Lupa Kata Sandi
				</label>

				<Button
					size="lg"
					className="w-full"
					onClick={onSubmit}
					loading={isLoading}
				>
					Ubah Password
				</Button>
			</form>
		</div>
	);
};

export default ChangePassword;
