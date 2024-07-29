import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const LogoMoving = () => {
  const clients = [
    {
      href: "/amer.png",
    },
    {
      href: "/intern.png",
    },
    {
      href: "/logo.png",
    },
    {
      href: "/classicoffice.png",
    },
    {
      href: "/wavebg.png",
    },
    {
      href: "/redyellow.png",
    },
  ];

  interface MarqueeProps {
    className?: string;
    children?: ReactNode;
    vertical?: boolean;
    repeat?: number;
    pauseOnHover?: boolean;
    reverse?: boolean;
    [key: string]: any;
  }

  const Marquee = ({
    className,
    children,
    pauseOnHover = false,
    repeat = 4,
    reverse,
    vertical = false,
  }: MarqueeProps) => {
    return (
      <div
        {...Marquee}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:50s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flow-col": vertical,
            "flex-row": !vertical,
          },
          className
        )}
      >
        {clients.map((item, index) => (
          <div
            key={`marquee-${index}`}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="h-auto w-full mx-auto relative py-12 px-3 md:px-20 inset-0">
      <h1
        className={`${raleway.className} italic tracking-widest text-center text-3xl uppercase font-semibold text-gray-400`}
      >
        Trusted by:
      </h1>
      <div className="relative">
        <div className="absolute z-10 inset-0 bg-gradient-to-l from-white via-transparent to-white" />

        <Marquee pauseOnHover className="[--duration:20s]">
          {clients.map((item, index) => (
            <div
              key={index}
              className="w-24 h-24 sm:w-32 sm:h-32 relative grayscale"
            >
              <Image
                src={item.href}
                fill
                alt="Things"
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMoving;
