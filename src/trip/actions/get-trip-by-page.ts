import type { ListTrips, TripResponse } from "../interfaces/trip.pagintaion.response";

export const getTripByPage = async(page:number, size:number = 10):Promise<ListTrips>=>{
    const { data } = await getListAllTrip.get<ListTrips>(``, {
        params: {page, size}    
    });

    const trips = data?.content.map( trip => ({
        ...trip,
    }));

    return {
            ...data,
            content: trips
    };
}