import { useState } from "react";
import { ArrowLeftRight, CalendarDays, CircleDot, MapPin, Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import { SearchField } from "../../components/custom/CustomSearchField";
import { SearchSelect } from "../../components/custom/CustomSearchSelect";
import { CITIES } from "../constants/cities";

const cityOptions = CITIES.map((c) => ({ value: String(c.id), label: c.name }));

export const TripSearchBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [originCityId, setOriginCityId] = useState(searchParams.get("originCityId") ?? "");
  const [destinationCityId, setDestinationCityId] = useState(searchParams.get("destinationCityId") ?? "");
  const [departureDate, setDepartureDate] = useState(searchParams.get("departureDate") ?? "");
  const [returnDate, setReturnDate] = useState(""); // el backend aún no lo usa

  const handleSwap = () => {
    setOriginCityId(destinationCityId);
    setDestinationCityId(originCityId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (originCityId) params.set("originCityId", originCityId);
    if (destinationCityId) params.set("destinationCityId", destinationCityId);
    if (departureDate) params.set("departureDate", departureDate);

    console.log("1) URL generada:", `/search?${params.toString()}`);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-3 md:flex-row md:items-center">
      <div className="flex flex-1 items-center">
        <SearchSelect icon={CircleDot} label="Origen" value={originCityId}
          onChange={setOriginCityId} options={cityOptions} />
        <button
          type="button"
          onClick={handleSwap}
          aria-label="Intercambiar origen y destino"
          className="shrink-0 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#572a85]"
        >
          <ArrowLeftRight size={20} />
        </button>
        <SearchSelect icon={MapPin} label="Destino" value={destinationCityId}
          onChange={setDestinationCityId} options={cityOptions}
          className="md:border-l md:border-gray-300" />
      </div>

      <div className="flex flex-1 items-center md:border-l md:border-gray-300">
        <SearchField icon={CalendarDays} label="Salida" type="date"
          value={departureDate} onChange={setDepartureDate} />
        <SearchField icon={CalendarDays} label="Retorno" type="date"
          value={returnDate} onChange={setReturnDate}
          className="border-l border-gray-300" />
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