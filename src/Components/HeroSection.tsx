const HeroSection = () => {
  return (
    // <div className="container h-[496px]">
    <div className="container lg:px-0 lg:max-w-none h-[300px] md:h-[500px] lg:h-[800px] mt-20 ">
      <h1 className="lg:text-[300px]  font-bai   leading-none text-center tracking-tight font-semibold  uppercase">
        Art
      </h1>
      <h1 className="lg:text-[300px] font-bai  leading-none text-center tracking-tight font-semibold  uppercase">
        Objects
      </h1>
    </div>
  );
};

export default HeroSection;
//Leading none takes removes all the unnecessary spaces between the words`
