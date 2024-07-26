import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import Ourteam from "@/components/Ourteam";
import React from "react";

const about = () => {
  return (
    <div className="duration-500 w-full h-auto ease-in transition-all">
      <Navbar />
      <Ourteam />
    </div>
  );
};

export default about;
