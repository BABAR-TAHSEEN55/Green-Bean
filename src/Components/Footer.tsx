import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // initial state (invisible, slightly below)
      whileInView={{ opacity: 1, y: 0 }} // target state (fully visible, original position)
      viewport={{ once: true }} // makes sure the animation happens only once
      transition={{ duration: 1 }}
      className="container lg:px-0 lg:max-w-none"
      data-scroll-container
    >
      <h1 className="text-center font-syncopate uppercase font-semibold mt-20">
        Made in
      </h1>

      <motion.p className="text-[18vw] text-center leading-none font-lbodoni uppercase mt-10 font-medium">
        Rio De Janeiro
      </motion.p>
    </motion.div>
  );
};

export default Footer;
// find about vw it is important as giving it is not breaking the responseiveness px is shit
