import { RouterProvider } from "react-router";
import { router } from "./router/app.route";

export const CivaApp =  () => {

 return(
  <>
    <RouterProvider router={router} />
  </>
 )
 
}