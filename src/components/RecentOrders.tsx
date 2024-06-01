import React from 'react'
import { Link } from 'react-router-dom'
const recentOrderData = [
    {
        id: 1,
        product_id: 5627,
        customer_id: 1234,
        customer_name: 'Ryan Carroll',
        order_total: '$1000',
        date: '2021-09-20',
        status: 'Delivered',
    },
    {
        id: 2,
        product_id: 5627,
        customer_id: 1234,
        customer_name: 'Ryan Carroll',
        order_total: '$1000',
        date: '2021-09-20',
        status: 'Delivered',
    },
    {
        id: 3,
        product_id: 5627,
        customer_id: 1234,
        customer_name: 'Ryan Carroll',
        order_total: '$1000',
        date: '2021-09-20',
        status: 'Delivered',
    }
]
export default function RecentOrders() {
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-300 flex-1'>
            <strong>Recent Orders</strong>
            <div className='mt-3 '>
                <table className='w-full text-gray-700'>
                    <thead>
                        <tr className='font-semibold'>
                            <td>ID</td>
                            <td>Product ID</td>
                            <td>Customer Name</td>
                            <td>Date</td>
                            <td>Order Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td><Link to={`/order/${order.id}`}>{order.id}</Link></td>
                                <td><Link to={`/product/${order.product_id}`}>{order.product_id}</Link></td>
                                <td>{order.customer_name}</td>
                                <td>{new Date(order.date).toLocaleDateString()}</td>
                                <td>{order.order_total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
