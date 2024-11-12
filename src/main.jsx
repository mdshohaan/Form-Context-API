import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import PrivateRoutes from "./components/PrivateRoutes";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Root from "./components/Root";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/orders",
        element: <PrivateRoutes><Orders/></PrivateRoutes>
      },
      {
        path:"/profile",
        element: <PrivateRoutes><Profile/></PrivateRoutes>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>
);
