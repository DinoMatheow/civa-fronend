import type { Trip } from "../interfaces/trip.pagintaion.response";
import { TripGridCard } from "./TripGridCard";

interface Props {
  trips: Trip[];
}

export const TripGrid = ({ trips }: Props) => {
    return (
        <div className="flex flex-col gap-10 pt-4">
            {trips.map((trip) => (
                <TripGridCard key={trip.id} trip={trip} /> 
        ))}
        </div> 
    )

}