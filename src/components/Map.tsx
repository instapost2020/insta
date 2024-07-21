import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});

const Map = () => {
  return (
    <div className="grid md:grid-cols-2 h-[80vh] py-8 md:py-20 md:px-8 gap-4">
      <div className="w-full h-full relative">
        <Image
          fill
          alt="Google Map"
          className="object-cover  object-center"
          src={"/map.png"}
        />
      </div>
      <div
        className={`${raleway.className} flex flex-col space-y-2 text-left text-xl font-semibold`}
      >
        <h2>131 A. Bonifacio Ave, Marikina, 1803 Metro Manila</h2>
        <p>J3MM+66 Marikina, Metro Manila</p>
      </div>
    </div>
  );
};

export default Map;
