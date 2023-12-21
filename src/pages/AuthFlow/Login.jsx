import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import toast from "react-hot-toast";
import { ValidationContext } from "@/context/ValidationContext";
import app from "@/lib/axiosConfig";

const Login = () => {
  const { handleEmailValidation, handlePasswordValidation } =
    useContext(ValidationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    isEmailError: false,
    isPasswordError: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let data = {
        email,
        password,
      };

      const response = await app.post("login", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });
      if (response.status === 200 && response.data.data == "[ROLE_ADMIN]") {
        setIsLoading(false);
        window.location.href = "/dashboard";
      } else if (
        response.status === 200 &&
        response.data.data == "[ROLE_USER]"
      ) {
        window.location.href = "/";
      }
      return;
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
      return;
    }
  };

  return (
    <div className="max-w-[452px] w-full">
      <h1 className="font-Montserrat text-2xl font-bold leading-9 text-darkblue-05 mb-6">
        Masuk
      </h1>
      <div className="">
        <Input
          placeholder="Contoh: johndoe@gmail.com"
          type="email"
          value={email}
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleEmailValidation(email, setError)}
        />
        {error && error.isEmailError && (
          <label htmlFor="email" className="text-xs text-alert-warning">
            Email tidak valid
          </label>
        )}
      </div>
      <div className="flex justify-between mt-[16px]">
        <label className="font-poppins text-sm mb-1 font-normal leading-[18px] text-black">
          Password
        </label>
        <Link to="/auth/reset">
          <label className="font-poppins text-xs font-normal leading-[18px] text-darkblue-05 mb-1 cursor-pointer">
            Lupa Kata Sandi
          </label>
        </Link>
      </div>
      <div className="">
        <Input
          placeholder="Masukkan password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => handlePasswordValidation(password, setError)}
        />
        {error && error.isPasswordError && (
          <label htmlFor="email" className="text-xs text-alert-warning">
            Password tidak boleh kurang dari 8 atau lebih dari 20 karakter
          </label>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Button
          className="w-full"
          onClick={onSubmit}
          loading={isLoading}
          loadingText="Memproses..."
        >
          Masuk
        </Button>
      </div>
      <div className="flex justify-center mt-10 gap-2">
        <h3>Belum punya akun?</h3>
        <Link to="/auth/register">
          <h3 className="text-darkblue-05 font-bold">Daftar di sini</h3>
        </Link>
      </div>
    </div>
  );
};

export default Login;
