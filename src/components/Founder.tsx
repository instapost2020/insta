import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import localFont from "next/font/local";
import { RiInstagramFill } from "react-icons/ri";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});
const Founder = () => {
  return (
    <div>
      <h1
        className={`${bhineka.className} text-center tracking-wider text-6xl text-red-600`}
      >
        Meet the Founders!
      </h1>
      <div
        className={`${raleway.className} h-fit flex flex-col md:flex-row inset-0 py-12 w-full max-w-5xl mx-auto px-4`}
      >
        <div className="w-full max-w-xl md:max-w-2xl h-[50vh] relative mx-auto bg-slate-5  rounded-xl">
          <Image
            src={"/jelyellow.jpg"}
            fill
            alt="Jel"
            className="object-top object-cover w-full h-full  inset-0 px-8  rounded-2xl"
          />
        </div>
        <div className="w-full  mt-3  max-w-2xl mx-auto md:max-w-xl flex flex-col justify-center">
          <div className=" h-fit  px-8 py-6 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mx-auto bg-red-600 ">
            <h1
              className={`${raleway.className} text-xl font-semibold text-yellow-400`}
            >
              Jelynson Battung Patricio
            </h1>
            <h4
              className={`${raleway.className} font-semibold italic text-gray-200 mb-2`}
            >
              Owner & Strategist
            </h4>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius explicabo, dolorem mollitia minus neque omnis debitis dolor!
              Reprehenderit a voluptatum odio possimus dolores beatae ex. Fuga
              similique nemo iste?
            </p>
            <div className="flex gap-4 mt-5 items-center">
              <Link href="https://www.instagram.com/thefirsttimemommy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <RiInstagramFill size={40} className="text-yellow-400" />
              </Link>
              <Link
                href={"https://www.facebook.com/profile.php?id=100089485210478"}
              >
                <FaFacebook size={40} className="text-yellow-400" />
              </Link>
              <p className="text-md text-white">- Follow on Social Media</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${raleway.className} h-fit flex flex-col md:flex-row inset-0 py-12 w-full max-w-5xl mx-auto px-4`}
      >
        <div className="w-full max-w-xl md:max-w-2xl h-[50vh] relative mx-auto bg-slate-5">
          <Image
            src={"/julyellow.jpg"}
            fill
            alt="Jel"
            className="object-top object-cover w-full h-full  inset-0 px-8  rounded-2xl"
          />
        </div>
        <div className="w-full  mt-3  max-w-2xl mx-auto md:max-w-xl flex flex-col justify-center">
          <div className=" h-fit  px-8 py-6  mx-auto bg-red-600 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
            <h1
              className={`${raleway.className} text-xl font-semibold text-yellow-400`}
            >
              Julius Patricio
            </h1>
            <h4
              className={`${raleway.className} font-semibold italic text-gray-200 mb-2`}
            >
              Owner & Director
            </h4>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius explicabo, dolorem mollitia minus neque omnis debitis dolor!
              Reprehenderit a voluptatum odio possimus dolores beatae ex. Fuga
              similique nemo iste?
            </p>
            <div className="flex gap-4 mt-5 items-center">
              <Link href="https://www.instagram.com/juliusuperpogi/">
                <RiInstagramFill size={40} className="text-yellow-400" />
              </Link>
              <Link href={"https://www.facebook.com/jropatpat"}>
                <FaFacebook size={40} className="text-yellow-400" />
              </Link>
              <p className="text-md text-white">- Follow on Social Media</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
