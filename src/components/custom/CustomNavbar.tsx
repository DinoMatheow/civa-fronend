import { useState } from "react";

const links = [
  { label: "Inicio", href: "/", active: true },
  { label: "Servicios", href: "#servicios", dropdown: true },
  { label: "Servicios Corporativos", href: "#corporativos" },
  { label: "Contacto", href: "#contacto" },
  { label: "Rastrea tu envío", href: "#rastreo" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Ir al inicio">
          <svg viewBox="0 0 40 24" className="h-6 w-9 text-fuchsia-700" fill="currentColor">
            <path d="M2 20 L14 4 H38 L26 20 Z" />
          </svg>
          <span className="text-3xl font-black italic tracking-tight text-purple-800">
            CIVA
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 text-[13px] font-medium md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`flex items-center gap-1 transition-colors hover:text-pink-600 ${
                  link.active ? "text-pink-600" : "text-purple-900"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <svg viewBox="0 0 10 6" className="h-1.5 w-2.5" fill="currentColor">
                    <path d="M0 0 L10 0 L5 6 Z" />
                  </svg>
                )}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              aria-label="Idioma"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-200 bg-purple-50 text-xs"
            >
              🌐
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded p-2 text-purple-900 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
          
      {/* Menú móvil */}
      {open && (
        <ul className="space-y-1 border-t border-purple-100 bg-white px-6 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`block py-2 text-sm font-medium ${
                  link.active ? "text-pink-600" : "text-purple-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};