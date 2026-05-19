import type { Content, ListBuses } from "../interfaces/civa.pagination.reponse";
// import type { CivaResponse } from "../interfaces/civa.response";



export const getListBus = async (page: number ):Promise<Content[]> => {
     const response = await fetch(`http://localhost:8080/bus?page=${page}&size=5`);

     const data:ListBuses = await response.json();

     const busArray = data.content || [];

     return busArray.map((bus: Content) => ({
     id: bus.id,
     numberBus: bus.numberBus,
     plate: bus.plate,
     attributes: bus.attributes,
     status: bus.status,
     marcaBus: bus.marcaBus,
     createdAt: bus.createdAt,
}));



}