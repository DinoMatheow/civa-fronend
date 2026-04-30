import { useState } from "react";
import { getBusById } from "../../api/get-bus-by-id";
import { SearchById } from "../../components/SearchById"
import type { CivaResponse } from "../../interfaces/civa.response";

export const SearchPage = () => {
    const [busFound, setBusFound] = useState<CivaResponse | null>(null);
     const handleSearch = async( id: string )=>{
        const numeroId = Number(id);
        if (numeroId <=0 || isNaN(numeroId) ) return;   
        const result = await getBusById(numeroId);
        setBusFound(result);
        console.log(result);
      };
    
    return (
    <div>
      <SearchById placeholder="Buscar por ID: 1, 2, 3..." onSearch={handleSearch} />
      
      <div className="p-8">
        {busFound ? (
          <div className="card bg-gradient-to-r from-[#381e59] to-[#b91662] text-white border-none w-96 shadow-sm">
            <figure>
              <img
                src="https://avatars.mds.yandex.net/get-altay/4916794/2a00000190e53f95b1da23cb6246b8f5747a/L_height"
                alt="Buses" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bus #{ busFound.numberBus } </h2>

              <div className="mt-4 space-y-2 text-sm">
                <p><span className="font-semibold text-gray-500">Placa:</span> { busFound.plate }</p>
                <p><span className="font-semibold text-gray-500">Marca:</span> { busFound.marcaBus }</p>
                <p><span className="font-semibold text-gray-500">Atributos:</span> { busFound.attributes }</p>
              </div>
              
              <div className="card-actions justify-end">
                <div className="badge badge-primary"> { busFound.status } </div>
              </div>
            </div>
          </div> 
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Ingresa un ID en el buscador para buscar un bus.
          </p>
        )}
      </div>
    </div>
    )

}