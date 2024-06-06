import { FaBolt, FaPlus, FaStar } from "react-icons/fa6";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



import Banner from '../../components/home/Banner';

import { FaHeart } from "react-icons/fa";

const Home = () => {

    const SampleNextArrow = (props: any) => {
        const { onClick } = props
        return (
            <div className='absolute top-[40%] -right-5 w-12 h-12 leading-[55px] bg-[#0f3460] rounded-full transform-cpu hover:bg-[#e94560] transition-all duration-200 text-center' onClick={onClick}>
                <button className='next'>
                    <i className='fa fa-long-arrow-alt-right text-2xl text-white'></i>
                </button>
            </div>
        )
    }
    const SamplePrevArrow = (props: any) => {
        const { onClick } = props
        return (
            <div className='absolute top-[40%] -left-5 z-10 w-12 h-12 leading-[55px] bg-[#0f3460] rounded-full transform-cpu hover:bg-[#e94560] transition-all duration-200 text-center' onClick={onClick}>
                <button className='prev'>
                    <i className='fa fa-long-arrow-alt-left text-2xl text-white'></i>
                </button>
            </div>
        )
    }
    const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
       

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }
    const productItems = [
        {
            id: 1,
            discount: 50,
            cover: "../../../public/images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
        },
        {
            id: 2,
            discount: 40,
            cover: "../../../public/images/flash/flash-2.png",
            name: "Watch",
            price: 20,
        },
        {
            id: 3,
            discount: 40,
            cover: "../../../public/images/flash/flash-3.png",
            name: "Smart Mobile Black",
            price: 200,
        },
        {
            id: 4,
            discount: 40,
            cover: "../../../public/images/flash/flash-4.png",
            name: "Smart Watch Black",
            price: 50,
        },
        {
            id: 5,
            discount: 50,
            cover: "../../../public/images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
        },
        {
            id: 6,
            discount: 50,
            cover: "../../../public/images/flash/flash-3.png",
            name: "Shoes",
            price: 100,
        },

    ]


    return (

        // Banner
        <div>
            <Banner />
            <div className='px-12 bg-[#f6f9fc] container'>
                <div className="flex items-center max-w-[90%]">
                    <FaBolt className="me-3 text-[#e94560] " fontSize={24} />
                    <h1 className=' font-[600] text-2xl'>Flash Deals</h1>
                </div>
                <Slider {...settings} className="mt-10 flex gap-5">
                    {productItems.map((value, id) => {
                        return (
                            <div key={id} className=" bg-white w-[90%] p-4 relative rounded-lg  " >
                                <div className="">
                                    <div className="mx-auto">
                                        <span className="absolute top-0 left-0 bg-[#e94560] px-3 py-1 text-sm rounded-full text-white m-2.5">{value.discount}% Off</span>
                                        <img src={value.cover} alt="" />
                                        <div className="absolute top-0 right-0 m-2.5  transition ">

                                            <FaHeart className="text-xl my-2.5 mx-2" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3>{value.name}</h3>
                                        <div className="flex">
                                            <FaStar fontSize={20} color="#ffcd4e" className="my-2 me-2" />
                                            <FaStar fontSize={20} color="#ffcd4e" className="my-2 me-2" />
                                            <FaStar fontSize={20} color="#ffcd4e" className="my-2 me-2" />
                                            <FaStar fontSize={20} color="#ffcd4e" className="my-2 me-2" />
                                            <FaStar fontSize={20} color="#ffcd4e" className="my-2 me-2" />
                                        </div>
                                        <div className="flex justify-between text-[#e94560]">
                                            <h4 className="font-semibold ">${value.price}</h4>
                                            <button className="text-xl transition-all border p-3 rounded-md hover:bg-[#e94560] hover:text-white"><FaPlus className="font-semibold" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                    }


                </Slider>




            </div >
        </div >
    )
}

export default Home
