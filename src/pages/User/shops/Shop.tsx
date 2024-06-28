
const Shop = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ],
    shopItems = [
      {
        id: 7,
        cover: "./images/shops/shops-1.png",
        name: "Mapple Earphones",
        price: "180",
        discount: "25",
      },
      {
        id: 8,
        cover: "./images/shops/shops-2.png",
        name: "Vivo android one",
        price: "120",
        discount: "10",
      },
      {
        id: 9,
        cover: "./images/shops/shops-3.png",
        name: "Sony Light",
        price: "20",
        discount: "50 ",
      },
      {
        id: 10,
        cover: "./images/shops/shops-4.png",
        name: "Iphone",
        price: "999",
        discount: "10 ",
      },
      {
        id: 11,
        cover: "./images/shops/shops-5.png",
        name: "Ceats wireless earphone",
        price: "80",
        discount: "20 ",
      },
      {
        id: 12,
        cover: "./images/shops/shops-7.png",
        name: "Redimi Phone",
        price: "400",
        discount: "20 ",
      },
      {
        id: 13,
        cover: "./images/shops/shops-8.png",
        name: "Xeats Bluetooth earphones",
        price: "60",
        discount: "5 ",
      },
      {
        id: 14,
        cover: "./images/shops/shops-9.png",
        name: "Airpod",
        price: "120",
        discount: "10",
      },
      {
        id: 15,
        cover: "./images/shops/shops-10.png",
        name: "Silver Cap",
        price: "5",
        discount: "2",
      },
    ]
  return (
    <>
      <section className=" bg-[#f6f9fc] py-12">
        <div className="container-z flex ">
          <div className="shadow p-6 bg-white w-[23%] h-[510px] py-3 rounded mt-1">
            <div className="flex text-xl mb-2.5 font-bold">
              <h1 className="pe-16">Brands </h1>
              <h1 className="opacity-50 border-l-4 border-black pl-16">Shops </h1>
            </div>
            {data.map((value, index) => {
              return (
                <div className="bg-[#f6f9fc] my-4 py-3 px-4 transition rounded flex items-center gap-7 hover:bg-white hover:shadow" key={index}>
                  <img src={value.cateImg} alt="" />
                  <span>{value.cateName}</span>
                </div>
              );
            })}
            <div className="bg-[#f6f9fc] my-4 py-3 px-4 transition rounded-md  gap-7 hover:bg-white hover:shadow mt-16 text-center font-medium ">
              <button>View All Brands</button>
            </div>
          </div>

          <div className="ms-8 w-full">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">
                <h2>Mobile Phones</h2>
              </div>
              <div className="flex gap-3 items-center ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className=" grid grid-cols-3">
              {
                shopItems.map((value, index) => {
                  return (
                    <div key={index} className=" my-3">
                      <div className="bg-white w-[90%] shadow p-10 relative rounded-lg">
                        <div className="product mtop">
                          <div className="img">
                            <span className="absolute top-0 left-0 bg-[#e94560] px-3 py-1 text-sm rounded-full text-white m-2.5">{value.discount}% Off</span>
                            <img className=" mx-auto" src={value.cover} alt="" />
                            <div className="absolute top-0 right-0 m-2.5  transition ">

                              <i
                                className="fa-regular fa-heart text-xl my-2.5 mx-2" 

                              ></i>
                            </div>
                          </div>
                          <div className="product-details">
                            <h3>{value.name}</h3>
                            <div className="flex text-[#ffcd4e] text-sm gap-1.5 my-2">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="flex justify-between text-[#e94560]">
                              <h4 className="font-semibold ">${value.price}.00 </h4>

                              <button className="text-xl font-semibold transition-all border px-2 py-1 rounded-md hover:bg-[#e94560] hover:text-white">
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
