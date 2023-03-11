import React, { useState } from "react";

import {
    MdDashboard,
    MdSettingsSuggest,
    MdOutlineMenuBook,
} from "react-icons/md";
import { GiForkKnifeSpoon, GiHotMeal } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineUser, AiOutlinePoweroff } from "react-icons/ai";

import Logo from "assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [selected, setSelected] = useState("dashboard");

    return (
        <div className="h-full fixed w-20 bg-gray-800 p-4">
            {/* logo */}
            <div className="flex flex-col justify-center items-center mb-12">
                <img src={Logo.src} alt="logo" className="w-10 h-10" />
            </div>

            {/* menu items */}
            <div className="flex flex-col justify-center items-center">
                <Link to="/">
                    <div
                        className={
                            `${selected}` === "dashboard"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("dashboard");
                            console.log(selected);
                        }}
                    >
                        <MdDashboard
                            className={
                                `${selected}` === "dashboard"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
                <Link to="/staff">
                    <div
                        className={
                            `${selected}` === "staff"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("staff");
                            console.log(selected);
                        }}
                    >
                        <GiHotMeal
                            className={
                                `${selected}` === "staff"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
                <Link to="/menu">
                    <div
                        className={
                            `${selected}` === "menu"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("menu");
                            console.log(selected);
                        }}
                    >
                        <MdOutlineMenuBook
                            className={
                                `${selected}` === "menu"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
                <Link to="/restaurant">
                    <div
                        className={
                            `${selected}` === "restaurant"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("restaurant");
                            console.log(selected);
                        }}
                    >
                        <GiForkKnifeSpoon
                            className={
                                `${selected}` === "restaurant"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
                <Link to="/user-details">
                    <div
                        className={
                            `${selected}` === "user-details"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("user-details");
                        }}
                    >
                        <TbListDetails
                            className={
                                `${selected}` === "user-details"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
            </div>

            {/* divider */}
            <hr className="border mx-2 my-4 border-gray-300 " />

            {/* settings - profile */}
            <div className="flex flex-col justify-center items-center">
                <Link to="/profile">
                    <div
                        className={
                            `${selected}` === "profile"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("profile");
                        }}
                    >
                        <AiOutlineUser
                            className={
                                `${selected}` === "profile"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
                <Link to="/settings">
                    <div
                        className={
                            `${selected}` === "settings"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("settings");
                        }}
                    >
                        <MdSettingsSuggest
                            className={
                                `${selected}` === "settings"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
            </div>

            {/* logout */}
            <div className="flex flex-col justify-center items-center mt-12 absolute bottom-4">
                <Link to="/login">
                    <div
                        className={
                            `${selected}` === "logout"
                                ? "border-l-4 rounded-sm border-sky-200"
                                : ""
                        }
                        onClick={() => {
                            setSelected("logout");
                        }}
                    >
                        <AiOutlinePoweroff
                            className={
                                `${selected}` === "logout"
                                    ? "h-5 w-5 m-3 text-sky-300"
                                    : "h-5 w-5 m-3 text-gray-300 hover:text-white"
                            }
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;