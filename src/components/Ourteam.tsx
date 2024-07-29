import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const Ourteam = () => {
  const staff = [
    {
      name: "Jelynson Patricio",
      position: "Owner / Strategist",
      photo: "/jelyellow.jpg",
      fb: "",
    },
    {
      name: "Julius Patricio",
      position: "Owner / Director",
      photo: "/julyellow.jpg",
    },
    {
      name: "Sarah De Guzman Napay",
      position: "General Manager",
      photo: "/sarahyellow.jpg",
    },
    {
      name: "Charrish Mae Napay",
      position: "Human Resources",
      photo: "/chayellow.jpg",
    },
    {
      name: "Ja Jose",
      position: "Projects & Account Lead Manager",
      photo: "/jayellow.JPG",
    },
    {
      name: "Maria Trexie Hamilton",
      position: "Senior Graphic Artist",
      photo: "/trexxx.jpg",
    },
    {
      name: "Ma. Kristina Villar",
      position: "Creative Head",
      photo: "/mayellow.JPG",
    },
    {
      name: "Angela Dulay",
      position: "K.O.L Manager",
      photo: "/gelyellow.jpg",
    },
    {
      name: "Jason Gerald Gotangho",
      position: "Video Editor & Sales",
      photo: "/jasyellow.jpg",
    },
    {
      name: "Angeline Santos",
      position: "Video Editor",
      photo: "/angyellow.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white pb-12 pt-4 mt-16 w-full h-full px-12">
      <h1
        className={`${bhineka.className} text-center relative w-full h-auto text-red-600 text-5xl md:text-6xl mb-8 tracking-wider`}
      >
        Meet the Core!
      </h1>
      <motion.div
        initial={{
          x: "-100%",
          // width: 0,
        }}
        whileInView={{
          x: 0,
          // width: "100%",
        }}
        animate={{
          transition: {
            duration: "10s",
            delay: 2,
          },
        }}
        className="grid h-auto w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {staff.map((item, index) => (
          <div
            key={index}
            className="bg-white block w-full rounded-t-xl shadow-2xl  items-center"
          >
            <div className="w-full h-auto">
              <div className="w-full h-52 relative ">
                <Image
                  src={item.photo}
                  fill
                  alt="Jel"
                  className="object-cover object-center sm:object-top  rounded-t-xl"
                />
              </div>
            </div>
            <div className="items-center flex pt-2 pb-4 flex-col">
              <h1
                className={`${raleway.className} text-center text-xl text-gray-700 font-bold`}
              >
                {item.name}
              </h1>
              <p className={`${raleway.className} text-red-600 font-semibold`}>
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ourteam;
