import axios from 'axios';

const BASE_URL = import.meta.env.VITE_CIVA_API_URL


export const getListAllBus = axios.create({
     baseURL: `${BASE_URL}/api/v1/bus`
})

