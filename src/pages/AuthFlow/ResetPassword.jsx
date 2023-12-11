import { useContext, useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { ValidationContext } from "../../context/ValidationContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { handlePasswordValidation } = useContext(ValidationContext);
  const [password, setPassword] = useState("");
  const [kode, setKode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    isPasswordError: false,
    isPasswordSimilar: true,
  });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let config = {
        method: "POST",
        url: `https://pragos-academy-api-production.up.railway.app/reset-password?email=${email}&verificationCode=${kode}&newPassword=${password}`,
      };
      const response = await axios.request(config);
      if (response.data.error == true) {
        toast.error(response.data.data);
      } else {
        navigate(`/`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   const handleResetPassword = () => {};
  return (
    <div className="max-w-[452px] w-full">
      <h1 className="font-Montserrat text-2xl font-bold leading-9 text-darkblue-05 mb-6">
        Reset Password
      </h1>
      <div className="mb-4">
        <Input
          placeholder="********"
          type="password"
          label="Masukkan Password Baru"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => handlePasswordValidation(password, setError)}
          isError={error && error.isPasswordError}
        />
        {error && error.isPasswordError && (
          <label htmlFor="password" className="text-xs text-alert-warning">
            Password tidak boleh kurang dari 8 atau lebih dari 20 karakter
          </label>
        )}
      </div>
      <Input
        placeholder="Email"
        type="text"
        label="Masukkan Email"
        name="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>

      <Input
        type="number"
        label="Masukkan Kode"
        name="newpassword"
        value={kode}
        onChange={(e) => setKode(e.target.value)}
      />
      <div className="flex justify-center mt-6">
        <Button className="w-full" onClick={onSubmit}>
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;
