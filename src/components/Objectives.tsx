import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const Objectives = () => {
  return (
    <div className="grid bg-yellow-400 rounded-3xl">
      <div className="grid md:grid-cols-2 px-12 pt-8 items-center gap-4">
        <div className="space-y-4">
          <h1
            className={`${bhineka.className} text-center font-semibold text-4xl md:text-6xl text-red-600`}
          >
            M I S S I O N
          </h1>
          <p
            className={`${raleway.className} text-md md:text-xl text-justify w-full lg:max-w-xl mx-auto text-gray-700`}
          >
            Insta Post Ph aims to revolutionize digital marketing by providing
            instant, high-end quality content that sells, empowering businesses
            to thrive in the digital space. We strive to be the go-to agency for
            content marketing, social media marketing, and photo and video
            marketing collateral, helping SMEs and MSMEs transition successfully
            into the digital landscape.
          </p>
        </div>
        <div className="w-full h-96 relative hidden md:flex">
          <Image
            src={"/newdevices.png"}
            fill
            alt="Dual"
            className="object-contain w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 px-12  pb-12 items-center gap-4">
        <div className="w-full h-[400px] relative hidden md:flex">
          <Image
            src={"/coffeeblob.png"}
            fill
            alt="Dual"
            className="object-contain w-full"
          />
        </div>
        <div className="space-y-4">
          <h1
            className={`${bhineka.className} text-center font-semibold text-4xl md:text-6xl text-red-600`}
          >
            V I S I O N
          </h1>
          <p
            className={`${raleway.className} text-md md:text-xl text-justify w-full lg:max-w-xl mx-auto text-gray-700`}
          >
            Our vision is to become the leading authority in content marketing
            and social media marketing, known for our innovative strategies,
            exceptional creativity, and tangible results. We aim to be the
            trusted partner for businesses seeking to maximize their online
            presence and drive sales through compelling and effective content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
