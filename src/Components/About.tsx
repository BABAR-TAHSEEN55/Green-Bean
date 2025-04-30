import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const eleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: eleRef,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <div className="m-8 ">
      <h1 className="text-[#594d4d] font-syncopate font-semibold md:text-4xl text-2xl md:mt-14">
        About
      </h1>
      <motion.p
        ref={eleRef}
        className="text-[1.5em] md:text-[2em]   font-bai leading-1 font-semibold uppercase md:mt-8"
        style={{ opacity: scrollYProgress }}
      >
        There’s something universally enchanting about flowers. Whether it’s a
        single blooming rose in a garden or a field bursting with wildflowers,
        these natural wonders have captivated humans for centuries. In this
        blog, we’ll dive into the fascinating world of flowers — exploring their
        symbolism, their role in ecosystems, and how they’ve inspired everything
        from poetry to perfume. From the delicate petals of a cherry blossom to
        the resilient beauty of the sunflower, flowers remind us that even in
        fleeting moments, there is immense beauty to be found. Stay with us as
        we explore the stories behind popular blooms, tips for growing your own
        floral haven, and the cultural significance of flowers around the world.
      </motion.p>
    </div>
  );
};

export default About;
