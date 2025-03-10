import CardProductPrice from '@/Components/Cards/CardProductPrice'
import { formatCurrency } from '@/Helpers/helpers'
import React from 'react'

const CardProductSummary = ({ product }) => {
    return (
        <div className="flex p-5 md:p-6 gap-4" key={product.id}>
            <div className='flex-shrink-0'>
                <img className="h-20  max-w-full rounded" src={product.thumb} alt={product.name} />
            </div>
            <div className="grow">
                <h3>{product.quantity} x {product.name}</h3>
                <span className="block text-gray-500 font-normal mt-1"> Color: {product.color.name}</span>
                {product.size && (
                    <span className="block text-gray-500 mt-0.5 font-normal">Talla: {product.size.name}</span>
                )}
            </div>
            <div>
                <CardProductPrice price={product.price}
                    old_price={product.old_price}
                    offer={product.offer}
                />
            </div>

        </div>
    )
}



export default CardProductSummary
