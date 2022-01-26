import React from "react";
import Image from "next/image";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={"https://links.papareact.com/f90"}
            width="150px"
            height="40px"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Bar */}

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400  hover:bg-yellow-500">
          <input
            type={"text"}
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none"
          />
          <SearchIcon className="h-12 p-4 cursor-pointer" />
        </div>
        <div className="text-white flex items-center text-s  space-x-6 mx-6 whitespace-nowrap ">
          <div className="link">
            <p className="">Hello, Oussama!</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold  text-center ">
              3
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video </p>
        <p className="link">Prime Video </p>
        <p className="link hidden md:inline-flex">Prime Video </p>
        <p className="link hidden md:inline-flex">Prime Video </p>
        <p className="link hidden lg:inline-flex">Prime Video </p>
        <p className="link hidden lg:inline-flex">Prime Video </p>
        <p className="link hidden lg:inline-flex">Prime Video </p>
      </div>
    </header>
  );
};

export default Header;
