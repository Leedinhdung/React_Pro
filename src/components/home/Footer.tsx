

const Footer = () => {

    return (
        <footer className="bg-[#0f3460] py-24 text-white">
            <div className="container-z grid grid-cols-4 gap-5">
                <div className="box">
                    <h1 className="mb-7 text-3xl text-[#e94560] font-extrabold ">Fashion</h1>
                    <p className="mb-5 text-sm font-light opacity-50">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                        libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
                        et lectus vel ut sollicitudin elit at amet.
                    </p>
                    <div className="flex gap-5">
                        <div className="bg-[#0c2a4d] py-4 p-5 rounded-md flex gap-2 items-center">
                            <i className="fa-brands fa-google-play"></i>
                            <span>Google Play</span>
                        </div>
                        <div className="bg-[#0c2a4d] py-4 p-5 rounded-md flex gap-2 items-center">
                            <i className="fa-brands fa-app-store-ios"></i>
                            <span>App Store</span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h2 className="mb-5 font-bold text-2xl">About Us</h2>
                    <ul className="opacity-50" >
                        <li className="mb-2.5">Careers</li>
                        <li className="mb-2.5">Our Stores</li>
                        <li className="mb-2.5">Our Cares</li>
                        <li className="mb-2.5">Terms & Conditions</li>
                        <li className="mb-2.5">Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2 className="mb-5 font-bold text-2xl">Customer Care</h2>
                    <ul className="opacity-50">
                        <li className="mb-2.5">Help Center </li>
                        <li className="mb-2.5">How to Buy </li>
                        <li className="mb-2.5">Track Your Order </li>
                        <li className="mb-2.5">Corporate & Bulk Purchasing </li>
                        <li className="mb-2.5">Returns & Refunds </li>
                    </ul>
                </div>
                <div className="box">
                    <h2 className="mb-5 font-bold text-2xl">Contact Us</h2>
                    <ul className="opacity-50">
                        <li className="mb-2.5">
                            70 Washington Square South, New York, NY 10012, United States{" "}
                        </li>
                        <li className="mb-2.5">Email: uilib.help@gmail.com</li>
                        <li className="mb-2.5">Phone: +1 1123 456 780</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
