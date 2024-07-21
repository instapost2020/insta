import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const Goals = () => {
  return (
    // <section className="grid lg:grid-cols-2">
    //   <div className="p-4 space-y-4 w-full max-w-xl h-auto mx-auto hidden md:grid">
    //     <div className="px-11 py-6 bg-white h-fit md:h-64  shadow-md shadow-gray-400 space-y-4 rounded-xl">
    //       <h1
    //         className={`${raleway.className} font-semibold text-3xl text-black`}
    //       >
    //         PHOTOGRAPHY
    //       </h1>
    //       <p className={`${raleway.className} text-gray-500`}>
    //         Insta Post delivers high-quality photography that showcases your
    //         brand or products in the best light possible, enhancing your overall
    //         image and professionalism.
    //       </p>
    //     </div>
    //     <div className="px-11 py-6 bg-white h-fit md:h-64  shadow-md shadow-gray-400 space-y-4 rounded-xl">
    //       <h1
    //         className={`${raleway.className} font-semibold text-3xl text-black`}
    //       >
    //         VIDEOGRAPHY
    //       </h1>
    //       <p className={`${raleway.className} text-gray-500`}>
    //         Harness the potential of video marketing to amplify your brand's
    //         reach and engagement. With our expertise, your message will resonate
    //         with your audience, leaving a lasting impression and driving action.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="p-4 space-y-4 w-full max-w-xl h-auto mx-auto hidden md:grid">
    //     <div className="px-11 py-6 bg-white h-fit md:h-64  shadow-md shadow-gray-400 space-y-4 rounded-xl">
    //       <h1
    //         className={`${raleway.className} font-semibold text-3xl text-black`}
    //       >
    //         SOCIAL MEDIA MANAGEMENT
    //       </h1>
    //       <p className={`${raleway.className} text-gray-500`}>
    //         We curate tailored social media strategies for each month of your
    //         business, crafted a month in advance, ensuring timely and relevant
    //         content. What’s our advantage in social media management: We’ll not
    //         only boost your online presence but also foster meaningful
    //         connections with your followers, driving growth and engagement.
    //       </p>
    //     </div>
    //     <div className="px-11 py-6 bg-white h-fit md:h-64  shadow-md shadow-gray-400 space-y-4 rounded-xl">
    //       <h1
    //         className={`${raleway.className} font-semibold text-3xl text-black`}
    //       >
    //         INFLUENCERS MANAGEMENT
    //       </h1>
    //       <p className={`${raleway.className} text-gray-500`}>
    //         Eagle-eyed monitoring and reporting, your campaign won't just make
    //         waves—it'll make a splash big enough to create a tidal wave of
    //         success! Jump into our pool of influencers and let your brand ride
    //         the wave of influence like a pro surfer!
    //       </p>
    //     </div>
    //   </div>

    //   <Accordion
    //     className="grid md:hidden py-4 text-yellow-400"
    //     type="single"
    //     collapsible
    //   >
    //     <AccordionItem value="item-1">
    //       <AccordionTrigger>PHOTOGRAPHY</AccordionTrigger>
    //       <AccordionContent
    //         className={`${raleway.className} text-xl text-white`}
    //       >
    //         Insta Post delivers high-quality photography that showcases your
    //         brand or products in the best light possible, enhancing your overall
    //         image and professionalism.
    //       </AccordionContent>
    //     </AccordionItem>
    //     <AccordionItem value="item-2">
    //       <AccordionTrigger>VIDEOGRAPHY</AccordionTrigger>
    //       <AccordionContent
    //         className={`${raleway.className} text-xl text-white`}
    //       >
    //         Harness the potential of video marketing to amplify your brand's
    //         reach and engagement. With our expertise, your message will resonate
    //         with your audience, leaving a lasting impression and driving action.
    //       </AccordionContent>
    //     </AccordionItem>
    //     <AccordionItem value="item-3">
    //       <AccordionTrigger>SOCIAL MEDIA MANAGEMENT</AccordionTrigger>
    //       <AccordionContent
    //         className={`${raleway.className} text-xl text-white`}
    //       >
    //         We curate tailored social media strategies for each month of your
    //         business, crafted a month in advance, ensuring timely and relevant
    //         content. What’s our advantage in social media management: We’ll not
    //         only boost your online presence but also foster meaningful
    //         connections with your followers, driving growth and engagement.
    //       </AccordionContent>
    //     </AccordionItem>
    //     <AccordionItem value="item-4">
    //       <AccordionTrigger>INFLUENCERS MANAGEMENT</AccordionTrigger>
    //       <AccordionContent
    //         className={`${raleway.className} text-xl text-white`}
    //       >
    //         Eagle-eyed monitoring and reporting, your campaign won't just make
    //         waves—it'll make a splash big enough to create a tidal wave of
    //         success! Jump into our pool of influencers and let your brand ride
    //         the wave of influence like a pro surfer!
    //       </AccordionContent>
    //     </AccordionItem>
    //   </Accordion>
    // </section>

    <section
      className={`${raleway.className} text-gray-600 bg-[#FDF278] body-font`}
    >
      <div className="container px-5 py-8 md:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="text-center p-4 md:p-6 space-y-3">
            <h1
              className={`${bhineka.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600`}
            >
              What can we do?
            </h1>
            <p className="w-full text-lg max-w-xl mx-auto">
              We are an all-in-one Creative Team and Content Marketing & Social
              Media Marketing Agency, helping businesses thrive in the digital
              space, by delivering instant, high-end quality content that sells.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg relative h-64 overflow-hidden">
              <Image
                src={"/intern.png"}
                fill
                alt="Intern"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-red-600 mt-5">
              Photography
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Insta Post delivers high-quality photography that showcases your
              brand or products in the best light possible, enhancing your
              overall image and professionalism.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              {/* <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="./villar.JPG"
              /> */}
              <video autoPlay loop muted className="object-cover h-full w-full">
                <source src="./seconds.mp4" type="video/mp4" />
              </video>
            </div>
            <h2 className="text-xl font-medium title-font text-red-600 mt-5">
              Videography
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Harness the potential of video marketing to amplify your brand's
              reach and engagement. With our expertise, your message will
              resonate with your audience, leaving a lasting impression and
              driving action.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg relative h-64 overflow-hidden">
              <Image
                src={"/doings.png"}
                fill
                alt="Intern"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-red-600 mt-5">
              Social Media Management
            </h2>
            <p className="text-base leading-relaxed mt-2">
              We curate tailored social media strategies for each month of your
              business, crafted a month in advance, ensuring timely and relevant
              content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
