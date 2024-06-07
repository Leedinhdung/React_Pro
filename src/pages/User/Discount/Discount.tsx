import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Discount = () => {
    const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,


        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    }
    const Ddata = [
        {
            cover: "./images/discount/discount-1.png",
            name: "BenuX 2022",
            price: "$250",
        },
        {
            cover: "./images/discount/discount-2.png",
            name: "Sony TV 1080p",
            price: "$450",
        },
        {
            cover: "./images/discount/discount-3.png",
            name: "Sony PS4",
            price: "$50",
        },
        {
            cover: "./images/discount/discount-4.png",
            name: "Setgearr 2022",
            price: "$100",
        },
        {
            cover: "./images/discount/discount-5.png",
            name: "Tony BGB",
            price: "$20",
        },
        {
            cover: "./images/discount/discount-6.png",
            name: "RG products",
            price: "$200",
        },
        {
            cover: "./images/discount/discount-7.png",
            name: "Ranasonic 2022",
            price: "$300",
        },
        {
            cover: "./images/discount/discount-8.png",
            name: "Pune HD",
            price: "$30",
        },
        {
            cover: "./images/discount/discount-9.png",
            name: "Sony CCTV",
            price: "$80",
        },
    ]
    return (
        <section className=' bg-[#f6f9fc] '>
            <div className='container-z '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center text-2xl font-semibold gap-3'>
                        <img className="w-10 h-10" src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                        <h2>Big Discounts</h2>
                    </div>
                    <div className='text-gray-500 flex items-center gap-2  '>
                        <span>View all</span>
                        <i className='fa-solid fa-caret-right'></i>
                    </div>
                </div>
                <Slider {...settings} className="flex mt-10">
                    {Ddata.map((value, index) => {
                        return (
                            <>
                                <div className='bg-white shadow w-[90%] ms-2.5 p-4 rounded-md ' key={index}>
                                    <div className='img'>
                                        <img src={value.cover} alt='' width='100%' />
                                    </div>
                                    <h4>{value.name}</h4>
                                    <span className='text-[#e94560] font-medium text-sm'>{value.price}</span>
                                </div>
                            </>
                        )
                    })}
                </Slider>
            </div>
        </section>

    )
}

export default Discount
