import AboutUs from "@/components/AboutUs";
import Founder from "@/components/Founder";
import LogoMoving from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Objectives from "@/components/Objectives";
import Ourteam from "@/components/Ourteam";
import React, { Suspense } from "react";

const about = () => {
  return (
    <div className="duration-500 w-full h-auto ease-in transition-all">
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Ourteam />
      </Suspense>
      <Founder />
      <Objectives />
    </div>
  );
};

export default about;
