import { useState } from "react";
import { ArrowLeftRight, CalendarDays, CircleDot, MapPin, Search } from "lucide-react";
import { SearchField } from "../../components/custom/CustomSearchField";
import { useNavigate, useSearchParams } from "react-router";



export const TripSearchBar = () => {
   const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [origin, setOrigin] = useState(searchParams.get("origin") ?? "");
  const [destination, setDestination] = useState(searchParams.get("destination") ?? "");
  const [departure, setDeparture] = useState(searchParams.get("departure") ?? "");
  const [returnDate, setReturnDate] = useState(searchParams.get("returnDate") ?? "");

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (origin) params.set("origin", origin);
    if (destination) params.set("destination", destination);
    if (departure) params.set("departure", departure);
    if (returnDate) params.set("returnDate", returnDate);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 py-3 md:flex-row md:items-center"
    >
      <div className="flex flex-1 items-center">
        <SearchField icon={CircleDot} label="Origen" value={origin} onChange={setOrigin} />
        <button
          type="button"
          onClick={handleSwap}
          aria-label="Intercambiar origen y destino"
          className="shrink-0 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#572a85]"
        >
          <ArrowLeftRight size={20} />
        </button>
        <SearchField
          icon={MapPin}
          label="Destino"
          value={destination}
          onChange={setDestination}
          className="md:border-l md:border-gray-300"
        />
      </div>

      <div className="flex flex-1 items-center md:border-l md:border-gray-300">
        <SearchField icon={CalendarDays} label="Salida" type="date" value={departure} onChange={setDeparture} />
        <SearchField
          icon={CalendarDays}
          label="Retorno"
          type="date"
          value={returnDate}
          onChange={setReturnDate}
          className="border-l border-gray-300"
        />
      </div>

      <button
        type="submit"
        aria-label="Buscar viajes"
        className="flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#572a85] to-[#e0206e] text-white shadow-md transition hover:brightness-110 md:w-14"
      >
        <Search size={22} />
      </button>
    </form>
  );
};

