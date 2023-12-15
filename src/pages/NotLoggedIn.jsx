import errorImage from "@/assets/svg/login.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderMobile from "@/components/HeaderMobile";
import Header from "@/components/Header";

import { ShieldExclamationIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
	const [isMobile, setIsMobile] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);
	return (
		<>
			{isMobile ? <HeaderMobile /> : <Header />}
			<div className="h-screen w-full grid place-content-center">
				<div className="text-center">
					<img src={errorImage} alt="Unauthorized" />
					<h1>Oops! Kamu belum log in ke dalam website</h1>
					<p
						className="flex items-center justify-center text-darkblue-05 font-semibold hover:underline underline-offset-2 hover:cursor-pointer"
						onClick={() => navigate("/auth/login")}
					>
						<ShieldExclamationIcon className="w-5 h-5 mr-2" />
						<span>Log in dulu yuk</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default NotFound;
