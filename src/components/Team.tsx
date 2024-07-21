import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center py-12">
        <h2 className="text-base font-bold text-indigo-600">
          We have the best equipment in the market
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-400">
          Check our awesome team members
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col shadow-sm shadow-gray-500/50 justify-center items-center">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="Random"
              className="object-top object-contain md:object-cover w-full"
              src="/jel.jpg"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Jelynson Patricio
            </p>
            <p className="text-base text-gray-400 font-normal">Owner</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="adad"
              className="object-top object-contain md:object-cover w-full "
              src="/juls.jpg"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Julius Patricio
            </p>
            <p className="text-base text-gray-400 font-normal">Owner</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="qeqeq"
              className="object-top object-contain md:object-cover w-full rounded-md"
              src="/sarah.jpg"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Sarah Mae Napay
            </p>
            <p className="text-base text-gray-400 font-normal">
              General Manager
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="xcvxcv"
              className="object-center object-contain md:object-cover w-full "
              src="/cha.png"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Charrish Mae Napay
            </p>
            <p className="text-base text-gray-400 font-normal">
              Human Resources
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="sdfsfsf"
              className="object-top object-contain md:object-cover w-full rounded-md"
              src="/trex.jpg"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Maria Trexie Hamilton
            </p>
            <p className="text-base text-gray-400 font-normal">
              Creative Manager?
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="utyughj"
              className="object-center object-contain md:object-cover w-full rounded-md"
              src="/ja.jpg"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">Ja Jose</p>
            <p className="text-base text-gray-400 font-normal">I dunno</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="utyughj"
              className="object-center object-contain md:object-cover w-full rounded-md"
              src="/villar.JPG"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Maria Kristina Villar
            </p>
            <p className="text-base text-gray-400 font-normal">I dunno</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm shadow-gray-500/50 ">
          <div className="w-full h-72 relative">
            <Image
              fill
              alt="utyughj"
              className="object-center object-contain md:object-cover w-full rounded-md"
              src="/gerald.png"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">
              Jason Gerald Gotangho
            </p>
            <p className="text-base text-gray-400 font-normal">I dunno</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
