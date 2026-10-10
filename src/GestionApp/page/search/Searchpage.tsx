import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchTripsByPage } from "../../actions/get-trip-by-page";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const originCityId = searchParams.get("originCityId") ?? undefined;
  const destinationCityId = searchParams.get("destinationCityId") ?? undefined;
  const departureDate = searchParams.get("departureDate") ?? undefined;

  const { data, isLoading } = useQuery({
    queryKey: ["tripSearch", { originCityId, destinationCityId, departureDate }],
    queryFn: () => searchTripsByPage({ originCityId, destinationCityId, departureDate }),
  });

  if (isLoading) return <p>Por favor espera, esto puede demorar un poco...</p>;

  return <pre>{JSON.stringify(data?.content, null, 2)}</pre>;
};