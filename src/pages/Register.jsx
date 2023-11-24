import Button from "../components/UI/Button"
import Input from "../components/UI/Input"

function Register() {
  return (
    <div className="w-[452px] h-[460px]">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Daftar</h1>
      <h3 className="font-poppins text-[12px] font-normal leading-[18px]">Nama</h3>
      <div className="">
        <Input placeholder="Nama Lengkap"/>
      </div>
      <div className="flex justify-between mt-[16px]">
        <h3 className="font-poppins text-[12px] font-normal leading-[18px] text-black">Email</h3>
      </div>
      <Input placeholder="Contoh: johndee@gmail.com"/>
      <div className="flex justify-between mt-[16px]">
        <h3 className="font-poppins text-[12px] font-normal leading-[18px] text-black">Nomor Telepon</h3>
      </div>
      <Input placeholder="+62"/>
      <div className="flex justify-between mt-[16px]">
        <h3 className="font-poppins text-[12px] font-normal leading-[18px] text-black">Buat Password</h3>
      </div>
      <Input placeholder="Buat Password" type="password"/>
      <div className="flex justify-center mt-[24px]">
        <Button className="w-[452px]">Daftar</Button>
      </div>
      <div className="flex justify-center mt-[40px] gap-[8px]">
        <h3>Belum punya akun?</h3>
        <h3 className="text-darkblue-05">Daftar di sini</h3>
      </div>
    </div>
  )
}

export default Register