import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {
	const { user } = useContext(AuthContext);

	return user ? <Outlet /> : <Navigate to="/not-logged-in" />;
};

export default PrivateRoutes;
