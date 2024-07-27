import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Raleway } from "next/font/google";
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const Team = () => {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      animate={{
        transition: {
          duration: 10,
        },
      }}
      viewport={{
        margin: "300px",
      }}
      className="h-auto  bg-yellow-400 pb-8 rounded-t-3xl md:pb-12"
    >
      <h1
        className={`${raleway.className} mb-12 py-8 text-4xl w-full font-bold uppercase text-center `}
      >
        How we work?
      </h1>
      <div className="grid h-auto px-4 gap-12 lg:gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full py-4 px-8 bg-white justify-center items-end md:justify-end shadow-xl rounded-lg">
          <div className="flex sm:float-end mx-auto md:mx-0 w-24 h-24 relative justify-end max-w-md py-4 px-8 shadow-lg rounded-full  -mt-16">
            <Image
              src={"/jelyellow.jpg"}
              fill
              alt="Jel"
              className="object-cover rounded-full borded-2 border-yellow-400"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Jelynson Patricio
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Badge className="bg-red-600">Owner</Badge>
            <Badge className="bg-yellow-400">Strategist</Badge>
          </div>
        </div>
        <div className="w-full py-4 px-8 bg-white justify-center items-end md:justify-end shadow-xl rounded-lg">
          <div className="flex sm:float-end mx-auto md:mx-0 w-24 h-24 relative justify-end max-w-md py-4 px-8 shadow-lg rounded-full  -mt-16">
            <Image
              src={"/juls.jpg"}
              fill
              alt="Jel"
              className="object-cover rounded-full borded-2 border-yellow-400"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Julius Patricio
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Badge className="bg-red-600">Owner</Badge>
            <Badge className="bg-yellow-400">Director</Badge>
          </div>
        </div>
        <div className="w-full py-4 px-8 bg-white justify-center items-end md:justify-end shadow-xl rounded-lg">
          <div className="flex sm:float-end mx-auto md:mx-0 w-24 h-24 relative justify-end max-w-md py-4 px-8 shadow-lg rounded-full  -mt-16">
            <Image
              src={"/sarah.jpg"}
              fill
              alt="Jel"
              className="object-cover rounded-full borded-2 border-yellow-400"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Sarah Mae Napay
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Badge className="bg-red-600">General Manager</Badge>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
