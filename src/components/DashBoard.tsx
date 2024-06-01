import React from 'react'
import { IoBagHandle } from 'react-icons/io5'
import TransactionChart from './TransactionChart'
import BuyerChart from './BuyerChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

export default function DashBoard() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-4 w-full">
        <BoxWrapper>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagHandle className='text-2xl text-white' />
          </div>
          <div>
            <span className='text-sm text-gray-500 font-light'>Total Sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$456.789</strong>
              <span className='text-sm text-green-500 pl-2'>+234</span>
            </div>
          </div>

        </BoxWrapper>
        <BoxWrapper>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagHandle className='text-2xl text-white' />
          </div>
          <div>
            <span className='text-sm text-gray-500 font-light'>Total Sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$456.789</strong>
              <span className='text-sm text-green-500 pl-2'>+234</span>
            </div>
          </div>

        </BoxWrapper>
        <BoxWrapper>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagHandle className='text-2xl text-white' />
          </div>
          <div>
            <span className='text-sm text-gray-500 font-light'>Total Sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$456.789</strong>
              <span className='text-sm text-green-500 pl-2'>+234</span>
            </div>
          </div>

        </BoxWrapper>
        <BoxWrapper>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagHandle className='text-2xl text-white' />
          </div>
          <div>
            <span className='text-sm text-gray-500 font-light'>Total Sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$456.789</strong>
              <span className='text-sm text-green-500 pl-2'>+234</span>
            </div>
          </div>

        </BoxWrapper>

      </div>
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <BuyerChart />
      </div>
      <div className='flex mt-4 flex-row gap-4 w-full'>
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  )
}
function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
