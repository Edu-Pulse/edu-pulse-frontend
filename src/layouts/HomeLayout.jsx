import { Outlet } from "react-router-dom";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { useEffect, useState } from "react";
import HeaderMobile from "@/components/UI/HeaderMobile";

const HomeLayout = () => {
	const [isMobile, setIsMobile] = useState(null);
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
			<Outlet />
			<Footer />
		</>
	);
};

export default HomeLayout;
