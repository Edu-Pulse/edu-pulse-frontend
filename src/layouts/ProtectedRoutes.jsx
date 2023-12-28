import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe } from "../lib/getMe";
import toast from "react-hot-toast";

function ProtectedRoutes({ children }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getMe(setUser);
    };
    return () => fetchData();
  }, []);
  console.log(user);
  if (user.name !== "Admin") {
    toast.error("Anda tidak punya otoritas");
    navigate("/");
  } else {
    return children;
  }
}

export default ProtectedRoutes;
