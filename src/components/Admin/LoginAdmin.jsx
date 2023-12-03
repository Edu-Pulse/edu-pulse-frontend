import logo from '../../assets/svg/Logo-Belajar.svg';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../UI/Button";
import Input from "../UI/Input";
import userData from "../../json/users.json";


function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(userData.users);
  }, []);

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    
    user ? navigate('/dashboard') : (console.log('Login gagal'), setIsError(true));

  };
  return (
    <main className="flex h-screen">
    <aside className="md:grid hidden w-[35%] h-full bg-darkblue-05 place-content-center">
      <img
        src={logo}
        alt="logo-belajar"
        className="w-[135px] h-[150px]"
        onClick={() => navigate('/')}
      />
    </aside>
    <section className="md:w-[65%] w-full h-full grid place-content-center">
    <div className="sm:w-[452px] w-[352px] h-[348px] ">
      <h1 className="text-center font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Login</h1>
        <Input 
          placeholder="ID Admin" 
          type="email"  
          value={email}
          label="ID Admin"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          isError={isError}
        />
      <div className="flex justify-between mt-[16px]">
        <label className="font-poppins text-[14px] mb-1 font-normal leading-[18px] text-black">Password</label>
        <label className="font-poppins text-[13px] font-normal leading-[18px] text-darkblue-05 mb-1">Lupa Kata Sandi</label>
      </div>
        <Input 
          placeholder="Masukkan password" 
          type="password" value={password} 
          onChange={(e) => setPassword(e.target.value)}
          isError={isError}
          />
      <div className="flex justify-center mt-[24px]">
      <Button className="w-[452px]" onClick={handleLogin}>Masuk</Button>
      </div>
      <div style={isError ? { display: 'block'} : { display: 'none' }} className="mt-[80px] text-center py-[12px] px-[24px] rounded-lg bg-alert-warning text-white scale-y-1 origin-bottom transition-transform duration-300">
      Email / Password Salah!
      </div>
    </div>
    </section>
  </main>
  )
}

export default LoginAdmin