import { getListAllBus } from "../api/buses.api"
import type { Content, ListBuses } from "../interfaces/civa.pagination.reponse";

export const getBusesByPage = async(page:number, size:number = 5):Promise<ListBuses>=>{
    const { data } = await getListAllBus.get<ListBuses>(``, {
        params: {page, size}    
    });

    const buses = data?.content.map( bus => ({
        ...bus,


    }));


    return {
            ...data,
            content: buses
    };
};