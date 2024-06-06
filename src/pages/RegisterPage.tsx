import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as z from 'zod';
const RegisterPage = () => {
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
        confirm: z.string(),
    }).refine(
        (values) => {
            return values.password === values.confirm;
        },
        {
            message: "Mật khẩu vừa nhập không khớp!",
            path: ["confirm"],
        }
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(authSchema),

    });
    const onSubmit = (data: any) => {

        (async () => {
            try {
                const res = await fetch("http://localhost:3000/register", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                if (res.status == 201) {
                    alert("Bạn đã đăng ký thành công !")
                    navigate('/login')
                } else {
                    alert('Email đã tồn tại !')
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
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
                        {...register("email", { required: true })}
                    />
                    <small className="text-red-600 text-sm mt-2">{errors.email?.message}</small>
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
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
                        {...register("password", { required: true })}
                    />
                    <small className="text-red-600 text-sm mt-2">{errors.password?.message}</small>
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
                        id="confirm"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 px-2 outline-none"
                        {...register("confirm", { required: true })}

                    />
                    <small className="text-red-600 text-sm mt-2">{errors.confirm?.message}</small>
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
                        <Link to={"/login"} className="no-underline hover:underline">
                            Đăng nhập
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
