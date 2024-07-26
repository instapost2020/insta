// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// function App() {
//   const { scrollY } = useScroll();
//   const videoOpacity = useTransform(scrollY, [0, 600], [1, 0]);
//   const backgroundColor = useTransform(
//     scrollY,
//     [0, 600],
//     ["rgba(0, 0, 0, 0)", "rgba(250,61,47,1.00)"]
//   );

//   return (
//     <div className="relative h-[100vh]">
//       <motion.div
//         className=" relative snap-start top-0 left-0 w-full h-full"
//         style={{ opacity: videoOpacity }}
//       >
//         <video autoPlay muted loop className="z-0  w-full h-full object-cover">
//           <source src="./seconds.mp4" type="video/mp4" />
//           Your browser does not support HTML5 video.
//         </video>
//         {/* <motion.div
//           className="z-10 fixed top-0 left-0"
//           style={{ opacity: videoOpacity }}
//         >
//           <h1 className="text-3xl">Hello</h1>
//         </motion.div> */}
//       </motion.div>
//       <motion.div
//         className="top-0 left-0 w-full h-full flex justify-center items-center"
//         style={{ backgroundColor }}
//       ></motion.div>
//       <div className="h-[100vh] bg-cyan-400  ">
//         <p>Scroll down to see the effect</p>
//         <p>More content here...</p>
//       </div>
//       <div className="bg-gray-800 p-8 text-white  h-[100vh]">
//         <p>Second Section</p>
//         <p>More content here...</p>
//       </div>
//       <div className="bg-gray-600 p-8 text-white  h-[100vh]">
//         <p>Third Section</p>
//         <p>More content here...</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Goals from "@/components/Goals";
import Team from "@/components/Team";
import Image from "next/image";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});

function App() {
  const { scrollY } = useScroll();
  const imageOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 700],
    ["rgba(0, 0, 0, 0)", "rgba(250,61,47,1.00)"]
  );

  return (
    <div className=" h-[100vh] z-10 ">
      <motion.div
        style={{
          opacity: imageOpacity,
        }}
        className="absolute w-full h-[100vh] hidden md:flex bottom-0  left-0 z-0 "
      >
        <Image
          src="/fouremoji.png"
          alt="Yellow BG"
          fill
          className="object-contain z-0 w-full h-auto  inset-0"
        />
      </motion.div>
      <Navbar />
      <motion.div
        className=" top-0 left-0 w-full h-auto bg-cover bg-center "
        style={{
          opacity: imageOpacity,
        }}
      >
        <motion.div
          className=" w-full h-auto lg:h-[100vh] grid md:grid-cols-2 gap-8 py-8"
          // style={{ opacity: backgroundColor }}
        >
          <div className="flex justify-center items-start lg:items-center flex-col mt-10 py-4 md:py-20 px-8 md:px-2  ">
            <h1
              className={`${bhineka.className} text-4xl md:text-6xl lg:text-8xl text-[#D61F27] z-10`}
            >
              Insta Post PH
            </h1>
            <h1
              className={`${raleway.className} text-justify w-full max-w-md font-semibold text-xs md:text-lg text-gray-700 z-10`}
            >
              content marketing and social media marketing agency, helping
              businesses thrive in the digital space, by delivering instant,
              high-end quality{" "}
              <span className="text-lg md:text-4xl font-semibold">
                content that sells
              </span>
            </h1>
            <Button className="bg-red-600 flex md:hidden mt-4 hover:bg-red-400">
              <Link href={"/"}>GET IN TOUCH</Link>
            </Button>
          </div>
          <div className="w-full relative justify-center h-72 md:h-auto items-center flex p-20">
            <Image
              src={"/intern.png"}
              fill
              alt="Intern"
              className="object-contain h-auto z-10"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="w-full h-auto relative">
        <div className="w-full h-full bg-slate-500 relative z-20 "></div>
        <Team />
      </div>
      <div className="w-full h-[100vh] z-10 bg-yellow-400">
        <Map />
      </div>
      <div className="bg-red-600 text-white  h-auto z-10">
        <Goals />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
