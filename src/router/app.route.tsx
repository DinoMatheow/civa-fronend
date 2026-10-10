import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { CivaLayout } from "../layouts/CivaLayout";
import { HomePage } from "../GestionApp/page/home/Homepage";

const SearchPage = lazy(()=> import("../GestionApp/page/search/Searchpage").then(module => ({ default: module.SearchPage })));

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