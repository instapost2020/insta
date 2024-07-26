import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className={`${raleway.className} z-10 bottom-0 left-0 w-full h-auto relative px-8 gap-8 py-6 bg-yellow-400 grid md:grid-cols-3`}
    >
      <div className="relative w-full h-44 justify-center items-center">
        <Image
          src={"/logo.png"}
          fill
          alt="Logo"
          className="object-contain w-full h-full object-center"
        />
      </div>
      <div className="flex flex-col font-semibold items-start justify-center">
        <h1 className="font-bold text-xl text-gray-800">CONNECT WITH US</h1>
        <Link
          href={"https://www.facebook.com/instapostph"}
          className="text-lg text-red-600"
        >
          facebook
        </Link>
        <Link
          href={"https://www.instagram.com/instapostph/"}
          className="text-lg text-red-600"
        >
          instagram
        </Link>
      </div>
      <div className="flex flex-col font-semibold items-start justify-center">
        <h1 className="font-bold text-xl text-gray-800">TERMS AND CONDITION</h1>
        <span className="text-lg text-red-600">policy</span>
        <span className="text-lg text-red-600">usage</span>
      </div>
    </footer>
  );
};

export default Footer;
