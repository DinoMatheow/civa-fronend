import { use, useEffect, useState } from "react"
import { getListBus } from "../../api/get-list-bus";

export const HomePage = async () => {

  const [bus, setBusList] = useState<string[]>([]);

  useEffect(()=> {
    const fetchBuses = async ()=> {
      const data = await getListBus();
      setBusList(data);

    };
    fetchBuses();
  }, [])

  const busList = await getListBus();
  console.log(busList);

    return (
    <div>
      <h1 className="text-5xl font-bold">
      HomePage
      </h1>
      <button className="btn btn-primary">Buscar</button>
      </div>
    )

}