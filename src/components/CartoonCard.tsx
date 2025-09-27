/** @format */

import type { Cartoon } from "../api/cartoons";
import { useState } from "react";

interface Props {
  cartoon: Cartoon;
  onClick: (cartoon: Cartoon) => void;
  fallbackImage?: string;   
}

export default function CartoonCard({ cartoon, onClick }: Props) {

      const fallbackImage = "https://placehold.co/300x200?text=No+Image";
      const [imgSrc, setImgSrc] = useState(cartoon.image || fallbackImage);

  return (
    <div
     title="Click for details"
      onClick={() => onClick(cartoon)}
      className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
    >
      

      <img
        src={imgSrc}
        alt={cartoon.title}
        className="w-full h-40 object-cover rounded-xl"
        onError={() => setImgSrc(fallbackImage)} 
      />
      <h2 className="text-lg font-bold mt-2">{cartoon.title}</h2>
      <p className="text-sm text-gray-600">{cartoon.year}</p>
      <p className="text-sm">{cartoon.rating}</p>
      <p className="text-xs text-gray-500">{cartoon.genre?.join(", ")}</p>
    </div>
  );
}
