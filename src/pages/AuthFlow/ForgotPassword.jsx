import { useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "@/lib/baseUrl";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  console.log(email);

  const handleEmail = async (e) => {
    e.preventDefault();

    try {
      let config = {
        method: "GET",
        url: `${BASE_URL}/forgot-password/${email}`,
      };
      const response = await axios.request(config);
      if (response.status === 200) {
        toast.success("Tautan Ganti Password Telah Dikirim!");
      }
    } catch (error) {
      toast.error("Unexpected Error!");
    }
  };

  return (
    <div className="max-w-[452px] w-full">
      <h1 className="font-Montserrat text-2xl font-bold leading-9 text-darkblue-05 mb-6">
        Forgot Password
      </h1>
      <div className="mb-4">
        <Input
          placeholder="Email"
          type="text"
          label="Masukkan Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <div className="flex justify-center mt-6">
          <Button className="w-full" onClick={handleEmail}>
            Send Reset Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
