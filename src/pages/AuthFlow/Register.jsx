// import { Link } from "react-router-dom";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import CheckList from "../../components/UI/CheckList";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

function Register() {
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [phone, setphone] = useState("");
	// const [password, setPassword] = useState("");
	// const [city, setcity] = useState("");
	// const [country, setcountry] = useState("");
	// const [isErrorName, setIsErrorName] = useState(false);
	// const [isErrorEmail, setIsErrorEmail] = useState(false);
	// const [isErrorTlp, setIsErrorTlp] = useState(false);
	// const [isErrorPassword, setIsErrorPassword] = useState(false);
	// const [checkName, setCheckName] = useState(false);
	// const [checkEmail, setCheckEmail] = useState(false);
	// const [checkTlp, setCheckTlp] = useState(false);
	// const navigate = useNavigate();

	// const handleName = () => {
	// 	if (name.length >= 2) {
	// 		setCheckName(true);
	// 		setIsErrorName(false);
	// 	} else {
	// 		setCheckName(false);
	// 		setIsErrorName(true);
	// 	}
	// 	return;
	// };

	// const handleEmail = () => {
	// 	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
	// 		setCheckEmail(true);
	// 		setIsErrorEmail(false);
	// 	} else {
	// 		setIsErrorEmail(true);
	// 	}
	// };

	// const handlephone = () => {
	// 	if (phone.length >= 9) {
	// 		setCheckTlp(true);
	// 		setIsErrorTlp(false);
	// 	} else {
	// 		setCheckTlp(false);
	// 		setIsErrorTlp(true);
	// 	}
	// };

	// const handlePassword = () => {
	// 	if (password.length >= 8) {
	// 		setIsErrorPassword(false);
	// 	} else {
	// 		setIsErrorPassword(true);
	// 	}
	// };

	// const onSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		let data = JSON.stringify({
	// 			name,
	// 			email,
	// 			phone,
	// 			password,
	// 			city,
	// 			country,
	// 		});

	// 		let config = {
	// 			method: "post",
	// 			url: `https://pragos-academy-api-production.up.railway.app/register`,
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			data: data,
	// 		};

	// 		await axios.request(config);

	// 		navigate(`/auth/otp/${email}`);
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// };

	return (
		<div className="border border-black h-screen grid place-content-center items-center justify-center">
      <div className="border border-black h-[441px] sm:w-[452px] w-[390px] sm:px-0 px-4">
      <h1 className="border border-black font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">
        Daftar
      </h1>
        <div className="border border-black h-[4.4rem] mt-1 flex flex-row">
          <div className="border border-black w-[50%] me-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="Budi"
              type="text"
              label="Nama"
              name="Nama"
            />
          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>
          <div className="border border-black w-[50%] ms-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="081823456789"
              type="number"
              label="Nomor Telepon"
              name="Nomor Telepon"
            />
          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>
        </div>
        <div className="border border-black mt-1 h-[4.3rem]">
        <div className="relative">
            <Input
              placeholder="Contoh: johndoe@gmail.com"
              type="email"
              label="Email"
              name="Email"
            />
          <div className="absolute bottom-0 sm:ms-[26.3rem] ms-[20.5rem] mb-[0.7rem] ...">
            <CheckList />
          </div>
          </div>
        </div>
        <div className="border border-black mt-1 h-[4.3rem]">
        <div className="relative">
            <Input
              placeholder="Buat Password"
              type="password"
              label="Password"
              name="Password"
            />
          </div>
        </div>
        <div className="border border-black h-[4.4rem] mt-1 flex flex-row">
          <div className="border border-black w-[50%] me-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="Jakarta"
              type="text"
              label="Asal Kota"
              name="Asal Kota"
            />
          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>
          <div className="border border-black w-[50%] ms-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="Indonesia"
              type="text"
              label="Asal Negara"
              name="Asal Negara"
            />
          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>
        </div>
        <div className="border border-black h-[3.2rem] mt-5">
          <Button className="w-full">Daftar</Button>
        </div>
        <div className="border border-black mt-3 flex justify-center gap-[8px]">
        <h3>Sudah punya akun?</h3>
          <h3 className="text-darkblue-05 font-bold">Masuk di sini</h3>
      </div>
      </div>
    </div>
	);
}

export default Register;
