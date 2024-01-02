import { useContext, useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { ValidationContext } from "@/context/ValidationContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "@/lib/baseUrl";

function ResetPassword() {
  const { handlePasswordValidation } = useContext(ValidationContext);
  const [password, setPassword] = useState("");
  const [kode, setKode] = useState("");
  const [error, setError] = useState({
    isPasswordError: false,
    isPasswordSimilar: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { email } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let config = {
        method: "POST",
        url: `${BASE_URL}/reset-password?email=${email}&verificationCode=${kode}&newPassword=${password}`,
      };
      const response = await axios.request(config);
      if (response.data.error == true) {
        setIsLoading(false);
        toast.error(response.data.data);
      } else {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate(`/auth/login`);
        }, 2000);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const buttonDisabled = password?.length <= 8;

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
        type="number"
        label="Masukkan Kode"
        name="newpassword"
        value={kode}
        onChange={(e) => setKode(e.target.value)}
      />
      <div className="flex justify-center mt-6">
        <Button
          className={
            buttonDisabled
              ? "!bg-gray-300 !cursor-not-allowed w-full"
              : " w-full"
          }
          disable={buttonDisabled}
          loading={isLoading}
          loadingText="Memproses..."
          onClick={handleReset}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;
