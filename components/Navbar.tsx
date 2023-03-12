"use client";
import React, { useEffect, useState } from "react";
import { Navbar as Nav } from "flowbite-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { name } from "staticProducts";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Logo from "assets/logo.png";
import { GiWallet } from "react-icons/gi";
type Props = {
    // session: Session | null;
};
const session = null;

const Navbar = ({}: Props) => {
    const [currTheme, setcurrTheme] = useState("");
    const router = useRouter();
    // localStorage.setItem("author", session?.user?.name || "");
    // localStorage.setItem("authorImage", session?.user?.image || "");
    // localStorage.setItem("isLoggedIn", session ? "true" : "false");

    const clickHandler = () => {
        if (localStorage.theme === "dark") localStorage.theme = "light";
        else localStorage.theme = "dark";
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setcurrTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setcurrTheme("light");
        }
    };

    useEffect(() => {
        // fetch(`/api/user/bookmark?userEmail=${session?.user?.email}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //   });

        // fetch(`/api/user/bookmark`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     userEmail: session?.user?.email,
        //     blogId: "63c8518431ad3b98d781c00d",
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     // data.length = 6;
        //     console.log(data);
        //   });

        clickHandler();
    }, []);

    const [query, setQuery] = useState("");
    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query && query.length > 0) {
            router.push(`/find?search=${query}`);
        }
    };

    // const onSearch = (query: string) => {
    //   if (query && query.length > 0) {
    //     router.push(`/find?search=${query}`);
    //   }
    // };
    return (
        <div className="max-w-[1420px] mx-auto flex justify-center items-center sticky top-0 z-20">
            <Nav
                // fluid={true}
                rounded={true}
                className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-300 dark:border-gray-600"
            >
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Nav.Brand
                        href="/"
                        className="flex items-center cursor-pointer"
                    >
                        <GiWallet className="h-8 w-8 mr-3 dark:bg-white dark:text-gray-900 rounded bg-gray-900 text-white" />

                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            {name}
                        </span>
                    </Nav.Brand>

                    <div className="flex gap-2">
                        {/* Day - night toggler */}
                        <span className="ml-auto">
                            {currTheme.length > 0 ? (
                                <button
                                    onClick={clickHandler}
                                    id="theme-toggle"
                                    type="button"
                                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 md:float-right md:mr-4"
                                >
                                    {currTheme == "dark" ? (
                                        <MdLightMode className="text-xl" />
                                    ) : (
                                        <MdDarkMode className="text-xl" />
                                    )}
                                </button>
                            ) : (
                                <button
                                    onClick={clickHandler}
                                    id="theme-toggle"
                                    type="button"
                                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 md:float-right md:mr-4"
                                >
                                    <svg
                                        id="theme-toggle-dark-icon"
                                        className={`${
                                            currTheme == "dark" && "hidden"
                                        } w-5 h-5`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                </button>
                            )}
                            {/* <Nav.Toggle className="" /> */}
                        </span>
                        <div className="">
                            {session ? (
                                // <MenuDropdown session={session} />
                                // <hr />
                                <div></div>
                            ) : (
                                <button
                                    onClick={() => router.push("/login")}
                                    className="inline-flex items-center justify-center px-3 py-1.5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </Nav>
        </div>
    );
};

export default Navbar;
