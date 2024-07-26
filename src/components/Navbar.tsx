import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Raleway } from "next/font/google";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
});

const Navbar = () => {
  const [status, setStatus] = useState(false);
  return (
    <nav
      className={`${raleway.className} fixed z-20 h-16 w-full top-0 left-0 flex justify-between px-8 items-center overflow-y-hidden bg-white`}
    >
      <div className="w-24 h-24 relative lg:h-26 lg:w-26">
        <Image
          fill
          alt="Logo"
          src={"/logo.png"}
          className="object-cover w-full object-center"
        />
      </div>

      <div className="md:flex hidden items-center gap-4 text-xl font-semibold">
        <Link
          href={"/"}
          className="hover:text-red-600 duration-200 transition-colors ease-out"
        >
          HOME
        </Link>
        <Link
          href={"about"}
          className="hover:text-red-600 duration-200 transition-colors ease-out"
        >
          ABOUT
        </Link>
        <Link
          href={""}
          className="hover:text-red-600 duration-200 transition-colors ease-out"
        >
          WORK
        </Link>
        <Link
          href={"/"}
          className="hover:text-red-600 duration-200 transition-colors ease-out"
        >
          CONTACT
        </Link>
      </div>
      <div className="hidden md:flex">
        <Button className="bg-red-600 hover:bg-red-400">
          <Link href={"/"}>GET IN TOUCH</Link>
        </Button>
      </div>
      <TiThMenu
        className="visible md:hidden text-red-600"
        size={30}
        onClick={() => setStatus(!status)}
      />
      <div
        className={
          status
            ? "w-full visible md:hidden fixed h-screen space-y-4 py-3 px-4 top-0 left-0 bg-white flex flex-col items-center justify-end duration-500 ease-out transition-all"
            : "w-full visible md:hidden fixed h-screen space-y-4 py-3 px-4 top-[-1000px] left-0 bg-white flex flex-col items-center justify-end duration-500 ease-in transition-all"
        }
      >
        <div className="flex flex-col w-full ">
          <div className="flex flex-col gap-3 text-2xl mb-4 items-center">
            <Link onClick={() => setStatus(!status)} href={"/"}>
              HOME
            </Link>
            <Link onClick={() => setStatus(!status)} href={"about"}>
              ABOUT
            </Link>
            <Link onClick={() => setStatus(!status)} href={"/"}>
              WORK
            </Link>
            <Link onClick={() => setStatus(!status)} href={"/"}>
              CONTACT
            </Link>
          </div>
          <div className="w-full mb-2" onClick={() => setStatus(!status)}>
            <Button className="bg-red-600 w-full hover:bg-red-400">
              <Link href={"/"}>GET IN TOUCH</Link>
            </Button>
          </div>
          <Button
            variant={"secondary"}
            className="w-full font-bold"
            onClick={() => setStatus(!status)}
          >
            CLOSE
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
