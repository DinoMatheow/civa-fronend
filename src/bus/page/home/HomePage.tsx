  import {  useState } from "react"
import { CustomPagination } from "../../../components/custom/CustomPagination";
import { getBusesByPage } from "../../actions/get-buses-by-page";
import { useQuery } from "@tanstack/react-query";
import { BusGrid } from "../../components/BusGrid";

export const HomePage =  () => {

  const [page, setPage] = useState<number>(0);

  // useEffect(()=> {
  //   const fetchBuses = async ()=> {
  //     const data = await getListBus(page);
  //     setBusList(data);
  //   };
  //   fetchBuses();
  // }, [page]);

  const { data: busResponse } = useQuery({
    queryKey: ['buses', page],
    queryFn: () => getBusesByPage(page),
    staleTime: 1000 * 60 * 5, 
  });

  console.log({ busResponse});


  // useEffect(()=>{
  //   getBusesByPage(0).then((buses) =>{
  //     console.log({ buses })
  //   });
  // }, []);


    return (

    
    <div className="p-8">
          <h1 className="text-5xl font-bold text-center p-4">
            Gestor de Buses
          
          </h1>
     <BusGrid buses={busResponse?.content ?? []} />
     





      {/* <pre>{ JSON.stringify(busList, null)}</pre> */}
          <CustomPagination 
          totalPages={5}  
          currentPage={page}
          onPageChange={(newPage) => setPage(newPage)}
          />
      </div>
    )

}