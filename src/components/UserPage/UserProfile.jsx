import { PhotoIcon } from "@heroicons/react/24/outline";
import Input from "../UI/Input";
import { useState } from "react";
import Button from "../UI/Button";

const UserProfile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");

	return (
		<div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
			<div className="relative">
				<div className="w-24 h-24 rounded-full border-2 border-darkblue-05"></div>
				<div className="absolute right-1 bottom-1 p-1 bg-white hover:cursor-pointer hover:bg-blue-50">
					<PhotoIcon className="w-5 h-5 text-darkblue-05" />
				</div>
			</div>
			<form className="w-full space-y-4">
				<Input
					placeholder="John Doe"
					label="Nama"
					type="text"
					className="w-full"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder="johndoe@gmail.com"
					label="Email"
					type="email"
					className="w-full"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="+62 8112233"
					label="Nomor Telepon"
					type="number"
					className="w-full"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
				<Input
					placeholder="Masukkan negara tempat tinggal anda"
					label="Negara"
					type="text"
					className="w-full"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
				<Input
					placeholder="Masukkan kota tempat tinggal anda"
					label="Kota"
					type="text"
					className="w-full"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<Button size="lg" className="w-full">
					Simpan Profil Saya
				</Button>
			</form>
		</div>
	);
};

export default UserProfile;
