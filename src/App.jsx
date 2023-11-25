import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import UIElements from "./pages/UIElements";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

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
          path: "/detail",
          element: <Detail />,
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
