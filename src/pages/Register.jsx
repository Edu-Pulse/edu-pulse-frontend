import { Link } from "react-router-dom"
import Button from "../components/UI/Button"
import Input from "../components/UI/Input"

function Register() {
  return (
    <div className="w-[452px] h-[460px]">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Daftar</h1>
      <div className="">
        <Input 
          placeholder="Nama Lengkap"
          type="text"
          label="Nama"
          name="Nama Lengkap"
        />
      </div>
      <div className="flex justify-between mt-[14px]">
      </div>
        <Input 
          placeholder="Contoh: johndee@gmail.com"
          type="email"
          label="Email"
          name="Email"
        />
      <div className="flex justify-between mt-[14px]">
      </div>
        <Input 
          placeholder="+62"
          type="text"
          label="Nomor Telepon"
          name="Nomor Telepon"
        />
      <div className="flex justify-between mt-[14px]">
      </div>
        <Input 
          placeholder="Buat Password" 
          type="password"
          label="Buat Password"
          name="Buat Password"
        />
      <div className="flex justify-center mt-[24px]">
        <Button className="w-[452px]">Daftar</Button>
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