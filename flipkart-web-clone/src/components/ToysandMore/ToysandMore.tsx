import React from 'react'
import ProductCards from "../ProductCards/ProductCards";
import { ProductCard } from "../../types";

interface toyProps {
    toysValue: ProductCard[]
}

export default function ToysandMore({toysValue}: toyProps) {
  return (
   <>
    <div className='toys-item-section'>
        {toysValue.map((item) => (
            <ProductCards item={item} key={item.image}
            />
        ))}
    </div>
   </>
  )
}
