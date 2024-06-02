const RegisterPage = () => {
    return (
        <div className="login mt-[100px]">
            <form className="bg-white max-w-[420px] mx-auto rounded-md shadow-md p-10">
                <div>
                    <h2 className="font-bold uppercase text-center my-5">Đăng ký</h2>
                    <div className="text-center mb-5">
                        <div className="flex justify-center">
                            <img src="../../public/vite.svg" alt="" />
                        </div>
                        <p>Chào mừng bạn đến với hệ thống</p>
                        <p className="font-bold text-xl text-[#1E40AF]">RELAR</p>
                    </div>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        v-model="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        v-model="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Xác nhận mật khẩu
                    </label>
                    <input
                        type="password"
                        v-model="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-64 px-5 py-2 text-center border-none"
                    >
                        Đăng Ký
                    </button>
                </div>
                <div className="text-center mt-6">
                    <span>
                        Nếu bạn đã có tài khoản!
                        <a href="/login" className="no-underline hover:underline">
                            Đăng nhập
                        </a>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
