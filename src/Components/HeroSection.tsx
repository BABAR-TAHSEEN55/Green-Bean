import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    // <div className="container h-[496px]">
    <div
      className="container lg:px-0 lg:max-w-none h-[300px] md:h-[500px] lg:h-[800px] mt-20 "
      data-scroll-container
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="lg:text-[300px] text-[20vw] font-bai   leading-none text-center tracking-tight font-semibold  uppercase"
      >
        Art
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="lg:text-[300px] font-bai text-[20vw] leading-none text-center tracking-tight font-semibold  uppercase"
      >
        Objects
      </motion.h1>
    </div>
  );
};

export default HeroSection;
//Leading none takes removes all the unnecessary spaces between the words`
