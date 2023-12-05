import { useContext, useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { ValidationContext } from "../../context/ValidationContext";

function ResetPassword() {
	const { handlePasswordValidation } = useContext(ValidationContext);
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [error, setError] = useState({
		isPasswordError: false,
		isPasswordSimilar: true,
	});

	const handleResetPassword = () => {};
	return (
		<div className="max-w-[452px] w-full">
			<h1 className="font-Montserrat text-2xl font-bold leading-9 text-darkblue-05 mb-6">
				Reset Password
			</h1>
			<div className="mb-4">
				<Input
					placeholder="********"
					type="password"
					label="Masukkan Password Baru"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					onBlur={() => handlePasswordValidation(password, setError)}
					isError={error && error.isPasswordError}
				/>
				{error && error.isPasswordError && (
					<label
						htmlFor="password"
						className="text-xs text-alert-warning"
					>
						Password tidak boleh kurang dari 8 atau lebih dari 20
						karakter
					</label>
				)}
			</div>

			<Input
				placeholder="********"
				type="password"
				label="Ulangi Password Baru"
				name="newpassword"
				value={repeatPassword}
				onChange={(e) => {
					setRepeatPassword(e.target.value);
				}}
				isError={password !== repeatPassword}
			/>
			{password !== repeatPassword && (
				<label
					htmlFor="newpassword"
					className="text-xs text-alert-warning"
				>
					Password tidak sama
				</label>
			)}
			<div className="flex justify-center mt-6">
				<Button className="w-full" onClick={handleResetPassword}>
					Simpan
				</Button>
			</div>
		</div>
	);
}

export default ResetPassword;
