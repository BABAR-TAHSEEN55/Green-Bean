import { PHOTOS } from "../constants/constants";

const Features = () => {
  return (
    <div className="md:mt-8 ">
      <div className="container flex gap-8 flex-col md:flex-row border items-center justify-center md:justify-between">
        {PHOTOS.map((value, index) => (
          <div className="object-cover ">
            <img
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
