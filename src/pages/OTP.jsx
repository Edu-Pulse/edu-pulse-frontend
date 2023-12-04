import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Otp = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-[452px] w-[352px] h-[348px]">
      <button onClick={() => navigate("/auth/register")} className="h-10">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 mb-[24px] mt-4">
        Masukkan OTP
      </h1>
      <p className="font-poppins text-center text-[14px] mb-1 font-bold leading-[18px] text-black">
        Ketik 4 digit kode yang dikirimkan ke J*****@gmail.com
      </p>
      <div className="flex justify-center gap-5 mt-5">
        <input className="py-1 ps-3.5 w-10 h-10 rounded-xl border-2 border-darkblue-05 focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400" />
        <input className="py-1 ps-3.5 w-10 h-10 rounded-xl border-2 border-darkblue-05 focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400" />
        <input className="py-1 ps-3.5 w-10 h-10 rounded-xl border-2 border-darkblue-05 focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400" />
        <input className="py-1 ps-3.5 w-10 h-10 rounded-xl border-2 border-darkblue-05 focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400" />
      </div>
      <p className="font-poppins text-center text-[14px] mt-[24px] font-normal leading-[18px] text-black">
        Masukkan Kode OTP dengan Benar!
      </p>
      <div className="flex justify-center mt-[48px]">
        <Button className="w-[452px]">Simpan</Button>
      </div>
    </div>
  );
};

export default Otp;
