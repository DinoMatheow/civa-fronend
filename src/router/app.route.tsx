import { createBrowserRouter } from "react-router";
import { HomePage } from "../bus/page/home/HomePage";
import { lazy } from "react";
import { CivaLayout } from "../layouts/CivaLayout";

const SearchPage = lazy(()=> import("../bus/page/search/SearchPage"));

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
  }
  
 
]);