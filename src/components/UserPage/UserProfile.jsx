import { PhotoIcon } from "@heroicons/react/24/outline";
import Input from "../UI/Input";
import { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const UserProfile = () => {
  const { user, token } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [country, setCountry] = useState(user.country);
  const [city, setCity] = useState(user.city);
  console.log(user);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.phone);
    setCountry(user.country);
    setCity(user.city);
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        name,
        email,
        phoneNumber,
        country,
        city,
      });

      let config = {
        method: "post",
        url: `https://pragos-academy-api-production.up.railway.app/user/update`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };
      await axios.request(config);
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-2 border-darkblue-05"></div>
        <div className="absolute right-1 bottom-1 p-1 bg-white hover:cursor-pointer hover:bg-blue-50">
          <PhotoIcon className="w-5 h-5 text-darkblue-05" />
        </div>
      </div>
      <form className="w-full space-y-4">
        <Input
          placeholder="John Doe"
          label="Nama"
          type="text"
          className="w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="johndoe@gmail.com"
          label="Email"
          type="email"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="+62 8112233"
          label="Nomor Telepon"
          type="number"
          className="w-full"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder="Masukkan negara tempat tinggal anda"
          label="Negara"
          type="text"
          className="w-full"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Input
          placeholder="Masukkan kota tempat tinggal anda"
          label="Kota"
          type="text"
          className="w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button size="lg" className="w-full" onClick={onSubmit}>
          Simpan Profil Saya
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
