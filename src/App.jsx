import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "@/layouts/HomeLayout";
import Home from "@/pages/Home";
import { Toaster } from "react-hot-toast";

// Auth Flow
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/AuthFlow/Login";
import Register from "@/pages/AuthFlow/Register";
import Otp from "@/pages/AuthFlow/OTP";
import ResetPassword from "@/pages/AuthFlow/ResetPassword";

// User Flow
import User from "@/pages/UserFlow/User";
import Notification from "@/pages/UserFlow/Notification";

// Class Flow
import Detail from "@/pages/ClassFlow/Detail";
import MyClass from "@/pages/ClassFlow/MyClass";
import ClassTopic from "@/pages/ClassFlow/ClassTopic";

// Admin Flow
import DashboardLayout from "@/layouts/DashboardLayout";
import LoginAdmin from "@/pages/AdminFlow/LoginAdmin";
import Dashboard from "@/pages/AdminFlow/Dashboard";
import KelolaKelas from "@/pages/AdminFlow/KelolaKelas";

// Payment Flow
import PaymentDetail from "@/pages/PaymentFlow/PaymentDetail";
import PaymentDetailSuccess from "@/pages/PaymentFlow/PaymentDetailSuccess";
import { ValidationContextProvider } from "./context/ValidationContext";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import NotLoggedIn from "./pages/NotLoggedIn";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";
import KelolaKelas2 from "./pages/AdminFlow/KelolaKelas2";
import Test3 from "./pages/Dropdown";
// import CourseSelect from "./pages/Test4";

const App = () => {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/my-class",
					element: <MyClass />,
				},
				{
					path: "/class-topic",
					element: <ClassTopic />,
				},
				{
					path: "/payment-pending/:code",
					element: <PaymentDetail />,
				},
				{
					path: "/payment-success",
					element: <PaymentDetailSuccess />,
				},
				{
					path: "/detail/:code",
					element: <Detail />,
				},
				{
					path: "/notifikasi",
					element: <Notification />,
				},
				{
					path: "/user",
					element: <User />,
				},
				{
					path: "/search/:input",
					element: <Search />,
				},
				{
					path: "/not-logged-in",
					element: <NotLoggedIn />,
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
				{
					path: "reset",
					element: <ResetPassword />,
				},
				{
					path: "otp/:email",
					element: <Otp />,
				},
			],
		},
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					index: true,
					element: <Dashboard />,
				},
				{
					path: "kelolakelas",
					element: <KelolaKelas />,
				},
        {
					path: "kelolakelas2",
					element: <KelolaKelas2 />,
				},
			],
		},
		{
			path: "/admin",
			element: <LoginAdmin />,
		},
    {
			path: "/test",
			element: <Test />,
		},
		{
			path: "/test2",
			element: <Test2 />,
		},
		{
			path: "/test3",
			element: <Test3 />,
		},
		// {
		// 	path: "/test4",
		// 	element: <CourseSelect />,
		// },
	]);
	return (
		<ValidationContextProvider>
			<Toaster position="bottom-center" reverseOrder={false} />
			<RouterProvider router={routes} />
		</ValidationContextProvider>
	);
};

export default App;