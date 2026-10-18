import { BannerCiva } from "../../../shared/BannerCiva";
import { TripSearchBar } from "../../components/TripSearchBar";

const destinos = [
  { name: "Lima", image: "/images/lima.jpg", className: "col-span-2 row-span-2" },
  { name: "Trujillo", image: "/images/trujillo.jpg", className: "col-span-2" },
  { name: "Cusco", image: "/images/cusco.jpg", className: "col-span-1" },
  { name: "Huaraz", image: "/images/huaraz.jpg", className: "col-span-1" },
];

const beneficios = [
  { icon: "%", label: "Mejores tarifas" },
  { icon: "🎫", label: "Elige tu asiento" },
  { icon: "🖥", label: "Sube tus fotos" },
  { icon: "💳", label: "Opciones de pago" },
];

const serviciosCorporativos = [
  "Tarifa empresas",
  "CIVA Cargo",
  "Servicios especiales",
  "Encomiendas",
];

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ============ HERO ============ */}
      <section className="relative">
        <BannerCiva />
        <div className="relative h-56 overflow-hidden bg-purple-900 sm:h-64">
          <img
            src="/images/hero.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-700/60" />
          <p className="relative z-10 flex h-full items-center justify-end px-6 text-right text-2xl font-semibold italic text-white sm:px-16 sm:text-4xl">
            Aplican Términos y Condiciones 
        <TripSearchBar />
          </p>
        </div>

        {/* Buscador de pasajes (maqueta) */}
      </section>

      <main className="mx-auto max-w-5xl space-y-14 px-6 py-14">
        {/* ============ BANNER APP ============ */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1.1fr_1fr_1fr] md:px-8">
            {/* Texto + tiendas */}
            <div>
              <h2 className="text-lg font-extrabold leading-tight">
                ¡Descubre el nuevo CIVA!
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-white/90">
                Descarga nuestra app y comienza a disfrutar de la experiencia.
              </p>
              <div className="mt-5 flex gap-2">
                <a
                  href="#"
                  className="rounded border border-white/60 px-3 py-1.5 text-[10px] font-medium hover:bg-white/10"
                >
                  ▶ Google Play
                </a>
                <a
                  href="#"
                  className="rounded border border-white/60 px-3 py-1.5 text-[10px] font-medium hover:bg-white/10"
                >
                   App Store
                </a>
              </div>
            </div>

            {/* Beneficios */}
            <ul className="grid grid-cols-2 gap-5 text-center">
              {beneficios.map((b) => (
                <li key={b.label} className="flex flex-col items-center gap-1.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-sm">
                    {b.icon}
                  </span>
                  <span className="text-[10px] font-semibold leading-tight">
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mockup de celulares */}
            <div className="relative hidden h-44 md:block">
              <div className="absolute -bottom-16 left-6 h-56 w-28 rounded-2xl border-4 border-white bg-white p-1 shadow-xl">
                <div className="h-full rounded-xl bg-slate-100 p-2">
                  <p className="text-[8px] font-black italic text-purple-800">CIVA</p>
                  <div className="mt-2 space-y-1">
                    <div className="h-3 rounded bg-white" />
                    <div className="h-3 rounded bg-white" />
                    <div className="h-3 rounded bg-white" />
                    <div className="h-3 rounded bg-pink-600" />
                  </div>
                  <div className="mt-2 h-14 rounded bg-gradient-to-br from-amber-500 to-red-500" />
                </div>
              </div>
              <div className="absolute -bottom-16 left-24 h-56 w-28 rounded-2xl border-4 border-white bg-gradient-to-b from-pink-500 to-purple-700 shadow-xl">
                <p className="mt-16 text-center text-lg font-black italic text-white">
                  CIVA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DESTINOS POPULARES ============ */}
        <section>
          <h2 className="mb-5 text-center text-xs font-bold text-slate-700">
            Destinos populares
          </h2>

          <div className="grid auto-rows-[9rem] grid-cols-4 gap-2.5">
            {destinos.map((d) => (
              <a
                key={d.name}
                href="#"
                className={`group relative overflow-hidden rounded-xl bg-slate-300 ${d.className}`}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-bold text-white">
                  {d.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ============ SERVICIOS CORPORATIVOS ============ */}
        <section id="corporativos" className="md:pl-[12%]">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900">
            <img
              src="/images/corporativo.jpg"
              alt=""
              className="h-56 w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

            <h2 className="absolute left-6 top-6 text-xl font-extrabold leading-tight text-white">
              Servicios
              <br />
              Corporativos
            </h2>

            <ul className="absolute bottom-4 right-4 w-40 space-y-1.5 sm:w-44">
              {serviciosCorporativos.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="flex items-center justify-between rounded-lg bg-pink-600 px-3 py-2 text-[10px] font-bold text-white transition hover:bg-pink-700"
                  >
                    {s}
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/80 text-[8px]">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};