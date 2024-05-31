const HomePage = () => {
    return (
        <div>
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <a href="">
                        <img src="../../../public/vite.svg" alt="" />
                    </a>
                    {/* Search */}
                    <div className="w-full max-w-xl relative">

                        <input type="text" className="w-full border  pr-12 py-2 rounded-md forcus:outline-none" name="" id="" placeholder="Search" />
                        <button className="absolute right-4 top-2 text-lg text-gray-400">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <a href="" className="text-center text-gray-700 transition relative">
                            <div className="text-2xl">
                                <i className="far fa-heart"></i>
                            </div>
                            <div className="text-xs leading-3">Wish List</div>
                            <span className="absolute -top-1 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs">8</span>
                        </a>
                        <a href="" className="text-center text-gray-700 transition relative">
                            <div className="text-2xl">
                            <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs">8</span>
                        </a>
                        <a href="" className="text-center text-gray-700 transition relative">
                            <div className="text-2xl">
                            <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="text-xs leading-3">Profile</div>
                           
                        </a>
                    </div>
                </div>

            </header>
        </div>
    )
}
export default HomePage