import {  useState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useNavigate } from 'react-router-dom';

function Reset() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.length >= 8) {
      navigate('/auth/login')
    } else {
      setIsError(true)
    }
  };

  return (
    <div className="w-[452px] h-[348px] ">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Reset Password</h1>
        <Input 
          placeholder="********" 
          type="password"
          label="Masukkan Password Baru"
          name="password"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          isError={isError}
        />
      <div className="flex justify-between mt-[16px]">
      </div>
        <Input 
          placeholder="********" 
          type="password"
          label="Ulangi Password Baru"
          name="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          isError={isError}
          />
      <div className="flex justify-center mt-[24px]">
      <Button className="w-[452px]" onClick={handleLogin}>Simpan</Button>
      </div>
      <div style={isError ? { display: 'block'} : { display: 'none' }} className="mt-[80px] text-center py-[12px] px-[24px] rounded-lg bg-alert-warning text-white scale-y-1 origin-bottom transition-transform duration-300">
      Password min 8 karakter!
      </div>
    </div>
  )
}

export default Reset