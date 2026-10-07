import { User } from "lucide-react";
import { Outlet } from "react-router";
import { TripSearchBar } from "../bus/components/TripSearchBar";

const footerColumns = [
  {
    title: "¿Tienes dudas?",
    links: ["Términos y condiciones", "TyC - Promoción", "Preguntas frecuentes"],
  },
  {
    title: "Soporte y ayuda",
    links: ["Libro de reclamaciones", "Centro de ayuda", "Políticas de privacidad"],
  },
];
 
const socials = ["in", "f", "ig"];
 
export const CivaLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-20 bg-white shadow-md">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between pt-3">
            <span className="text-3xl font-black italic tracking-tight text-[#572a85]">CIVA</span>
            <button
              aria-label="Mi cuenta"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#572a85] text-white"
            >
              <User size={20} />
            </button>
          </div>
          <TripSearchBar />
        </div>
      </header>
 
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
 
      <footer className="rounded-t-3xl bg-[#572a85] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <span className="text-3xl font-black italic">CIVA</span>
            <p className="font-bold">Llámanos: 418 1111</p>
            <p className="font-bold">Encuéntranos en</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-bold text-[#572a85]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
 
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h3 className="font-bold">{col.title}</h3>
              <ul className="space-y-2 text-sm text-white/90">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
 
          <div className="space-y-3">
            <h3 className="font-bold">Información de contacto</h3>
            <p className="font-bold">EconoCiva, SuperCiva</p>
            <p className="text-sm text-white/90">Av. Paseo de la República Nro. 569, La Victoria</p>
          </div>
        </div>
      </footer>
    </div>
  );
};