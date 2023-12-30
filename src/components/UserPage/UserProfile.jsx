import { PhotoIcon } from "@heroicons/react/24/outline";
import Input from "../UI/Input";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import toast from "react-hot-toast";
import app from "../../lib/axiosConfig";
import { useNavigate } from "react-router-dom";
import userImagePlaceholder from "@/assets/user-image-placeholder.jpg";
import { getMe } from "../../lib/getMe";

const UserProfile = () => {
	const [user, setUser] = useState("");
	const [name, setName] = useState(user.name || "");
	const [email, setEmail] = useState(user.email || "");
	const [phone, setphone] = useState(user.phone || "");
	const [country, setCountry] = useState(user.country || "");
	const [city, setCity] = useState(user.city || "");
	const [image, setImage] = useState(user.imageProfile);
	const [newImage, setNewImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			await getMe(setUser);
		};
		fetchData();
	}, []);

	useEffect(() => {
		setName(user.name);
		setEmail(user.email);
		setphone(user.phone);
		setCountry(user.country);
		setCity(user.city);
		setImage(user.imageProfile);
	}, [user, navigate]);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const formData = new FormData();
			formData.append("file", newImage);
			formData.append("name", name);
			formData.append("email", email);
			formData.append("phone", phone);
			formData.append("city", city);
			formData.append("country", country);

			const response = await app.post("user/update", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			if (response.status == 200) {
				toast.success(response.data.message);
				setIsLoading(false);
				setTimeout(() => {
					navigate(0);
				}, 1000);
			}
		} catch (error) {
			toast.error("Something went wrong!");
			setIsLoading(false);
			return;
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			encType="multipart/form-data"
			className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12"
		>
			<div className="relative">
				<div className="w-24 h-24 rounded-full border-2 border-darkblue-05 object-cover overflow-hidden">
					<img
						src={
							newImage
								? URL.createObjectURL(newImage)
								: image
								? image
								: userImagePlaceholder
						}
						alt="User Profile Image"
						className="h-full w-full"
						value={image}
					/>
				</div>
				<div
					onClick={() => document.querySelector("#pin-image").click()}
					className="absolute right-1 rounded-full bottom-1 p-1 bg-white hover:cursor-pointer hover:bg-blue-50"
				>
					<input
						type="file"
						accept="image/*"
						id="pin-image"
						hidden
						onChange={(e) => setNewImage(e.target.files[0])}
					/>
					<PhotoIcon className="w-5 h-5 text-darkblue-05" />
				</div>
			</div>
			<div className="w-full space-y-4">
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
					value={phone}
					onChange={(e) => setphone(e.target.value)}
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
				<Button
					size="lg"
					className="w-full"
					type="submit"
					loading={isLoading}
					loadingText="Menyimpan..."
				>
					Simpan Profil Saya
				</Button>
			</div>
		</form>
	);
};

export default UserProfile;
