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
    <div className="w-full min-w-0 text-left not-italic [&_label]:px-3 [&_input]:min-w-0 [&_input]:max-w-full [&_input]:rounded [&_input]:py-1 [&_select]:rounded [&_select]:py-1 [&_input:focus-visible]:outline [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-offset-2 [&_input:focus-visible]:outline-[#a52167] [&_select:focus-visible]:outline [&_select:focus-visible]:outline-2 [&_select:focus-visible]:outline-offset-2 [&_select:focus-visible]:outline-[#a52167]">
    <form onSubmit={handleSubmit} className="grid min-w-0 grid-cols-1 items-center gap-3 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_auto]">
      <div className="flex min-w-0 items-center rounded-xl border border-purple-100 bg-[#fcfaff] p-1 sm:col-span-2 lg:col-span-1">
        <SearchSelect icon={CircleDot} label="Origen" value={originCityId}
          onChange={setOriginCityId} options={cityOptions} />
        <button
          type="button"
          onClick={handleSwap}
          aria-label="Intercambiar origen y destino"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white text-[#572a85] transition-colors hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a52167]"
        >
          <ArrowLeftRight size={20} />
        </button>
        <SearchSelect icon={MapPin} label="Destino" value={destinationCityId}
          onChange={setDestinationCityId} options={cityOptions} />
      </div>

      <div className="flex min-w-0 flex-col items-center rounded-xl border border-purple-100 bg-[#fcfaff] p-1 min-[380px]:flex-row [&>label]:w-full min-[380px]:[&>label]:w-auto">
        <SearchField icon={CalendarDays} label="Salida" type="date"
          value={departureDate} onChange={setDepartureDate} />
        <SearchField icon={CalendarDays} label="Retorno" type="date"
          value={returnDate} onChange={setReturnDate}
          className="border-t border-gray-300 min-[380px]:border-l min-[380px]:border-t-0" />
      </div>

      <button
        type="submit"
        aria-label="Buscar viajes"
        className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#572a85] to-[#a52167] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a52167] lg:w-auto"
      >
        <Search aria-hidden="true" size={20} />
        <span>Buscar</span>
      </button>
    </form>

    </div>
  );
};
