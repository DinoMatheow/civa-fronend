import type { CivaResponse } from "../interfaces/civa.response";

export const getListBus = async () => {
     const response = await fetch(`http://localhost:8080/bus`);

     const data = await response.json();

     return data.map((bus: CivaResponse) => ({
     id: bus.id,
     numberBus: bus.numberBus,
     plate: bus.plate,
     attributes: bus.attributes,
     status: bus.status,
     marcaBus: bus.marcaBus,
     createdAt: bus.createdAt,
}));



}