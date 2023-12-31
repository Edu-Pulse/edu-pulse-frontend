import { Outlet } from "react-router-dom";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
	const navigate = useNavigate();
	return (
		<main className="flex h-screen">
			<section className="container md:w-[55%] w-full h-full flex items-center justify-center">
				<Outlet />
			</section>
			<aside className="md:grid hidden w-[45%] h-full bg-darkblue-05 place-content-center">
				<div
					className="flex gap-4 items-center justify-center text-white"
					onClick={() => navigate("/")}
				>
					<AcademicCapIcon className="h-24 w-24" />
					<span className="text-7xl font-semibold">EduPulse</span>
				</div>
			</aside>
		</main>
	);
};

export default AuthLayout;
