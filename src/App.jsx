import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import UIElements from "./pages/UIElements";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import User from "./pages/User";
import Notification from "./pages/Notification";
import Reset from "./pages/Reset";
import Admin from "./pages/Admin";
import Dashboard from "./components/Admin/Dashboard";
import KelolaKelas from "./components/Admin/KelolaKelas";
import MyClass from "./pages/MyClass";
import ClassTopic from "./pages/ClassTopic";
import PaymentDetail from "./pages/PaymentDetail";
import PaymentDetailSuccess from "./pages/PaymentDetailSuccess";
import DashboardLayout from "./layouts/DashboardLayout";
import Otp from "./pages/OTP";

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
        {
          path: "/my-class",
          element: <MyClass />,
        },
        {
          path: "/class-topic",
          element: <ClassTopic />,
        },
        {
          path: "/payment-pending",
          element: <PaymentDetail />,
        },
        {
          path: "/payment-success",
          element: <PaymentDetailSuccess />,
        },
        {
          path: "/detail",
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
          element: <Reset />,
        },
        {
          path: "otp",
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
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/ui-elements",
      element: <UIElements />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
