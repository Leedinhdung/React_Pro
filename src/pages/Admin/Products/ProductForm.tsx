import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";


import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
const productSchema = z.object({
  name: z.string().min(5, { message: 'Tên sản phẩm phải từ 5 kí tự trở lên !' }).max(100, { message: 'Tên sản phẩm không được quá 100 kí tự !' }),
  category: z.string(),
  brand: z.string().min(1, { message: 'Vui lòng nhập thông tin' }),
  size: z.string().min(1, { message: 'Vui lòng nhập thông tin' }),
  price: z.number().min(1, { message: "Vui lòng nhập giá lớn hơn 0" }),
  description: z.string().optional(),
})

const ProductForm = ({ addPro, editPro }: any) => {
  const { id } = useParams();
  console.log(id);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  if (id) {
    useEffect(() => {
      fetch('http://localhost:3000/products/' + id).then(res => res.json()).then(data => {
        reset(data)
      })
    }, [id])
  }
  const onSubmit = (data: any) => {
    if (id)
      editPro(data, id)
    else
      addPro(data)
  }
  return (
    <div>
      <section className="p-3">
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-medium  ">{id ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link to={'/'}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
                >

                  Trang chủ
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fa-solid fa-chevron-right w-3 h-3 me-2.5"></i>
                  <Link
                    to={"/product"}
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 "
                  >
                    Quản lý sản phẩm
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <i className="fa-solid fa-chevron-right w-3 h-3 me-2.5"></i>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 ">
                    {id ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="  mx-auto max-w-max lg:py-16  p-5  ">
          <form onSubmit={handleSubmit(onSubmit)}>
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

                  id="name"
                  {...register("name", { required: "Vui lòng nhập thông tin" })}

                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type product name"

                />
                <small className="text-red-600 text-sm mt-2">{errors.name?.message?.toString()}</small>
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
                  {...register("category", { required: true })}
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >

                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
                <small className="text-red-600 text-sm mt-2">{errors.category?.message?.toString()}</small>
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

                  id="brand"
                  {...register("brand", { required: true })}
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Product brand"

                />
                <small className="text-red-600 text-sm mt-2">{errors.brand?.message?.toString()}</small>
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

                  id="size"
                  {...register("size", { required: true })}
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="M"
                />
                <small className="text-red-600 text-sm mt-2">{errors.size?.message?.toString()}</small>
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

                  id="price" {...register("price", { required: true, valueAsNumber: true })}
                  min={1}
                  className="bg-gray-50 border border-gray-300  text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="$2999"

                />
                <small className="text-red-600 text-sm mt-2">{errors.price?.message?.toString()}</small>
              </div>
              {/* <div className="w-52 col-span-2 border-2 border-gray-300 rounded-md">
                  <img
                    src="https://picsum.photos/200/300"
                    className="w-52 rounded-md h-52"
                    alt=""
                  />
                </div> */}
              {/* <div className="sm:col-span-2 w-full">
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
                  ></div>
                </div> */}

              <div className="sm:col-span-3">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium  "
                >
                  Mô tả sản phẩm
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  rows={8}
                  className="block p-2.5 w-full text-sm  bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-sm focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black"
            >
              <i className="fa-solid fa-plus me-3"></i>
              {id ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}


export default ProductForm;
