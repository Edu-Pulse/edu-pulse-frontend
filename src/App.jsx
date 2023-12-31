import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ValidationContextProvider } from "./context/ValidationContext";
import { Toaster } from "react-hot-toast";

import HomeLayout from "@/layouts/HomeLayout";
import Home from "@/pages/Home";

// Auth Flow
import AuthLayout from "@/layouts/AuthLayout";
const Login = lazy(() => import("@/pages/AuthFlow/Login"));
const Register = lazy(() => import("@/pages/AuthFlow/Register"));
const Otp = lazy(() => import("@/pages/AuthFlow/OTP"));
const ResetPassword = lazy(() => import("@/pages/AuthFlow/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/AuthFlow/ForgotPassword"));

// User Flow
const User = lazy(() => import("@/pages/UserFlow/User"));
const Notification = lazy(() => import("@/pages/UserFlow/Notification"));

// Class Flow
const Detail = lazy(() => import("@/pages/ClassFlow/Detail"));
const MyClass = lazy(() => import("@/pages/ClassFlow/MyClass"));
const ClassTopic = lazy(() => import("@/pages/ClassFlow/ClassTopic"));

// Admin Flow
import DashboardLayout from "@/layouts/DashboardLayout";
const LoginAdmin = lazy(() => import("@/pages/AdminFlow/LoginAdmin"));
const Dashboard = lazy(() => import("@/pages/AdminFlow/Dashboard"));
const KelolaKelas = lazy(() => import("@/pages/AdminFlow/KelolaKelas"));

// Payment Flow
const PaymentDetail = lazy(() => import("@/pages/PaymentFlow/PaymentDetail"));
const PaymentDetailSuccess = lazy(() =>
	import("@/pages/PaymentFlow/PaymentDetailSuccess")
);
const NotFound = lazy(() => import("./pages/NotFound"));
const Search = lazy(() => import("./pages/Search"));
const NotLoggedIn = lazy(() => import("./pages/NotLoggedIn"));

import PageLoading from "./components/UI/PageLoading";

const App = () => {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: (
				<Suspense fallback={<PageLoading />}>
					<NotFound />
				</Suspense>
			),
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/my-class",
					element: (
						<Suspense fallback={<PageLoading />}>
							<MyClass />
						</Suspense>
					),
				},
				{
					path: "/class-topic",
					element: (
						<Suspense fallback={<PageLoading />}>
							<ClassTopic />
						</Suspense>
					),
				},
				{
					path: "/payment-pending/:code",
					element: (
						<Suspense fallback={<PageLoading />}>
							<PaymentDetail />
						</Suspense>
					),
				},
				{
					path: "/payment-success",
					element: (
						<Suspense fallback={<PageLoading />}>
							<PaymentDetailSuccess />
						</Suspense>
					),
				},
				{
					path: "/detail/:code",
					element: (
						<Suspense fallback={<PageLoading />}>
							<Detail />
						</Suspense>
					),
				},
				{
					path: "/notifikasi",
					element: (
						<Suspense fallback={<PageLoading />}>
							<Notification />
						</Suspense>
					),
				},
				{
					path: "/user",
					element: (
						<Suspense fallback={<PageLoading />}>
							<User />
						</Suspense>
					),
				},
				{
					path: "/search/:input",
					element: (
						<Suspense fallback={<PageLoading />}>
							<Search />
						</Suspense>
					),
				},
				{
					path: "/not-logged-in",
					element: (
						<Suspense fallback={<PageLoading />}>
							<NotLoggedIn />
						</Suspense>
					),
				},
			],
		},
		{
			path: "/auth",
			element: <AuthLayout />,
			children: [
				{
					path: "login",
					element: (
						<Suspense fallback={<PageLoading />}>
							<Login />
						</Suspense>
					),
				},
				{
					path: "register",
					element: (
						<Suspense fallback={<PageLoading />}>
							<Register />
						</Suspense>
					),
				},
				{
					path: "reset/:email",
					element: (
						<Suspense fallback={<PageLoading />}>
							<ResetPassword />
						</Suspense>
					),
				},
				{
					path: "otp/:email",
					element: (
						<Suspense fallback={<PageLoading />}>
							<Otp />
						</Suspense>
					),
				},
				{
					path: "forgotPassword",
					element: (
						<Suspense fallback={<PageLoading />}>
							<ForgotPassword />
						</Suspense>
					),
				},
			],
		},
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<PageLoading />}>
							<Dashboard />
						</Suspense>
					),
				},
				{
					path: "kelolakelas",
					element: (
						<Suspense fallback={<PageLoading />}>
							<KelolaKelas />
						</Suspense>
					),
				},
			],
		},
		{
			path: "/admin",
			element: (
				<Suspense fallback={<PageLoading />}>
					<LoginAdmin />
				</Suspense>
			),
		},
	]);

	return (
		<ValidationContextProvider>
			<Toaster position="bottom-center" reverseOrder={false} />
			<RouterProvider router={routes} />
		</ValidationContextProvider>
	);
};

export default App;
