import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ValidationContext } from "@/context/ValidationContext";
import axios from "axios";
import toast from "react-hot-toast";

import toast from "react-hot-toast";
function Register() {
  const {
    handleNameValidation,
    handleEmailValidation,
    handlePhoneValidation,
    handlePasswordValidation,
    handleCityValidation,
    handleCountryValidation,
  } = useContext(ValidationContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState({
    isEmailError: false,
    isNameError: false,
    isNameEmpty: false,
    isNameContainNumber: false,
    isPhoneError: false,
    isPhoneEmpty: false,
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
          Accept: "*/*",
        },
        data: data,
      };

      const response = await axios.request(config);

      console.log(response);
      if (response.data.error === true) {
        toast.error(response.data.data);
      } else {
        navigate(`/auth/otp/${email}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[452px] w-full">
      {/* Tag Daftar */}
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">
        Daftar
      </h1>

      {/* Pembuka Gabungan Nama dan Nomor Telepon */}
      <div className="mt-1 flex">
        {/* Input Nama */}
        <div className="w-1/2 me-1 flex justify-between">
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
            {error && error.isNameEmpty ? (
              <label
                htmlFor="Nomor Telepon"
                className="text-xs text-alert-warning"
              >
                Nama tidak boleh kosong
              </label>
            ) : error.isNameError ? (
              <label
                htmlFor="Nomor Telepon"
                className="text-xs text-alert-warning"
              >
                Nama tidak boleh kurang dari 2 karakter
              </label>
            ) : (
              error.isNameContainNumber && (
                <label
                  htmlFor="Nomor Telepon"
                  className="text-xs text-alert-warning"
                >
                  Nama tidak boleh mengandung angka
                </label>
              )
            )}
          </div>
        </div>

        {/* Input Nomor Telepon */}
        <div className="w-1/2 ms-1 flex justify-between">
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
            {error && error.isPhoneEmpty ? (
              <label
                htmlFor="Nomor Telepon"
                className="text-xs text-alert-warning"
              >
                Nomor tidak boleh kosong
              </label>
            ) : (
              error.isPhoneError && (
                <label
                  htmlFor="Nomor Telepon"
                  className="text-xs text-alert-warning"
                >
                  Nomor tidak boleh kurang dari 10 atau lebih dari 14 digit
                </label>
              )
            )}
          </div>
        </div>
      </div>
      {/* Penutup Gabungan Nama dan Nomor Telepon */}

      {/* Input Email */}
      <div className="mt-1 ">
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
        </div>

        {/* Ketika Email Error */}
        {error && error.isEmailError && (
          <label htmlFor="email" className="text-xs text-alert-warning">
            Email tidak valid
          </label>
        )}
      </div>

      {/* Input Password */}
      <div className="mt-1">
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
            <label htmlFor="email" className="text-xs text-alert-warning">
              Password tidak boleh kurang dari 8 atau lebih dari 20 karakter
            </label>
          )}
        </div>
      </div>

      {/* Pembuka Gabungan Asal Kota dan Asal Negara */}
      <div className="mt-1 flex">
        {/* Input Asal Kota */}
        <div className="w-1/2 me-1 flex justify-between">
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
              <label htmlFor="Asal Kota" className="text-xs text-alert-warning">
                Kota tidak boleh kosong
              </label>
            )}
          </div>
        </div>

        {/* Input Asal Negara */}
        <div className="w-1/2 ms-1 flex justify-between">
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
          </div>
        </div>
      </div>

      {/* Tombol Button */}
      <div className="mt-5">
        <Button onClick={onSubmit} className="w-full">
          Daftar
        </Button>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        <h3>Sudah punya akun?</h3>
        <Link to="/auth/login" className="text-darkblue-05 font-bold">
          Masuk di sini
        </Link>
      </div>
      {/* Penutup Tombol Button */}
    </div>
  );
}

export default Register;
