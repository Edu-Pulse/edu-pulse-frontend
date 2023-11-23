import { useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

const ChangePassword = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
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

				<Button size="lg" className="w-full">
					Ubah Password
				</Button>
			</form>
		</div>
	);
};

export default ChangePassword;
