import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

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
	]);
	return <RouterProvider router={routes} />;
};

export default App;
