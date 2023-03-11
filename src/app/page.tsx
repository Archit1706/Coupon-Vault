"use client";

import SearchBar from "components/SearchBar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const clickHandler = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="">Hello World</div>
  );
};

export default Home;
