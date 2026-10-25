import {
  Apple, ArrowRight, BusFront, Camera, CreditCard, MapPin,
  MoveUpRight, Package, Percent, Play, Ticket, Truck, Users,
} from "lucide-react";
import { TripSearchBar } from "../../components/TripSearchBar";
import { HomePhoto } from "./HomePhoto";
import { homeImages } from "./homeImages";

const destinos = [
  { name: "Lima", caption: "Historia junto al mar", photo: homeImages.lima, className: "min-h-[19rem] sm:col-span-2 sm:min-h-[17rem] lg:row-span-2 lg:min-h-0" },
  { name: "Trujillo", caption: "La ciudad de la eterna primavera", photo: homeImages.trujillo, className: "sm:col-span-2" },
  { name: "Cusco", caption: "Un encuentro con nuestra historia", photo: homeImages.cusco, className: "[&_img]:object-[65%_center]" },
  { name: "Huaraz", caption: "La aventura te espera", photo: homeImages.huaraz, className: "" },
];
const beneficios = [
  { icon: Percent, label: "Mejores tarifas" },
  { icon: Ticket, label: "Elige tu asiento" },
  { icon: Camera, label: "Sube tus fotos" },
  { icon: CreditCard, label: "Opciones de pago" },
];
const serviciosCorporativos = [
  { icon: Users, label: "Tarifa empresas" },
  { icon: Truck, label: "CIVA Cargo" },
  { icon: BusFront, label: "Servicios especiales" },
  { icon: Package, label: "Encomiendas" },
];
const focusLink = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b2468]";

