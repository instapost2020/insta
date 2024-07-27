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

const Map = () => {
  return (
    <div className="w-full h-fit gap-8 md:gap-8 z-10 flex flex-col items-center md:grid md:grid-cols-2">
      <div className={`${raleway.className} px-2 py-3 space-y-2`}>
        <h1 className="text-center text-5xl lg:text-8xl font-semibold">
          WHY US?
        </h1>
        <h4 className="text-center text-lg w-full max-w-xl mx-auto font-semibold text-gray-700">
          <span
            className={`${bhineka.className} text-red-600 text-2xl md:text-4xl tracking-wide`}
          >
            Insta Post PH
          </span>{" "}
          delivers Instant & Top Quality Output. Your All-In-One Creative Team.
          We generate results. We create CONTENT THAT SELLS. We strategize with
          you. We study the competitors.
        </h4>
      </div>
      <div className="w-full h-72 md:h-[400px] md:px-8 relative">
        <Image
          src="/classicoffice.png"
          fill
          alt="Office"
          className="object-contain px-6 sm:px-0"
        />
      </div>
    </div>
  );
};

export default Map;
