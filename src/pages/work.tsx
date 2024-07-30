import Masonry from "@/components/Masonry";
import NavbarWork from "@/components/NavbarWork";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useState } from "react";

const work = () => {
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 200) {
      setVisible(true);
    } else if (scroll <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", visibleHandler);
  }, []);
  return (
    <div className="w-full h-[200vh]">
      <NavbarWork />
      <Button
        onClick={scrollToTop}
        className={visible ? "flex fixed bottom-0 right-0" : "hidden"}
      >
        TOP
      </Button>
      <Masonry />
    </div>
  );
};

export default work;
