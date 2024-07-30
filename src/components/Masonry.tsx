import Image from "next/image";
import React from "react";

const Masonry = () => {
  return (
    <div className="w-full z-0">
      <div className="columns-3 w-full max-w-5xl mx-auto relative">
        <div className="w-full h-32 relative">
          <Image alt="Image" fill src="/amer.png" />
        </div>
        <div className="w-52 h-64 relative">
          <Image alt="Image" fill src="/chayellow.jpg" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/doings.png" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/jelyellow.jpg" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/intern.png" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/landingbg.png" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/devices.png" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/villar.JPG" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/trex.jpg" />
        </div>
        <div className="w-32 h-64 relative">
          <Image alt="Image" fill src="/amer.png" />
        </div>
      </div>
    </div>
  );
};

export default Masonry;
