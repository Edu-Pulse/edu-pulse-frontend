import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import UIElements from "./pages/UIElements";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
		{
			path: "/auth",
			element: <AuthLayout />,
			children: [
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "register",
					element: <Register />,
				},
			],
		},
		{
			path: "/ui-elements",
			element: <UIElements />,
		},
	]);
	return <RouterProvider router={routes} />;
};

export default App;
