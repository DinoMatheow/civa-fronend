import { useSearchParams } from 'react-router';

export const FilterSideBar = () => {

    const [searchParams] = useSearchParams();
    const currentTypeSites  = searchParams.get("typeSites");


  return (
    
<div className="w-full max-w-[325px] rounded-[24px] border border-[#dedede] bg-white px-8 py-6 font-sans text-[#4b4b4b]">
  <h2 className="mb-4 text-center text-[20px] font-bold leading-6 tracking-tight">
    Filtros
  </h2>

  {/* Punto de embarque */}
  <section className="mb-6">
    <div className="flex items-center justify-between">
      <h3 className="text-[16px] font-bold leading-5">
        Punto de embarque
      </h3>
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    <div className="mt-2 space-y-3 text-[16px] leading-5">
      <p>HUACHO</p>
    </div>
  </section>

  {/* Punto de llegada */}
  <section className="mb-6">
    <h3 className="mb-2 text-[16px] font-bold leading-5">
      Punto de llegada
    </h3>

    <div className="space-y-3 text-[16px] leading-5">
      <p>Lima (28 de Julio)</p>
      <p>Lima (Fundición Puente Piedra)</p>
      <p>Lima (Plaza Norte)</p>
    </div>
  </section>

  {/* Servicios */}
  <section className="mb-7">
    <div className="flex items-center justify-between">
      <h3 className="text-[16px] font-bold leading-5">
        Servicios
      </h3>
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    <div className="mt-2 text-[16px] leading-5">
      Econociva Plus
    </div>
  </section>

  {/* Hora de salida */}
  <section className="mb-4">
    <div className="flex items-center justify-between">
      <h3 className="text-[16px] font-bold leading-5">
        Hora de Salida
      </h3>
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </section>

  {/* Tipos de asiento */}
  <section>
    <div className="flex items-center justify-between">
      <h3 className="text-[16px] font-bold leading-5">
        Tipos de asiento
      </h3>
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  </div>
  </section>
</div>

  )
}
