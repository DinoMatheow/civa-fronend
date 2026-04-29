import { getListBus } from "./bus/api/get-list-bus";

export const CivaApp =  () => {

  // await getListBus();

  return(
    <div>
      <h1 className="text-5xl font-bold">
      Hola mundo
      </h1>
      <button className="btn btn-primary">Buscar</button>
      </div>
  )
}