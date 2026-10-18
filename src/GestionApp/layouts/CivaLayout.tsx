import { Outlet } from "react-router";
import { Navbar } from "../../components/custom/CustomNavbar";
import { CustomFooter } from "../../components/custom/CustomFooter";

 
export const CivaLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-20 bg-white shadow-md">

    <Navbar />
      </header>
 
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
        <CustomFooter />
     
    </div>
  );
};