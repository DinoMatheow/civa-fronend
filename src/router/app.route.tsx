import { createBrowserRouter } from "react-router";
import { HomePage } from "../bus/page/home/HomePage";
import { SearchPage } from "../bus/page/search/SearchPage";
import { BusLayouts } from "../bus/layouts/BusLayouts";


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