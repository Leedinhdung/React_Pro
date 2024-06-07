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
            <div className='absolute top-[40%] -right-1 w-10 h-10 leading-[44px] bg-[#0f3460] rounded-full transform-cpu hover:bg-[#e94560] transition-all duration-200 text-center' onClick={onClick}>
                <button className='next'>
                    <i className='fa fa-long-arrow-alt-right text-lg text-white'></i>
                </button>
            </div>
        )
    }
    const SamplePrevArrow = (props: any) => {
        const { onClick } = props
        return (
            <div className='absolute top-[40%] -left-5 z-10 w-10 h-10 leading-[44px] bg-[#0f3460] rounded-full transform-cpu hover:bg-[#e94560] transition-all duration-200 text-center' onClick={onClick}>
                <button className='prev'>
                    <i className='fa fa-long-arrow-alt-left text-lg text-white'></i>
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

    ];
    const Ndata = [
        {
            cover: "./images/arrivals/arrivals1.png",
            name: "Sunglass",
            price: "150",
        },
        {
            cover: "./images/arrivals/arrivals2.png",
            name: "Makeup",
            price: "250",
        },
        {
            cover: "./images/arrivals/arrivals3.png",
            name: "Smart Watch",
            price: "50",
        },
        {
            cover: "./images/arrivals/arrivals4.png",
            name: "Lipstick",
            price: "15",
        },
        {
            cover: "./images/arrivals/arrivals5.png",
            name: "Green Plant",
            price: "10",
        },
        {
            cover: "./images/arrivals/arrivals6.png",
            name: "Bonsai tree",
            price: "400",
        },
    ]



    return (

        // Banner
        <div>
            <Banner />
            <div className=' bg-[#f6f9fc] py-10'>
                <div className="container-full">
                    <div className="flex items-center max-w-[90%] ">
                        <FaBolt className="me-3 text-[#e94560] " fontSize={24} />
                        <h1 className=' font-[600] text-2xl'>Flash Deals</h1>
                    </div>
                    <Slider {...settings} className="mt-10 flex justify-center gap-5">
                        {productItems.map((value, id) => {
                            return (
                                <div key={id} className=" " >
                                    <div className="bg-white w-[95%] p-4 relative rounded-lg  ">
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

                </div>
                <section className='container-full'>
                    <div className=' mt-10'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <img className="h-10 w-10" src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                                <h2 className="font-semibold text-2xl">New Arrivals </h2>
                            </div>
                            <div className='text-gray-500 flex items-center gap-2 '>
                                <span>View all</span>
                                <i className='fa-solid fa-caret-right'></i>
                            </div>
                        </div>

                        <div className=" grid grid-cols-6 gap-8 bg-white">
                            {Ndata.map((value, index) => {
                                return (
                                    <div key={index} className="">
                                        <div className="w-full h-full">
                                            <img className="w-auto h-auto" src={value.cover} alt="" />
                                            <div>
                                                <h4 className="font-medium">{value.name}</h4>
                                                <span className="text-[#e94560] text-sm font-medium">${value.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                </section>


            </div >
        </div >
    )
}

export default Home
