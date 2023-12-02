import { Link } from "react-router-dom"
import Button from "../UI/Button"
import Input from "../UI/Input"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CheckList from "../UI/CheckList";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [noTlp, setNoTlp] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorTlp, setIsErrorTlp] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkTlp, setCheckTlp] = useState(false);
  const navigate = useNavigate();

  const handleName = () => {
    if (name.length >= 2) {
      setCheckName(true);
      setIsErrorName(false);
    } else {
      setCheckName(false);
      setIsErrorName(true);
    }
    return
  };

  const handleEmail = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCheckEmail(true);
      setIsErrorEmail(false);
    } else {
      setIsErrorEmail(true);
    }
  };

  const handleNoTlp = () => {
    if (noTlp.length >= 9) {
      setCheckTlp(true);
      setIsErrorTlp(false);
    } else {
      setCheckTlp(false);
      setIsErrorTlp(true);
    }
  }

  const handlePassword = () => {
    if (password.length >= 8) {
      setIsErrorPassword(false);
    } else {
      setIsErrorPassword(true);
    }
  }

  return (
    <div className="sm:w-[452px] w-[352px] h-[460px]">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Daftar</h1>
      <div className="">
        <Input 
          placeholder="Nama Lengkap"
          type="text"
          label="Nama"
          name="Nama Lengkap"
          value={name}
          onChange={(e) => {
            handleName();
            setName(e.target.value.slice(0, 30));
          }}
          isError={isErrorName}
        />
        {checkName && (
          <CheckList marginTop="[-1.9rem]"/>
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
            handleEmail();
            setEmail(e.target.value);
          }}
          isError={isErrorEmail}
        />
        {checkEmail && (
          <CheckList marginTop="[2.2rem]" />
        )}
      </div>
      <div className="flex justify-between mt-[14px]">
      </div>
        <Input 
          placeholder="08xxxxxxxxx"
          type="number"
          label="Nomor Telepon"
          name="Nomor Telepon"
          value={noTlp}
          onChange={(e) => {
            handleNoTlp();
            setNoTlp(e.target.value.slice(0, 13));
          }}
          isError={isErrorTlp}
        />
        {checkTlp && (
          <CheckList marginTop="[-1.9rem]"/>
        )}
      <div className="flex justify-between mt-[14px]">
      </div>
        <Input 
          placeholder="Buat Password" 
          type="password"
          label="Buat Password"
          name="Buat Password"
          value={password}
          onChange={(e) => {
            handlePassword();
            setPassword(e.target.value);
          }}
          isError={isErrorPassword}
        />
      <div className="flex justify-center mt-[24px]">
        <Button onClick={() => navigate('/auth/otp')} className="w-[452px]">Daftar</Button>
      </div>
      <div className="flex justify-center mt-[40px] gap-[8px]">
        <h3>Sudah punya akun?</h3>
        <Link to="/auth/login">
          <h3 className="text-darkblue-05 font-bold">Masuk di sini</h3>
        </Link>
      </div>
    </div>
  )
}

export default Register