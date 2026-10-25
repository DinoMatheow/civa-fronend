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
 
      {/* Removemos max-w-6xl y px-4 de aquí para permitir dos columnas fluidas */}
      <main className="flex-1 bg-gray-50 py-6">
        <Outlet />
      </main>

      <CustomFooter />
    </div>
  );
};