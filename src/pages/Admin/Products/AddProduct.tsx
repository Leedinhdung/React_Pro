const AddProduct = () => {
  return (
    <div>
      <section className="bg-white mt-[80px] px-[25px]">
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-xl font-medium  ">Thêm sản phẩm</h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Trang chủ
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 ">Quản lý sản phẩm</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 ">Thêm sản phẩm</span>
                </div>
              </li>
            </ol>
          </nav>

        </div>

        <div className="  mx-auto max-w-max lg:py-16  p-5  ">
          <form action="#">
            <div className="grid gap-4 grid-cols-3 sm:gap-8">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  "
                >
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type product name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium  "
                >
                  Danh mục
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option selected>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium  "
                >
                  Hãng
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Product brand"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium  "
                >
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  id="size"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium  "
                >
                  Giá
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  min={1}
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="$2999"
                  required
                />
              </div>
              <div className="w-52 col-span-2 border-2 border-gray-300 rounded-md">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-52 rounded-md h-52"
                  alt=""
                />
              </div>
              <div className="sm:col-span-2 w-full">
                <label
                  className="block mb-2 text-sm font-medium "
                  htmlFor="user_avatar"
                >
                  Ảnh
                </label>
                <input
                  className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
                <div
                  className="mt-1 text-sm text-gray-500 "
                  id="user_avatar_help"
                >
                 
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium  "
                >
                  Mô tả sản phẩm
                </label>
                <textarea
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm  bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-sm focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black rounded-sm"
            >
              <i className="fa-solid fa-plus me-3"></i>
             Thêm sản phẩm
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default AddProduct;
