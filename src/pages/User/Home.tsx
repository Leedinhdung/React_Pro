import { FaBolt, FaPlus, FaStar } from "react-icons/fa6";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



import Banner from '../../components/home/Banner';

import { FaHeart } from "react-icons/fa";
import Discount from "./Discount/Discount";
import Shop from "./shops/Shop";

const Home = () => {

    const SampleNextArrow = (props: any) => {
        const { onClick } = props
        return (
            <div className='absolute top-[40%] -right-5 w-10 h-10 leading-[44px] bg-[#0f3460] rounded-full transform-cpu hover:bg-[#e94560] transition-all duration-200 text-center' onClick={onClick}>
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
        // autoplay: true,


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
    const data = [
        {
            cover: <i className='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]


    return (

        // Banner
        <div className="">
            <Banner />
            <div className=' bg-[#f6f9fc] py-10 mx-auto'>
                <div className="container-z ">
                    <div className="flex items-center ">
                        <FaBolt className="me-3 text-[#e94560] " fontSize={24} />
                        <h1 className=' font-[600] text-2xl'>Flash Deals</h1>
                    </div>
                    <Slider {...settings} className=" mt-10">
                        {productItems.map((value, id) => {
                            return (
                                <div key={id} className="ms-5 shadow">
                                    <div className="bg-white w-[90%]  p-10 relative rounded-lg">
                                        <div className="">
                                            <span className="absolute top-0 left-0 bg-[#e94560] px-3 py-1 text-sm rounded-full text-white m-2.5">{value.discount}% Off</span>
                                            <img className=" mx-auto" src={value.cover} alt="" />
                                            <div className="absolute top-0 right-0 m-2.5  transition ">

                                                <FaHeart className="text-xl my-2.5 mx-2" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3>{value.name}</h3>
                                            <div className="flex text-[#ffcd4e] text-sm gap-1.5 my-2">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <div className="flex justify-between text-[#e94560]">
                                                <h4 className="font-semibold ">${value.price}</h4>
                                                <button className="text-xl font-semibold transition-all border p-2 rounded-md hover:bg-[#e94560] hover:text-white"><FaPlus /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Slider>
                </div>
                <section className='container-z mx-auto'>
                    <div className='my-10'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3 my-5'>
                                <img className="h-10 w-10" src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                                <h2 className="font-semibold text-2xl">New Arrivals </h2>
                            </div>
                            <div className='text-gray-500 flex items-center gap-2 '>
                                <span>View all</span>
                                <i className='fa-solid fa-caret-right'></i>
                            </div>
                        </div>

                        <div className=" grid grid-cols-6 gap-8 bg-white rounded-xl shadow p-5">
                            {Ndata.map((value, index) => {
                                return (
                                    <div key={index} className=" rounded-lg p-5">
                                        <div className="w-full h-full">
                                            <img className="w-44" src={value.cover} alt="" />
                                            <div className="flex items-center justify-between mt-5">
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

                <Discount />
                <Shop />
                <section className='annocument background'>
                    <div className='flex justify-center gap-7'>
                        <div className='w-[30%] h-[340px] ' >
                            <img src='./images/banner-1.png' className="h-[340px]" width='100%' height='100%' />
                        </div>
                        <div className='w-[60%] '>
                            <img src='./images/banner-2.png' className="h-[340px]" width='100%' height='100%' />
                        </div>
                    </div>
                </section>


                <section className='text-center bg-[#f6f9fc] py-12 background'>
                    <div className='container-z grid grid-cols-4 gap-2.5'>
                        {data.map((val, index) => {
                            return (
                                <div className='bg-white p-8 rounded-md shadow m-2.5' key={index}>
                                    <div className='m-auto w-16 h-16 left-16 mb-2.5 icon-circle'>
                                        <i className="text-2xl bg-[#F3F5F9] px-3 py-2 rounded-full">{val.cover}</i>
                                    </div>
                                    <h3 className="font-medium">{val.title}</h3>
                                    <p className="text-[16px] mt-2.5 text-gray-500">{val.decs}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>


            </div >
        </div >
    )
}

export default Home
