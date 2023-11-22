import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<main className="flex h-screen">
			<section className="w-[55%]">
				<Outlet />
			</section>
			<aside className="w-[45%] h-full bg-darkblue-05 grid place-content-center">
				<h1 className="text-3xl font-bold text-white">
					Pragos Academy
				</h1>
			</aside>
		</main>
	);
};

export default AuthLayout;
