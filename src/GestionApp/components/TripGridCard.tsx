import { CircleDot, Clock } from "lucide-react";
import type { Trip } from "../interfaces/trip.pagintaion.response";

interface Props {
  trip: Trip;
}

const formatTime = (iso: string | Date) =>
  new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

const formatDate = (iso: string | Date) =>
  new Date(iso).toLocaleDateString("es-PE", { weekday: "short", day: "2-digit", month: "2-digit" });

const getHours = (from: string | Date, to: string | Date) => {
  const minutes = (new Date(to).getTime() - new Date(from).getTime()) / 60000;
  return Math.max(1, Math.round(minutes / 60));
};

export const TripGridCard = ({ trip }: Props) => {
  const lowSeats = trip.availableSeats <= 10;

  return (
    <article className="relative rounded-2xl bg-white shadow-md">
      <span className="absolute -top-4 right-6 flex items-center gap-2 rounded-full bg-[#f8e6f4] px-4 py-2 text-sm uppercase text-gray-700">
        <CircleDot size={14} className="text-[#572a85]" />
        {trip.destination}
      </span>

      <div className="flex flex-col gap-5 px-6 pb-4 pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black italic tracking-tight text-[#572a85]">CIVA</span>
            <span className="text-sm text-gray-700">{trip.categoryBusName}</span>
          </div>

          <div className="flex items-center gap-6 text-gray-700">
            <span>Salida</span>
            <span className="capitalize">{formatDate(trip.departureTime)}</span>
            <span>•</span>
            <span>{formatTime(trip.departureTime)}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 md:border-l md:border-gray-300 md:pl-8">
          <div className="text-right">
            <p className="text-xs text-gray-500">Desde</p>
            <p className="text-lg font-bold text-[#572a85]">S/{trip.price}</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              type="button"
              onClick={() => console.log("Comprar viaje:", trip.id)}
              className="w-40 rounded-xl bg-[#e8267a] py-3 text-sm font-semibold uppercase text-white transition hover:brightness-110"
            >
              Comprar
            </button>
            {lowSeats && (
              <p className="text-sm font-bold text-[#e8267a]">¡Últimos Asientos!</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-3 text-sm text-gray-600">
        <span>{trip.availableSeats} Asientos restantes</span>
        <span className="flex items-center gap-1 font-bold text-gray-800">
          <Clock size={16} />
          {getHours(trip.departureTime, trip.arrivalTime)}hrs aprox
        </span>
        <span className="text-xs text-gray-400">{trip.tripCode}</span>
      </div>
    </article>
  );
};