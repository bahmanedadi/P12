"use client";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import { TunisContext } from "@/context/context";
import Revealer from "@/layouts/Revealer";
import TunisLayout from "@/layouts/TunisLayout";
import { useContext, useEffect } from "react";

const Page = () => {
  const { darkToggle, changeColor } = useContext(TunisContext);
  useEffect(() => {
    darkToggle();
    changeColor("green");
  }, []);

  return (
    <TunisLayout>
      <div className="w-full h-full pages overflow-hidden">
        <Home authorImage={"assets/img/light.jpg"} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Revealer />
    </TunisLayout>
  );
};
export default Page;
