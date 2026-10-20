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
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 lg:flex-row lg:gap-6">
    <aside className="w-full shrink-0 lg:w-[280px]">
      <FilterSideBar />
    </aside>

    <main className="min-w-0 flex-1 space-y-4">
      <TripSteps currentStep={1} />

      <SortingBanner />

      <TripGrid trips={data?.content ?? []} />

      <div className="flex justify-center pt-3">
        <CustomPagination totalPages={5} />
      </div>
    </main>
  </div>
);
};



export default SearchPage;