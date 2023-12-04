import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './OTP.css';
import clsx from "clsx";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorTlp, setIsErrorTlp] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorCity, setIsErrorCity] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkTlp, setCheckTlp] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigate = useNavigate();

  const handleName = () => {
    if (name.length >= 2) {
      setCheckName(true);
      setIsErrorName(false);
    } else {
      setCheckName(false);
      setIsErrorName(true);
    }
    return;
  };

  const handleEmail = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCheckEmail(true);
      setIsErrorEmail(false);
    } else {
      setIsErrorEmail(true);
    }
  };

  const handlephone = () => {
    if (phone.length >= 11) {
      setCheckTlp(true);
      setIsErrorTlp(false);
    } else {
      setCheckTlp(false);
      setIsErrorTlp(true);
    }
  };

  const handlePassword = () => {
    if (password.length >= 8) {
      setIsErrorPassword(false);
    } else {
      setIsErrorPassword(true);
    }
  };

  const handleCity = () => {
    if (city.length >= 2) {
      setIsErrorCity(false);
      setIsButtonActive(true);
    } else {
      setIsErrorCity(true);
    }
  }

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

      await axios.request(config);

      navigate(`/auth/otp/${email}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div className="sm:w-[452px] w-[352px] h-[460px]">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">
        Daftar
      </h1>
      <div className="flex justify-between ">
        <Input
          placeholder="Budi"
          type="text"
          label="Nama"
          name="Nama"
          value={name}
          onChange={(e) => {
            handleName();
            setName(e.target.value.slice(0, 16));
          }}
          isError={isErrorName}
          className="w-[46%]"
        />
        {checkName && (
          <span className="top-[2.2rem] left-[-2rem] relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#188E55"/>
          </svg>
        </span>
        )}
          
        <div className="flex flex-col space-x-3">
        <label className="text-[14px] mb-1">Nomor Telepon</label>
        <input
        placeholder="08xxxxxxxxx"
        type="number"
        name="Nomor Telepon"
        value={phone}
        onChange={(e) => {
          handlephone();
          setphone(e.target.value.slice(0, 12));
        }}
        className={clsx(
          "kotax py-2 px-4 md:w-full w-[94%] h-[90%] rounded-xl border outline-none focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400",
          isErrorTlp ? "border-red-600" : "border-neutral-02"
        )}
      />
      </div>
      {checkTlp && (
          <span className="top-[2.2rem] left-[-2rem] relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#188E55"/>
          </svg>
        </span>
        )}  
      </div>
      <div className="flex">
        <Input
          placeholder="Contoh: johndoe@gmail.com"
          type="email"
          label="Email"
          name="Email"
          className="mt-3 w-full"
          value={email}
          onChange={(e) => {
            handleEmail();
            setEmail(e.target.value);
          }}
          isError={isErrorEmail}
        />
        {checkEmail && (
          <span className="md:top-[3rem] top-[3rem] md:left-[-2rem] left-[-2rem] relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#188E55"/>
          </svg>
        </span>
        )}
        </div>
      <Input
        placeholder="Buat Password"
        type="password"
        label="Buat Password"
        name="Buat Password"
        className="mt-3"
        value={password}
        onChange={(e) => {
          handlePassword();
          setPassword(e.target.value);
        }}
        isError={isErrorPassword}
      />
      <div className="flex justify-between mt-[14px]">
        <Input
          placeholder="Jakarta"
          type="text"
          label="Asal Kota"
          name="Asal Kota"
          value={city}
          onChange={(e) => {
            handleName();
            setcity(e.target.value.slice(0, 17));
          }}
          isError={isErrorName}
          className="w-[47%]"
        />
        <Input
          placeholder="Indonesia"
          type="text"
          label="Asal Negara"
          name="Asal Negara"
          value={country}
          onChange={(e) => {
            handleCity();
            setcountry(e.target.value.slice(0, 17));
          }}
          isError={isErrorCity}
          className="w-[49%]"
        />
        </div>
      <div className="md:mt-[24px] !ms-0">
      <Button
        className={`tombol ${isButtonActive ? "active" : ""} !ms-0 !w-full`}
        disabled={!isButtonActive}
        onClick={onSubmit}
      >
        Simpan
      </Button>
      </div>
      <div className="flex justify-center mt-[19px] gap-[8px]">
        <h3>Sudah punya akun?</h3>
        <Link to="/auth/login">
          <h3 className="text-darkblue-05 font-bold">Masuk di sini</h3>
        </Link>
      </div>
    </div>
  );
}

export default Register;
