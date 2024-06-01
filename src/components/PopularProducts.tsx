import React from 'react'
import { Link } from 'react-router-dom'
const PopularProductsData = [
    {
        id: '1',
        product_name: 'Product 1',
        product_price: '$1000',
        product_image: 'https://source.unsplash.com/100x100/?nature',
        product_stock: 10,
    },
    {
        id: '2',
        product_name: 'Product 1',
        product_price: '$1000',
        product_image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        product_stock: 10,
    },
    {
        id: '3',
        product_name: 'Product 1',
        product_price: '$1000',
        product_image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        product_stock: 0,
    },
]
export default function PopularProducts() {
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-300 w-[20rem]'>
            <strong>Popular Products</strong>
            <div className="mt-4 flex-col gap-3">
                {PopularProductsData.map((product => (
                    <Link to={'/product/${product.id}'} className='flex hover:bg-gray-200 p-1.5 rounded-sm'>
                        <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                            <img className='w-full h-full object-cover' src={product.product_image} alt="" />
                        </div>
                        <div className='flex-1 ms-4'>
                            <p className='text-sm text-gray-800'>{product.product_name}</p>
                            <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}>{product.product_stock === 0 ? 'Out of stock' : product.product_stock + ' in stock'}</span>
                        </div>
                        <div className='text-xs text-gray-400 pl-2'>{product.product_price}

                        </div>
                    </Link>
                )))}
            </div>
        </div>
    )
}