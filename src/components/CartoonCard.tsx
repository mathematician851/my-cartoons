/** @format */

import type { Cartoon } from "../api/cartoons";

interface Props {
  cartoon: Cartoon;
  onClick: (cartoon: Cartoon) => void;
}

export default function CartoonCard({ cartoon, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(cartoon)}
      className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
    >
      <img
        src={cartoon.image || "https://via.placeholder.com/200"}
        alt={cartoon.title}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h2 className="text-lg font-bold mt-2">{cartoon.title}</h2>
      <p className="text-sm text-gray-600">{cartoon.year}</p>
      <p className="text-sm">{cartoon.rating}</p>
      <p className="text-xs text-gray-500">{cartoon.genre?.join(", ")}</p>
    </div>
  );
}
