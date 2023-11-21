import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	// TODO: Buat layout untuk halaman utama (terutama user), masukkan header dan footer disini
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default HomeLayout;
