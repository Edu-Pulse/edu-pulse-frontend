import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/svg/Logo-Belajar.svg";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <main className="flex h-screen">
      <section className="md:w-[55%] w-full h-full grid place-content-center">
        <Outlet />
      </section>
      <aside className="w-[45%] h-full bg-darkblue-05 place-content-center md:grid hidden">
        <img src={logo} alt="logo-belajar" onClick={() => navigate("/")} />
      </aside>
    </main>
  );
};

export default AuthLayout;
