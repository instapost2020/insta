import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const work = () => {
  const [opened, setOpened] = useState(0);
  const [expand, setExpand] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full h-screen">
      <div className="w-[40vw] hidden md:flex h-screen top-0 left-0 fixed z-10 bg-red-400">
        <div className="w-full h-auto">
          <div
            onClick={() => setMenu(!menu)}
            className={
              menu
                ? "w-full absolute h-24 p-3 rounded-full justify-center flex items-center bg-white top-0 left-0 duration-300 ease-linear transition-all"
                : "w-24 absolute h-24 p-3 rounded-full justify-center flex items-center bg-white top-0 left-0 duration-300 ease-linear transition-all"
            }
          >
            <h1 className="fixed">MENU</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen hidden md:flex">
        <div className="w-1/4 h-screen z-0"></div>
        <div className="w-full h-[200vh] z-0 bg-purple-400"></div>
      </div>
      <div className="flex md:hidden">1</div>
      <div className="flex md:hidden">2</div>
    </div>
  );
};

export default work;
