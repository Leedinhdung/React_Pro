import React from 'react'
import { HiArrowCircleRight, HiStar } from 'react-icons/hi'

const DetailProduct = () => {
    const demoText = {
        description:
            'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details:
            'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    };
    return (

        <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
            <div className='p-3 max-w-7xl m-auto'>
                <div className='mt-6 sm:mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                        <div>
                            <img src="/public/images/product1.png" className='w-full' alt="" />
                        </div>
                        <div>
                            <h1 className='title text-left'>Adicolor Classics Joggers</h1>
                            <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime a alias eius! Minima eius consectetur, numquam quasi ducimus blanditiis facere aspernatur delectus dicta pariatur, sequi consequatur eum consequuntur officiis.</p>
                            <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                            </span>
                            <p className='text-xl text-red-500 font-semibold sm:text-2xl'>$63.85</p>
                            <div className='mt-4'>
                                <div className='text-left flex flex-col gap-2 w-full'>
                                    <label htmlFor="" className='font-semibold'>Quantity</label>
                                    <input type="number" value={1} className='border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500' name="" id="" />
                                </div>
                                <div className='w-full text-left my-4'>
                                    <button className='flex  justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confirm Order </span><HiArrowCircleRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">
                        {demoText.details} {demoText.details}
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">
                        {demoText.description} {demoText.description}
                    </p>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="text-sm font-medium text-gray-900">Highlights</h2>
                <div className="mt-4 space-y-4">
                    <li className="text-sm text-gray-600">
                        {demoText.highlights[0]}
                    </li>
                    <li className="text-sm text-gray-600">
                        {demoText.highlights[1]}
                    </li>
                    <li className="text-sm text-gray-600">
                        {demoText.highlights[2]}
                    </li>
                    <li className="text-sm text-gray-600">
                        {demoText.highlights[3]}
                    </li>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
