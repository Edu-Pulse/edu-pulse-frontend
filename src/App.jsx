import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import UIElements from "./pages/UIElements";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import MyClass from "./pages/MyClass";
import ClassTopic from "./pages/ClassTopic";
import PaymentDetail from "./pages/PaymentDetail";
import PaymentDetailSuccess from "./pages/PaymentDetailSuccess";

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
