import type { Content, ListBuses } from "../interfaces/civa.pagination.reponse";


export const getListBus = async (page: number ):Promise<Content[]> => {
     const response = await fetch(`http://localhost:8080/api/v1/bus?page=${page}&size=5`);

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