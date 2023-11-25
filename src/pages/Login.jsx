import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const Login = () => {
  return (
    <div className="w-[452px] h-[348px] ">
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px]">Masuk</h1>
      <h3 className="font-poppins text-[12px] font-normal leading-[18px]">Email/No Telepon</h3>
      <div className="">
        <Input placeholder="Contoh: johndoe@gmail.com"/>
      </div>
      <div className="flex justify-between mt-[16px]">
        <h3 className="font-poppins text-[12px] font-normal leading-[18px] text-black">Password</h3>
        <h3 className="font-poppins text-[12px] font-normal leading-[18px] text-darkblue-05">Lupa Kata Sandi</h3>
      </div>
     <Input placeholder="Masukkan password" type="password"/>
      <div className="flex justify-center mt-[24px]">
      <Button className="w-[452px]">Masuk</Button>
      </div>
      <div className="flex justify-center mt-[40px] gap-[8px]">
        <h3>Belum punya akun?</h3>
        <h3 className="text-darkblue-05">Daftar di sini</h3>
      </div>
    </div>
  );
};

export default Login;
