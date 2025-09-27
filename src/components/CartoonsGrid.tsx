/** @format */

import CartoonCard from "./CartoonCard";
import type { Cartoon } from "../api/cartoons";

interface Props {
  cartoons: Cartoon[];
  onSelect: (cartoon: Cartoon) => void;
}

export default function CartoonsGrid({ cartoons, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cartoons.map((c, i) => (
        <CartoonCard key={i} cartoon={c} onClick={onSelect} />
      ))}
    </div>
  );
}
