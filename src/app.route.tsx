import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";
import { CivaLayout } from "./GestionApp/layouts/CivaLayout";
import { HomePage } from "./GestionApp/page/home/Homepage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";

const SearchPage = lazy(()=> import("./GestionApp/page/search/Searchpage"));
const AuthLayout = lazy(()=> import("./auth/layouts/AuthLayout"));
const AdminLayout = lazy(()=> import("./admin/layouts/AdminLayout"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <CivaLayout />,
    children: [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  }

    ]
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,

      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      }
    ]
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      }
    ]
  },


  {
    path: "*",
    element: <Navigate to="/" />,
  }
  
 
]);