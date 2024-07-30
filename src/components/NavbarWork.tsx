import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});

const NavbarWork = () => {
  return (
    <nav
      className={`${raleway.className} w-full max-w-5xl mx-auto flex items-center justify-around rounded-full top-0 sticky mt-4 bg-black text-white z-50`}
    >
      <div className="w-20 h-20 relative ">
        <Image
          src={"/logo.png"}
          alt="Logo"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="gap-5 flex text-lg font-semibold tracking-widest">
        <Link href={"/"}>HOME</Link>
        <Link href={"about"}>ABOUT</Link>
        <Link href={"/"}>FREE CONSULTATION</Link>
      </div>
      <div></div>
    </nav>
  );
};

export default NavbarWork;
