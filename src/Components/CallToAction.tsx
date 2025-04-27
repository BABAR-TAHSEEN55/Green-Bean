import React from "react";
import img from "../assets/hanvin-cheong-xGIVEh15EFM-unsplash.jpg";
import { IMAGES } from "../constants/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { motion } from "framer-motion";
import { MdOpacity } from "react-icons/md";
const CallToAction = () => {
  return (
    <div className="bg-red-400 mt-8" data-scroll-container>
      <div className="flex  flex-col gap-8 ">
        {IMAGES.map((value, index) => (
          <div
            className="container mt-12 object-contain max-w-xl relative lg:flex p-2"
            key={index}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              src={value.src}
              alt=""
              className="rounded-xl"
            />
            <div className="">
              <p className="text-center text-4xl">{value.title}</p>
              <p className="text-center">{value.subtitle}</p>
              <p className="text-center">{value.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
