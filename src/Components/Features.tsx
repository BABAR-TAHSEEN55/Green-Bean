import { PHOTOS } from "../constants/constants";

import { motion } from "framer-motion";
// import img from "../assets/hanvin-cheong-xGIVEh15EFM-unsplash.jpg";
const Features = () => {
  return (
    <div className="md:mt-8 " data-scroll-container>
      <div className="container flex gap-8 flex-col md:flex-row border items-center justify-center md:justify-between">
        {PHOTOS.map((value, index) => (
          <div className="object-cover ">
            <motion.img
              // effect="blur"
              initial={{ opacity: 0, scale: 0.8 }} // initial state (invisible, smaller)
              whileInView={{ opacity: 1, scale: 1 }} // target state (fully visible, original size)
              viewport={{ once: true }} // animation happens only once
              transition={{ duration: 1 }}
              // loading="lazy"
              src={value}
              key={index}
              alt={`Photos at ${index}`}
              height="500"
              width={500}
              className=" rounded-xl drop-shadow-2xl"
              // className={index === 0 ? "w-auto h-[500px]" : " w-auto h-[600px]"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
// Way to Figure out LazyLoading