// Decorative previews, rather than additional interactive forms or controls.
const AppPhones = () => (
  <div aria-hidden="true" className="relative mx-auto h-72 w-56 shrink-0 select-none sm:w-64 lg:h-80">
    <div className="absolute left-0 top-8 h-60 w-32 -rotate-12 rounded-[1.8rem] border-[5px] border-white/80 bg-gradient-to-b from-[#ef4389] to-[#572a85] shadow-2xl">
      <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-black/30" />
      <div className="flex h-44 flex-col items-center justify-center gap-4 text-white">
        <BusFront size={36} strokeWidth={1.5} />
        <span className="text-3xl font-black italic tracking-tighter">CIVA</span>
      </div>
      <div className="mx-auto h-1 w-10 rounded-full bg-white/70" />
    </div>
    <div className="absolute right-0 top-0 h-64 w-36 rotate-[9deg] rounded-[1.8rem] border-[5px] border-white bg-[#faf7fc] p-3 text-[#452264] shadow-2xl lg:top-3 lg:h-72 lg:w-40">
      <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-[#452264]" />
      <span className="text-xl font-black italic">CIVA</span>
      <p className="mt-2 text-xs font-bold">Tu próxima aventura</p>
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 rounded-lg bg-white p-2 text-xs shadow-sm"><MapPin size={12} /> Lima</div>
        <div className="flex items-center gap-2 rounded-lg bg-white p-2 text-xs shadow-sm"><MapPin size={12} /> Cusco</div>
        <div className="rounded-lg bg-[#a52167] py-2 text-center text-xs font-semibold text-white">Buscar viaje</div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#eee5f5] p-2">
        <Ticket size={18} /><span className="text-xs font-medium">¡A viajar!</span>
      </div>
    </div>
  </div>
);

export const HomePage = () => (
  <div className="-my-6 bg-white font-sans text-slate-800">
    <section aria-labelledby="home-title" className="relative isolate">
      <div className="relative overflow-hidden bg-[#392052]">
        <HomePhoto src={homeImages.huaraz.src} alt={homeImages.huaraz.alt} priority className="absolute inset-0 [&_img]:object-[center_55%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#241039]/95 via-[#351749]/70 to-[#351749]/15" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#291339]/60 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-14 sm:px-8 sm:pb-32 sm:pt-20 lg:pb-36 lg:pt-24">
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-100 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-pink-300" /> El viaje empieza contigo
          </p>
          <h1 id="home-title" className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hay un Perú entero<br /><span className="text-pink-200">por descubrir.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-purple-50 sm:text-lg">Nuevos paisajes, grandes historias. Encuentra tu próximo destino y comienza a viajar con CIVA.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white">
            <span className="flex items-center gap-2"><BusFront aria-hidden="true" size={18} /> Pasajes interprovinciales</span>
            <span className="flex items-center gap-2"><MapPin aria-hidden="true" size={18} /> Llanganuco, Áncash</span>
          </div>
          <p className="mt-6 text-xs text-purple-100">Aplican términos y condiciones.</p>
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:px-8">
        <div className="rounded-[1.75rem] border border-purple-100 bg-white p-4 shadow-[0_16px_50px_-20px_rgba(63,28,88,0.35)] sm:p-6">
          <div className="mb-3 flex items-center gap-2 px-2">
            <Ticket aria-hidden="true" size={19} className="text-[#a52167]" />
            <h2 className="text-base font-bold text-[#452264]">¿A dónde viajamos?</h2>
          </div>
          <TripSearchBar />
        </div>
      </div>
    </section>

    <div className="mx-auto max-w-6xl space-y-16 px-5 pb-12 pt-14 sm:space-y-20 sm:px-8 sm:pt-16">
      <section aria-labelledby="app-title" className="relative isolate overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#452264] via-[#682b85] to-[#bb246d] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-32 h-96 w-96 rounded-full border-[48px] border-white/5" />
        <div className="relative grid items-center gap-10 px-6 pb-0 pt-9 sm:grid-cols-2 sm:px-9 sm:pt-10 lg:grid-cols-[1.15fr_0.9fr_0.85fr] lg:gap-6 lg:py-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">Lleva el viaje contigo</p>
            <h2 id="app-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight">¡Descubre el<br className="hidden lg:block" /> nuevo CIVA!</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-purple-50 sm:text-base">Descarga nuestra app y comienza a disfrutar de la experiencia.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="flex min-h-12 items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><Play aria-hidden="true" size={18} /> Google Play</a>
              <a href="#" className="flex min-h-12 items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><Apple aria-hidden="true" size={19} /> App Store</a>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-7 self-center pb-2 sm:pb-8 lg:pb-0">
            {beneficios.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10"><Icon aria-hidden="true" size={23} strokeWidth={1.5} /></span>
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
          <AppPhones />
        </div>
      </section>

      <section aria-labelledby="destinations-title">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a52167]">Inspírate y viaja</p>
            <h2 id="destinations-title" className="mt-2 text-3xl font-bold tracking-tight text-[#452264] sm:text-4xl">Destinos populares</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-600">La costa, la sierra y un nuevo recuerdo en cada destino.</p>
        </div>
        <div className="grid auto-rows-[minmax(15rem,auto)] grid-cols-1 gap-4 sm:auto-rows-[minmax(13rem,auto)] sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-4">
          {destinos.map(({ name, caption, photo, className }) => (
            <a key={name} href="#" className={`group relative isolate overflow-hidden rounded-2xl bg-[#452264] ${className} ${focusLink}`}>
              <HomePhoto src={photo.src} alt={photo.alt} className="absolute inset-0 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#160c24]/95 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-5 sm:p-6">
                <div>
                  <h3 className={`font-bold tracking-tight text-white ${name === "Lima" ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">{caption}</p>
                </div>
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 transition-colors group-hover:bg-white/25"><MoveUpRight size={17} /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="corporativos" aria-labelledby="services-title" className="scroll-mt-24">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a52167]">Más formas de conectar</p>
          <h2 id="services-title" className="mt-2 text-3xl font-bold tracking-tight text-[#452264] sm:text-4xl">Nuestros servicios</h2>
        </div>
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#352046]">
          <HomePhoto src={homeImages.services.src} alt={homeImages.services.alt} className="absolute inset-0 [&_img]:object-[35%_center]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#251334]/95 via-[#251334]/75 to-[#251334]/55" />
          <div className="relative grid gap-8 p-6 sm:p-10 lg:min-h-[360px] lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:p-12">
            <div className="max-w-md">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white"><BusFront aria-hidden="true" size={25} /></span>
              <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Servicios<br />corporativos</h3>
              <p className="mt-4 text-base leading-relaxed text-purple-50">Conoce nuestras opciones para empresas, envíos y servicios especiales.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {serviciosCorporativos.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a href="#" className="flex min-h-14 items-center gap-3 rounded-xl border border-white/15 bg-[#a52167] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8d1c58] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                    <span className="flex-1">{label}</span><ArrowRight aria-hidden="true" size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <aside aria-label="Créditos fotográficos" className="border-t border-purple-100 pt-5 text-xs leading-relaxed text-slate-600">
        <p className="mb-2 font-semibold text-slate-700">Fotografías y créditos</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {Object.entries(homeImages).map(([key, photo]) => (
            <li key={key}>
              <a href={photo.source} target="_blank" rel="noreferrer" className={`underline decoration-slate-300 underline-offset-2 hover:text-[#572a85] ${focusLink}`}>{photo.author}</a>
              {" · "}<a href={photo.licenseUrl} target="_blank" rel="noreferrer" className={`underline decoration-slate-300 underline-offset-2 hover:text-[#572a85] ${focusLink}`}>{photo.license}</a>
            </li>
          ))}
        </ul>
        <p className="mt-2">Imágenes con encuadre y superposición de color. Fotografía de buses de referencia; no representa la flota de CIVA.</p>
      </aside>
    </div>
  </div>
);
