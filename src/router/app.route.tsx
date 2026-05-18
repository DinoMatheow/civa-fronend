import { createBrowserRouter } from "react-router";
import { HomePage } from "../bus/page/home/HomePage";
// import { SearchPage } from "../bus/page/search/SearchPage";
import { BusLayouts } from "../bus/layouts/BusLayouts";
import { lazy } from "react";

const SearchPage = lazy(()=> import("../bus/page/search/SearchPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BusLayouts />,
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