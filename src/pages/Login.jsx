import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        email,
        password,
      });
      let config = {
        method: "post",
        url: `https://pragos-academy-api-production.up.railway.app/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      navigate("/");

      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    }}

  return (
    <div className="sm:w-[452px] w-[352px] h-[348px]">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Masuk</h1>
        <Input 
          placeholder="Contoh: johndoe@gmail.com" 
          type="email"  
          value={email}
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      <div className="flex justify-between mt-[16px]">
        <label className="font-poppins text-[14px] mb-1 font-normal leading-[18px] text-black">
          Password
        </label>
        <Link to="/auth/reset">
          <label className="font-poppins text-[13px] font-normal leading-[18px] text-darkblue-05 mb-1 cursor-pointer">
            Lupa Kata Sandi
          </label>
        </Link>
      </div>
        <Input 
          placeholder="Masukkan password" 
          type="password" value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
      <div className="flex justify-center mt-[24px]">
      <Button className="w-[452px]" onClick={onSubmit}>Masuk</Button>
      </div>
      <div className="flex justify-center mt-[40px] gap-[8px]">
        <h3>Belum punya akun?</h3>
        <Link to="/auth/register">
          <h3 className="text-darkblue-05 font-bold">Daftar di sini</h3>
        </Link>
      </div>
      {/* <div style={isError ? { display: 'block'} : { display: 'none' }} className="mt-[80px] text-center py-[12px] px-[24px] rounded-lg bg-alert-warning text-white scale-y-1 origin-bottom transition-transform duration-300">
      Email / Password Salah!
      </div> */}
    </div>
  );
};

export default Login;
