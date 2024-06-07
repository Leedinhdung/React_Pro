import { FaMinus, FaTimes } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"


const Cart = () => {
    return (
        <div className="bg-[#f6f9fc] h-auto py-12">
            <div className="container-full flex">

                <div className="w-[70%]">
                    <div className='flex justify-between items-center rounded-xl shadow bg-white mt-8 w-full p-6' >
                        <div className="flex w-full items-center">
                            <div className='w-36 h-36'>
                                <img className="w-full h-full object-contain" src="/public/images/flash/flash-1.png" alt='' />
                            </div>
                            <div className=''>
                                <h3 className="text-xl font-medium mt-5">Shoes</h3>
                                <h4 className="font-medium text-xs mt-12 text-gray-600 ">
                                    $1000
                                </h4>
                            </div>
                        </div>

                        <div className=''>
                            <div className='text-end'>
                                <button className='text-2xl text-right ms-2.5 '>
                                    <FaTimes />
                                </button>
                            </div>

                            <div className='flex mt-10  gap-5 '>
                                <button className='p-2 border rounded text-xl hover:bg-[#e94560] hover:text-white transition-all duration-200 ease-in-out' >
                                    <FaPlus />
                                </button>
                                <button className='p-2 border rounded text-xl hover:bg-[#e94560] hover:text-white transition-all duration-200 ease-in-out' >
                                    <FaMinus />
                                </button>
                            </div>
                        </div>


                    </div>
                    <div className='flex justify-between rounded-xl shadow bg-white mt-8 w-full p-6' >
                        <div className="flex w-full">
                            <div className='w-36 h-36'>
                                <img className="w-full h-full object-contain" src="/public/images/flash/flash-1.png" alt='' />
                            </div>
                            <div className=''>
                                <h3 className="text-xl font-medium mt-5">Shoes</h3>
                                <h4 className="font-medium text-xs mt-12 text-gray-600 ">
                                    $1000
                                </h4>
                            </div>
                        </div>

                        <div className=''>
                            <div className='text-end'>
                                <button className='text-2xl text-right ms-2.5 '>
                                    <FaTimes />
                                </button>
                            </div>

                            <div className='flex mt-10  gap-5 '>
                                <button className='p-2 border rounded text-xl hover:bg-[#e94560] hover:text-white transition-all duration-200 ease-in-out' >
                                    <FaPlus />
                                </button>
                                <button className='p-2 border rounded text-xl hover:bg-[#e94560] hover:text-white transition-all duration-200 ease-in-out' >
                                    <FaMinus />
                                </button>
                            </div>
                        </div>

                        <div className='cart-item-price'></div>
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 w-[20%] mt-8 ml-8 h-32'>
                    <h2 className="text-xl font-semibold text-[#e94560] pb-2.5 mb-5  border-b-2 border-[#e94560]">Cart Summary</h2>
                    <div className='flex justify-between'>
                        <h4 className="text-sm font-medium">Total Price :</h4>
                        <h3 className="text-xl mb-5 text-[#e94560]">$0.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
