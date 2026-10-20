import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchTripsByPage } from "../../actions/get-trip-by-page";
import { TripGrid } from "../../components/TripGrid";
import { CustomPagination } from "../../../components/custom/CustomPagination";
import { FilterSideBar } from "../../components/FilterSideBar";
import { SortingBanner } from "../../components/SortingBanner";
import { TripSteps } from "../../components/TripSteps";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const originCityId = searchParams.get("originCityId") ?? undefined;
  const destinationCityId = searchParams.get("destinationCityId") ?? undefined;
  const departureDate = searchParams.get("departureDate") ?? undefined;

  const hasFilters = !!originCityId && !!destinationCityId && !!departureDate;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tripSearch", { originCityId, destinationCityId, departureDate }],
    queryFn: () => searchTripsByPage({ originCityId, destinationCityId, departureDate }),
    enabled: hasFilters, 
    retry: false,       
  });

  console.log("2) SearchPage:", { originCityId, destinationCityId, departureDate, data, error });

  if (!hasFilters) return <p>Elige origen, destino y fecha para buscar viajes.</p>;
  if (isLoading) return <p>Por favor espera, esto puede demorar un poco...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (data?.content.length === 0) return <p>No hay viajes para esa ruta y fecha.</p>;

  return (
    <div className="mx-auto flex max-w-7xl flex-row gap-8 px-4">
      
      <aside className="w-[325px] shrink-0">
        <FilterSideBar />
      </aside>

      <div className="flex-1">
        
        <TripSteps />
        <SortingBanner /> 

        <div className="mt-4 space-y-4">
          <TripGrid trips={data?.content ?? []} />
        </div>

        <div className="mt-8 flex justify-center">
          <CustomPagination totalPages={5} />
        </div>

      </div>

    </div>
  );
};



export default SearchPage;