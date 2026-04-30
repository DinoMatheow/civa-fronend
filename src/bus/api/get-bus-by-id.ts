import type { CivaResponse } from "../interfaces/civa.response";

export const getBusById =  async(id:number): Promise<CivaResponse | null> =>{
   const response = await fetch(`http://localhost:8080/bus/${id}`);
   
        const data = await response.json();
   
     return {
      id: data.id,
      numberBus: data.numberBus,
      plate: data.plate,
      attributes: data.attributes,
      status: data.status,
      marcaBus: data.marcaBus,
      createdAt: data.createdAT, 
    }; 
   

}