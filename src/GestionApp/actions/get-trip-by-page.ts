import { TripApi } from "../../api/trip.api";
import type { TripResponse } from "../interfaces/trip.pagintaion.response";

export interface TripFilters {
  originCityId?: string;
  destinationCityId?: string;
  departureDate?: string;
}

export const searchTripsByPage = async (
  filters: TripFilters = {},
  page: number = 0,
  size: number = 10
): Promise<TripResponse> => {
  const { data } = await TripApi.get<TripResponse>("", {
    params: { page, size, ...filters },
  });
  return data;
};