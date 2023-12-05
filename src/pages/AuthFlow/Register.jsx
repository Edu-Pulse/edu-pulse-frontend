import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Axios } from "axios";

function Register() {
  const {
		handleNameValidation,
		handleEmailValidation,
		handlePhoneValidation,
		handlePasswordValidation,
	} = useContext(AuthContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setphone] = useState("");
	const [password, setPassword] = useState("");
	const [city, setcity] = useState("");
	const [country, setcountry] = useState("");
	const [error, setError] = useState({
		isEmailError: false,
		isNameError: false,
		isPhoneError: false,
		isPasswordError: false,
	});	
  const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			let data = JSON.stringify({
				name,
				email,
				phone,
				password,
				city,
				country,
			});

			let config = {
				method: "post",
				url: `https://pragos-academy-api-production.up.railway.app/register`,
				headers: {
					"Content-Type": "application/json",
				},
				data: data,
			};

			await Axios.request(config);

			navigate(`/auth/otp/${email}`);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="max-w-[452px] w-full">
			<h1 className="font-Montserrat text-2xl font-bold leading-[36px] text-darkblue-05 mb-6">
				Daftar
			</h1>
			<div className="">
				<Input
					placeholder="Nama Lengkap"
					type="text"
					label="Nama"
					name="Nama Lengkap"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
          onBlur={() => handleNameValidation(name, setError)}
					isError={error && error.isNameError}
				/>
				{!error && !error.isNameError && (
					<span className="sm:ml-[26rem] ml-[19.5rem] h-6 absolute mt-[-1.9rem]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
								fill="#188E55"
							/>
						</svg>
					</span>
				)}
			</div>
			<div className="flex justify-between mt-[14px]">
				<Input
					placeholder="Contoh: johndee@gmail.com"
					type="email"
					label="Email"
					name="Email"
					className="w-full"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
          onBlur={() => handleEmailValidation(email, setError)}
					isError={error && error.isEmailError}
				/>
				{error && error.isEmailError && (
					<span className="sm:ml-[26rem] ml-[19.5rem] h-6 absolute mt-[2.2rem]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
								fill="#188E55"
							/>
						</svg>
					</span>
				)}
			</div>
			<div className="flex justify-between mt-[14px]"></div>
			<Input
				placeholder="08xxxxxxxxx"
				type="text"
				label="Nomor Telepon"
				name="Nomor Telepon"
				value={phone}
				onChange={(e) => {
					setphone(e.target.value);
				}}
        onBlur={() => handlePhoneValidation(phone, setError)}
				isError={error && error.isPhoneError}
			/>
			{error && error.isPhoneError && (
				<span className="sm:ml-[26rem] ml-[19.5rem] h-6 absolute mt-[-1.9rem]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
							fill="#188E55"
						/>
					</svg>
				</span>
			)}
			<div className="flex justify-between mt-[14px]"></div>
			<Input
				placeholder="Buat Password"
				type="password"
				label="Buat Password"
				name="Buat Password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				onBlur={() => handlePasswordValidation(password, setError)}
				isError={error && error.isPasswordError}
			/>
			<div className="">
				<Input
					placeholder="Jakarta"
					type="text"
					label="Asal Kota"
					name="Asal Kota"
					value={city}
					onChange={(e) => {
						setcity(e.target.value);
					}}
				/>
			</div>
			<div className="">
				<Input
					placeholder="Asal Indonesia"
					type="text"
					label="Asal negara"
					name="Asal negara"
					value={country}
					onChange={(e) => {
						setcountry(e.target.value);
					}}
				/>
			</div>
			<div className="flex justify-center mt-[24px]">
				<Button onClick={onSubmit} className="w-[452px]">
					Daftar
				</Button>
			</div>
			<div className="flex justify-center mt-[40px] gap-[8px]">
				<h3>Sudah punya akun?</h3>
					<h3 className="text-darkblue-05 font-bold">
						Masuk di sini
					</h3>
			</div>
		</div>
	);
}

export default Register;
