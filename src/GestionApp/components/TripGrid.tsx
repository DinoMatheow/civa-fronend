import type { Trip } from "../interfaces/trip.pagintaion.response";

interface Props {
  trips: Trip[];
}

export const TripGrid = ({ trips }: Props) => {
    return (
        <div>
            {trips.map((trip) => (
                <TripGridCard key={trip.id} trip={trip} /> 
        ))}
        </div> 
    )

}