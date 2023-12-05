import { useContext, useState } from "react";
import Button from '../components/UI/Button'
import CheckList from '../components/UI/CheckList'
import Input from '../components/UI/Input'
import { AuthContext } from "@/context/AuthContext";

const Test = () => {
  const { handleEmailValidation, handlePasswordValidation, handleNameValidation, handlePhoneValidation, handleCityValidation, handleCountryValidation, } =
		useContext(AuthContext);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
	const [error, setError] = useState({
		isEmailError: false,
		isPasswordError: false,
    isNameError: false,
    isPhoneError: false,
	});

  return (
    <div className="border border-black h-screen grid place-content-center items-center justify-center">
      <div className="border border-black h-[441px] sm:w-[452px] w-[390px] sm:px-0 px-4">

      {/* Tag Daftar */}
      <h1 className="border border-black font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">
        Daftar
      </h1>

      {/* Pembuka Gabungan Nama dan Nomor Telepon */}
        <div className="border border-black mt-1 flex flex-row">

        {/* Input Nama */}
          <div className="border border-black w-[50%] me-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="Budi"
              type="text"
              value={name}
              label="Nama"
              name="Nama"
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleNameValidation(name, setError)}
              isError={error.isNameError}
            />

          {/* Ketika Nama Error */}
          {error && error.isNameError && (
					<label
						htmlFor="Nama"
						className="text-xs text-alert-warning"
					>
						Nama tidak boleh kosong
					</label>
				)}

          {/* Ketika Nama Benar */}
          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>

        {/* Input Nomor Telepon */}
          <div className="border border-black w-[50%] ms-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="081823456789"
              type="number"
              value={phone}
              label="Nomor Telepon"
              name="Nomor Telepon"
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => handlePhoneValidation(phone, setError)}
              isError={error.isPhoneError}
            />

          {/* Ketika Nomor Telepon Error */}
          {error && error.isPhoneError && (
					<label
						htmlFor="Nomor Telepon"
						className="text-xs text-alert-warning"
					>
						Nomor Telepon tidak boleh kosong
					</label>
				)}

          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>
          
        </div>
        {/* Penutup Gabungan Nama dan Nomor Telepon */}

      {/* Input Email */}
        <div className="border border-black mt-1 ">
        <div className="relative">
            <Input
              placeholder="Contoh: johndoe@gmail.com"
              type="email"
              value={email}
              label="Email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleEmailValidation(email, setError)}
              isError={error.isEmailError}
            />

          {/* Ketika Email Benar */}
          <div className="absolute bottom-0 sm:ms-[26.3rem] ms-[20.5rem] mb-[0.7rem] ...">
            <CheckList />
          </div>
          </div>

          {/* Ketika Email Error */}
          {error && error.isEmailError && (
					<label
						htmlFor="email"
						className="text-xs text-alert-warning"
					>
						Email tidak valid
					</label>
				)}
        </div>

      {/* Input Password */}
        <div className="border border-black mt-1">
        <div className="relative">
            <Input
              placeholder="Buat Password"
              type="password"
              value={password}
              label="Password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handlePasswordValidation(password, setError)}
              isError={error.isPasswordError}
            />

          {/* Ketika Password Error */}
          {error && error.isPasswordError && (
					<label
						htmlFor="email"
						className="text-xs text-alert-warning"
					>
						Password tidak boleh kurang dari 8 atau lebih dari 20
						karakter
					</label>
				)}
          </div>
        </div>

      {/* Pembuka Gabungan Asal Kota dan Asal Negara */}
        <div className="border border-black mt-1 flex flex-row">

        {/* Input Asal Kota */}
          <div className="border border-black w-[50%] me-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="Jakarta"
              type="text"
              value={city}
              label="Asal Kota"
              name="Asal Kota"
              onChange={(e) => setCity(e.target.value)}
              onBlur={() => handleCityValidation(city, setError)}
              isError={error.isCityError}
            />

          {/* Ketika Asal Kota Error */}
          {error && error.isCityError && (
					<label
						htmlFor="Asal Kota"
						className="text-xs text-alert-warning"
					>
						Kota tidak boleh kosong
					</label>
				)}

          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>

        {/* Input Asal Negara */}
          <div className="border border-black w-[50%] ms-1 flex justify-between">
          <div className="relative">
            <Input
              placeholder="Indonesia"
              type="text"
              value={country}
              label="Asal Negara"
              name="Asal Negara"
              onChange={(e) => setCountry(e.target.value)}
              onBlur={() => handleCountryValidation(country, setError)}
              isError={error.isCountryError}
            />

          {/* Ketika Asal Negara Error */}
          {error && error.isCountryError && (
					<label
						htmlFor="Asal Negara"
						className="text-xs text-alert-warning"
					>
						Negara tidak boleh kosong
					</label>
				)}

          <div className="absolute bottom-0 sm:ms-[12rem] ms-[9rem] mb-[0.9rem] ...">
            <CheckList />
          </div>
          </div>
          </div>

        </div>
      {/* Penutup Gabungan Asal Kota dan Asal Negara */}

      {/* Tombol Button */}
        <div className="border border-black h-[3.2rem] mt-5">
          <Button className="w-full">Daftar</Button>
        </div>
        <div className="border border-black mt-3 flex justify-center gap-[8px]">
        <h3>Sudah punya akun?</h3>
          <h3 className="text-darkblue-05 font-bold">Masuk di sini</h3>
      </div>
      {/* Penutup Tombol Button */}

      </div>
    </div>
  )
}

export default Test