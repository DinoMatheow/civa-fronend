import { getListAllBus } from "../api/buses.api"

export const getBusesByPage = async(page:number, size:number = 5)=>{
    const { data } = await getListAllBus.get(``, {
        params: {page, size}
    });

    return data; 
}