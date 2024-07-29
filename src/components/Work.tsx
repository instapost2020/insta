import React from "react";
import { Raleway } from "next/font/google";
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const raleway = Raleway({
  subsets: ["latin"],
});
const Work = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  return (
    <div className="w-full max-w-4xl mx-auto h-screen md:h-[90vh] py-12 grid grid-cols-1 justify-center gap-8 mb-12 overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-end"></div>
      <div className="flex justify-center items-center md:justify-center md:items-baseline snap-start">
        <h1
          className={`${raleway.className} mx-auto md:mx-0 text-4xl md:text-8xl uppercase font-bold`}
        >
          Scroll up <br />{" "}
          <span className="inline-block text-2xl md:text-5xl mx-auto md:mx-0">
            to see our Goals
          </span>
        </h1>
      </div>
      <motion.div
        style={{ pathLength: scrollYProgress }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 3,
          },
        }}
        ref={ref}
        className="  w-full bg-slate-400 h-96 overflow-y-scroll no-scrollbar rounded-3xl shadow-lg shadow-gray-500 snap-start snap-y snap-mandatory"
      >
        <div className="snap-start"></div>
        <div className="w-full flex flex-col items-center  justify-between h-96 sticky top-0 left-0 z-10 bg-red-600 snap-start ">
          <div></div>
          <p className="px-12 mt-3 text-7xl font-bold text-white ">SWIPE UP</p>
          <div></div>
          <div className=""></div>
        </div>
        <div className="w-full flex flex-col items-center  justify-between h-96 sticky top-0 left-0 z-10 bg-orange-200 snap-start">
          <h1
            className={`${raleway.className} text-3xl font-semibold uppercase flex items-center gap-3`}
          >
            <FaArrowUp size={20} />
            <FaArrowUp size={20} />
            Mission
            <FaArrowUp size={20} />
            <FaArrowUp size={20} />
          </h1>
          <p className="px-12 mt-3">
            Insta Post Ph aims to revolutionize digital marketing by providing
            instant, high-end quality content that sells, empowering businesses
            to thrive in the digital space. We strive to be the go-to agency for
            content marketing, social media marketing, and photo and video
            marketing collateral, helping SMEs and MSMEs transition successfully
            into the digital landscape.
          </p>
          <div></div>
        </div>
        <div className="w-full flex flex-col justify-between items-center h-96 sticky top-0 left-0 z-20 bg-orange-300 snap-start">
          <h1
            className={`${raleway.className} text-3xl font-semibold uppercase`}
          >
            Vision
          </h1>
          <p className="px-12 mt-3">
            Our vision is to become the leading authority in content marketing
            and social media marketing, known for our innovative strategies,
            exceptional creativity, and tangible results. We aim to be the
            trusted partner for businesses seeking to maximize their online
            presence and drive sales through compelling and effective content.
          </p>
          <div></div>
        </div>
        <div className="w-full flex justify-center h-96 sticky top-0 left-0 z-30 bg-orange-400 snap-start">
          <h1
            className={`${raleway.className} text-3xl font-semibold uppercase`}
          >
            Objectives
          </h1>
        </div>
        <div className="w-full flex justify-center h-96 sticky top-0 left-0 z-40 bg-orange-500 snap-start">
          <h1
            className={`${raleway.className} text-3xl font-semibold uppercase`}
          >
            Goals
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
