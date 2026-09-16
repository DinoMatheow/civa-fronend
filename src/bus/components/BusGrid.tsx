import type { Content } from "../interfaces/civa.pagination.reponse";
import { BusGridCard } from "./BusGridCard";


interface Props {
  buses: Content[];
}

export const BusGrid = ({ buses }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {buses.map((bus) => (
        <BusGridCard key={bus.id} bus={bus} />
      ))}
    </div>
  );
};