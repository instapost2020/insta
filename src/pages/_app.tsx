import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const Loading = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const handleStart = (url: any) =>
        url !== router.asPath && setLoading(true);
      const handleComplete = (url: any) =>
        url !== router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 3000);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });
    return (
      loading && (
        <div className="w-full fixed top-0 left h-screen bg-yellow-400 flex justify-center items-center z-50">
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: -40,
              transition: {
                repeat: Infinity,
                duration: 1,
              },
            }}
            className="w-32 h-32 relative"
          >
            <Image fill className="object-cover" alt="Logo" src={"/logo.png"} />
          </motion.div>
        </div>
      )
    );
  };

  return (
    <main className="">
      <Loading />
      <Head>
        <link rel="icon" href="/logofav.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
