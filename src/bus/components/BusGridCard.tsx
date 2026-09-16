import type { Content } from "../interfaces/civa.pagination.reponse";

interface Props {
  bus: Content;
}

export const BusGridCard = ({ bus }: Props) => {
  return (
    <div className="card bg-gradient-to-r from-[#381e59] to-[#b91662] text-white border-none w-96 shadow-sm">
      <figure>
        <img
          src="https://avatars.mds.yandex.net/get-altay/4916794/2a00000190e53f95b1da23cb6246b8f5747a/L_height"
          alt="Buses" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Bus #{bus.numberBus} </h2>
        <div className="mt-4 space-y-2 text-sm">
          <p><span className="font-semibold text-gray-500">Placa:</span> {bus.plate}</p>
          <p><span className="font-semibold text-gray-500">Marca:</span> {bus.marcaBus}</p>
          <p><span className="font-semibold text-gray-500">Atributos:</span> {bus.attributes}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-primary"> {bus.status} </div>
        </div>
      </div>
    </div>
  );
};