import React from "react";
import { ProductCard, ToysMore } from "../../types";

interface pruductCards {
    item: ToysMore
}

// type ProductCardProps={
//     item: ToysMore[]
// }

export default function ProductCards({item}:pruductCards) {
  return (
    <div>
      <div className="img">
        <img src={item.img} />
      </div>
      <div className="product-name">{item.name}</div>
      <div className="product-offer">{item.offer}</div>
      <div className="product-brand">{item.brands}</div>
    </div>
  );
}
