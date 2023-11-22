import { Outlet } from 'react-router-dom';
import logo from '../assets/svg/Logo-Belajar.svg';

const AuthLayout = () => {
  return (
    <main className="flex h-screen">
      <section className="w-[55%] h-full grid place-content-center">
        <Outlet />
      </section>
      <aside className="w-[45%] h-full bg-darkblue-05 grid place-content-center">
        <img
          src={logo}
          alt="logo-belajar"
        />
      </aside>
    </main>
  );
};

export default AuthLayout;
