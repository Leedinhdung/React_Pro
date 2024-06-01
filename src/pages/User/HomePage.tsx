const HomePage = () => {
    return (
        <div>
            <header className="py-4 shadow-sm bg-white">
                <div className="container px-16  flex items-center justify-between">
                    {/* Logo */}
                    <a href="">
                        <img src="../../../public/vite.svg" alt="" />
                    </a>
                    {/* Search */}
                    <div className="w-full max-w-xl relative">

                        <input type="text" className="w-full border pe-12  py-1.5 rounded-md forcus:outline-none" name="" id="" placeholder="Search" />
                        <button className="absolute right-4 top-1.5 text-lg text-gray-400">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="flex items-center gap-x-16">
                        <a href="" className="text-center text-gray-700 transition relative hover:text-gray-400">
                            <div className="text-2xl">
                                <i className="far fa-heart"></i>
                            </div>
                            <div className="text-xs leading-3">Wish List</div>
                            <span className="absolute -top-1 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs ">8</span>
                        </a>
                        <a href="" className="text-center text-gray-700 transition relative hover:text-gray-400">
                            <div className="text-2xl">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs">8</span>
                        </a>
                        <div>
                            <img
                                id="avatarButton"
                                typeof="button"
                                data-dropdown-toggle="userDropdown"
                                data-dropdown-placement="bottom-start"
                                className="w-11 h-11 rounded-full cursor-pointer"
                                alt="User dropdown"
                                src="../../public/vite.svg"
                            />

                            <div
                                id="userDropdown"
                                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                            >
                                <div className="px-4 py-3 text-sm text-gray-900 ">
                                    <div>Bonnie Green</div>
                                    <div className="font-medium truncate">name@flowbite.com</div>
                                </div>
                                <ul
                                    className="py-2 text-sm text-gray-700 "
                                    aria-labelledby="avatarButton"
                                >
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                            Earnings
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <nav className="bg-gray-800">
                <div className="container flex">
                    <div className="px-8 py-4 bg-red-600 flex items-center cursor-pointer relative group">
                        <div className="text-white">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="capitalize ms-2 text-white">Danh mục sản phẩm</div>
                        <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-gray-100 divide-dashed hidden group-hover:block transition">
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <i className="fa-solid fa-shirt"></i>
                                <span className="ms-6 text-gray-600 text-sm">Áo sơ mi</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between flex-grow ps-12">
                        <div className="flex items-center gap-x-6 capitalize">
                            <a href="#" className="text-gray-200 hover:text-white transition">Trang chủ</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">Shop</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">Bài viết</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">Hỗ trợ</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">Liên hệ</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bg-cover bg-no-repeat bg-center" >
                <img src="../../../public/images/slide_1_img.webp" className="w-full h-96" alt="" />
            </div>
        </div>
    )
}
export default HomePage