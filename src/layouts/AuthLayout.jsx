import { Outlet } from "react-router-dom";
import logo from "@/assets/svg/Logo-Belajar.svg";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
	const navigate = useNavigate();
	return (
		<main className="flex h-screen">
			<section className="container md:w-[55%] w-full h-full flex items-center justify-center">
				<Outlet />
			</section>
			<aside className="md:grid hidden w-[45%] h-full bg-darkblue-05 place-content-center">
				<img
					src={logo}
					alt="logo-belajar"
					onClick={() => navigate("/")}
				/>
			</aside>
		</main>
	);
};

export default AuthLayout;
