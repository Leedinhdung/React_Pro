import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import * as z from 'zod';
import { AuthContext } from "../contexts/AuthProvider";
import IUser from "../interfaces/IUser";


const LoginPage = () => {
  const { dispatchUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );
  const authSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Vui lòng nhập email" })
      .email("Vui lòng nhập đúng định dạng."),
    password: z.string().min(6, { message: 'Mật khẩu cần ít nhất 6 kí tự' })
      .regex(passwordValidation, {
        message: 'Vui lòng nhập mật khẩu có kí tự đặc biệt và chữ in hoa',
      }),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(authSchema),

  });
  const onSubmit = (data: IUser) => {

    (async () => {
      try {
        const res = await fetch("http://localhost:3000/login", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        if (res.status == 200) {
          const datas = await res.json()
          // console.log(datas);
            localStorage.setItem("user", JSON.stringify(datas));
            alert("Bạn đã đăng nhập thành công !")
            navigate('/')
            dispatchUser({ type: "login" });
         
        }
      } catch (error) {
        console.log(errors);
      }
    })()
  }

  return (
    <div className="login mt-[100px]">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white max-w-[420px] mx-auto rounded-md shadow-md p-10">
        <div>
          <h2 className="font-bold uppercase text-center my-5">Đăng nhập</h2>
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

            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
            {...register("email", { required: true })}
          />
          <span>{errors?.email?.message}</span>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            type="password"

            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
            {...register("password", { required: true })}
          />
          <span>{errors?.password?.message}</span>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <span>Ghi nhớ</span>
          </div>
          <div>
            <a href="#" className="no-underline hover:underline">
              Quên mật khẩu ?
            </a>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-64 px-5 py-2 text-center border-none"
          >
            Đăng Nhập
          </button>
        </div>
        <div className="text-center mt-6">
          <span>
            Nếu bạn chưa có tài khoản!
            <Link to={"/register"} className="no-underline hover:underline">
              Đăng ký
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
