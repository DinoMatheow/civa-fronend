import { useEffect, useState } from "react"
import { getListBus } from "../../api/get-list-bus";
import type { CivaResponse } from "../../interfaces/civa.response";
import { CustomPagination } from "../../../components/custom/CustomPagination";

export const HomePage =  () => {

  const [busList, setBusList] = useState<CivaResponse[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(()=> {
    const fetchBuses = async ()=> {
      const data = await getListBus(page);
      setBusList(data);
    };
    fetchBuses();
  }, [page]);


    return (

    
    <div className="p-8">
          <h1 className="text-5xl font-bold text-center p-4">
            Gestor de Buses
          
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {busList.map((bus)=> (
             <div key={bus.id} className="card bg-gradient-to-r from-[#381e59] to-[#b91662] text-white border-none w-96 shadow-sm">
                <figure>
                  <img
                    src="https://avatars.mds.yandex.net/get-altay/4916794/2a00000190e53f95b1da23cb6246b8f5747a/L_height"
                    alt="Buses" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Bus #{ bus.numberBus } </h2>

                  <div className="mt-4 space-y-2 text-sm">
                    <p><span className="font-semibold text-gray-500">Placa:</span> { bus.plate }</p>
                    <p><span className="font-semibold text-gray-500">Marca:</span> { bus.marcaBus }</p>
                    <p><span className="font-semibold text-gray-500">Atributos:</span> { bus.attributes }</p>
                  </div>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary"> { bus.status } </div>
                  </div>
                </div>
            </div>

        ))}

      </div>
     





      {/* <pre>{ JSON.stringify(busList, null)}</pre> */}
          <CustomPagination 
          totalPages={5} 
          currentPage={page}
          onPageChange={(newPage) => setPage(newPage)}
          />
      </div>
    )

}