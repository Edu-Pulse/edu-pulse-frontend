import errorImage from "@/assets/svg/404.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderMobile from "@/components/UI/HeaderMobile";
import Header from "@/components/UI/Header";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

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
					<img src={errorImage} alt="404 Not Found" />
					<h1>Oops! Halaman yang kamu cari tidak ditemukan</h1>
					<p
						className="flex items-center justify-center mt-4 text-darkblue-05 font-semibold hover:underline underline-offset-2 hover:cursor-pointer"
						onClick={() => navigate(-1)}
					>
						<ArrowLeftIcon className="w-5 h-5 mr-2" />
						<span>Kembali ke halaman sebelumnya</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default NotFound;
