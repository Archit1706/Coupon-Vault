"use client";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler, LiteralUnion } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import Typewriter from "typewriter-effect";
import { name } from "../staticProducts";
type Props = {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null;
};
interface Inputs {
    email: string;
    password: string;
}

const Login = ({ providers }: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const router = useRouter();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        toast.success("Login Successfull");
        router.push("/merchant");
    };
    const registerOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
            },
        },
    };
    return (
        <div>
            <section className=" min-h-screen   flex items-center justify-between w-full">
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className=" flex rounded-2xl pt-10 w-full px-8 md:px-20 items-center">
                    <div className="md:w-1/2 px-2 md:px-2 ">
                        <h1 className="text-4xl antialiased font-bold dark:text-white">
                            Welcome to {name}
                        </h1>
                        {/* <h2 className="font-bold text-2xl text-[#126eff] dark:text-[#e5ff12]">
                            Fast Login
                        </h2> */}
                        <p className="text-xs mt-4 text-[#002D74] dark:text-white">
                            Easy login with Email and Password!
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-4"
                        >
                            <input
                                className="py-2 px-4 mt-8 rounded-xl border"
                                type="email"
                                placeholder="Email"
                                {...register("email", registerOptions.email)}
                            />
                            <small className="text-danger">
                                {errors?.email && errors.email.message}
                            </small>
                            <div className="relative">
                                <input
                                    className="py-2 px-4 rounded-xl border w-full"
                                    type="password"
                                    placeholder="Password"
                                    {...register(
                                        "password",
                                        registerOptions.password
                                    )}
                                />
                                <small className="text-danger">
                                    {errors?.password &&
                                        errors.password.message}
                                </small>
                            </div>
                            <button className="bg-[#5a99ff] rounded-xl text-white py-2 hover:scale-105 duration-300">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                <div className="md:inline-block hidden w-2/3 h-full">
                    <div className=" px-2 h-screen m-auto flex flex-wrap items-center">
                        <div className=" md:w-full md:pr-2 lg:pr-0 pr-0 sm:pt-2">
                            <p className="title-font font-medium text-5xl text-gray-900 dark:text-white">
                                Setup{" "}
                                <span className="text-blue-500">
                                    your Coupons.
                                </span>
                            </p>

                            <p className="leading-relaxed dark:text-gray-300 text-3xl ">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Access Your Coupons Anywhere",
                                            "Get Your Coupons in Your Inbox",
                                            "Handle Your Loyalty Users",
                                            "Set Up more Campaigns",
                                            "Lets Set Go",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 30,
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
