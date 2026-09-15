import { RouterProvider } from "react-router";
import { router } from "./router/app.route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();





export const CivaApp =  () => {

 return(
  <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />

  </QueryClientProvider>
 )
 
}