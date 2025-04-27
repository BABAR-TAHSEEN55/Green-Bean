import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import About from "./Components/About";
import CallToAction from "./Components/CallToAction";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";

const App = () => {
  const myRef = useRef<number | null>(null);
  const [preLoader, setpreLoader] = useState(true);
  const [count, setCount] = useState(0);

  const Clear = () => {
    if (myRef.current) {
      window.clearInterval(myRef.current);
    }
    setpreLoader(false);
  };
  useEffect(() => {
    myRef.current = window.setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    // console.log(count);
    if (count == 3) {
      Clear();
    }
  }, [count]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  // Add Locomotive
  // const HandleCount = () => {
  //   setCount((count) => count + 1);
  // };
  // useEffect(() => {
  //   const IntervalId = setInterval(HandleCount, 1000);
  //   myRef.current = IntervalId;
  //   return () => {
  //     clearInterval(IntervalId);
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log(count);
  //   if (count == 3) {
  //     clearInterval(myRef.current!);
  //     setpreLoader(false);
  //   }
  // }, [count]);
  return (
    <>
      {preLoader ? (
        <div className="absolute bg-[#191919] w-full h-screen text-white flex items-center justify-center flex-col">
          <h1 className="lg:text-[1.5vw] text-[5vw] font-bai uppercase font-medium">
            Flirty Flowers
          </h1>
          <h2 className="font-lbodoni lg:text-[2vw] text-[4vw] font-medium">
            Rio de Janerio
          </h2>
        </div>
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <Features />
          <CallToAction />
          <Footer />
          {/* <About /> */}
        </div>
      )}
    </>
  );
};
export default App;
