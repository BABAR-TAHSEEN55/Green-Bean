import React from "react";
import { IMAGES } from "../constants/constants";

const CallToAction = () => {
  return (
    <div className="bg-red-400">
      <div className="flex  flex-col gap-8 ">
        {IMAGES.map((value, index) => (
          <div
            className="container mt-12 object-contain max-w-xl relative lg:flex"
            key={index}
          >
            <img src={value.src} alt="" className="" />
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
