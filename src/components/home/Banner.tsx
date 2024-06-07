
import { IoIosShirt } from "react-icons/io";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
    {
        cateImg: <IoIosShirt />,
        cateName: "Fashion",
        path: "/home"
    },
    {
        cateImg: <IoIosShirt />,
        cateName: "Fashion",
        path: "/home"
    },
    {
        cateImg: <IoIosShirt />,
        cateName: "Fashion",
        path: "/home"
    },
    {
        cateImg: <IoIosShirt />,
        cateName: "Fashion",
        path: "/home"
    },
    {
        cateImg: <IoIosShirt />,
        cateName: "Fashion",
        path: "/home"
    },
    {
        cateImg: <IoIosShirt />,
        cateName: "Fashion",
        path: "/home"
    }

]
const dataSlide = [
    {
        id: 1,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: "../../../public/images/slide/slide-1.png",
    },
    {
        id: 2,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: "../../../public/images/slide/slide-2.png",
    },
    {
        id: 3,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: "../../../public/images/slide/slide-3.png",
    },
    {
        id: 4,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: "../../../public/images/slide/slide-4.png",
    },
]
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       
    };
    return (
        <section className='container flex'>
            <div className=' w-[20%] h-[510px] py-4 rounded-md shadow mt-2 hidden md:block'>
                {
                    data.map(({ cateImg, cateName, path }) => (
                        <Link to={path} className='flex items-center gap-3 mt-3 mx-5 hover:bg-[#ffe1ef] cursor-pointer p-3 transition-all rounded'>
                            <span className='text-3xl'>{cateImg}</span>
                            <span className=''>{cateName}</span>
                        </Link>
                    ))
                }
            </div>
            <div className=' w-[70%] homeSlide z-10 flex-wrap flex-col'>
                <Slider {...settings}>
                    {dataSlide.map((value, index) => {
                        return (
                            <>
                                <div className='flex justify-between mx-10 mt-20' key={index}>
                                    <div className='w-[60%]'>
                                        <h1 className="font-bold">{value.title}</h1>
                                        <p className="font-medium">{value.desc}</p>
                                        <button className='bg-[#e94560] py-3 px-10 font-bold text-white rounded'>Visit Collections</button>
                                    </div>
                                    <div className='w-[30%]'>
                                        <img src={value.cover} className=" h-full" alt='' />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default Banner
