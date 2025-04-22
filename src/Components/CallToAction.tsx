import { useState } from "react";
import { IMAGES } from "../constants/constants";
const Gallery = (gal: (typeof IMAGES)[number]) => {
  return (
    <div className="container">
      <h1>{gal.title}</h1>
    </div>
  );
};
const CallToAction = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="lg:m-12 max-w-full">
      <div className="" style={{ backgroundColor: "#" }}>
        {IMAGES.map((value, index) => (
          <div>
            <Gallery key={index} {...value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
