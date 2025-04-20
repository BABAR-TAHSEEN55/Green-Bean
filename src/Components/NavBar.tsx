import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  const HanddleToggle = () => {
    // setToggle(true);
    alert("Hola Senor");
  };
  // Implement SideBar Toggle Confused on how to layout
  return (
    <div className="container mt-6 lg:px-0 lg:max-w-none lg:mt-8">
      <div className="flex justify-between lg:max-w-[90%] lg:mx-auto lg:items-center">
        <button
          className="text-3xl lg:text-5xl md:hidden"
          onClick={HanddleToggle}
        >
          <RxHamburgerMenu />
        </button>
        {/* //TODO : Make the Text correct and make it responsive & Implement Sm NavBar */}
        <nav className="hidden lg:block ">
          {/* <div className="flex gap">
            <a href="" className="text-xl font-syncopate font-bold">
              Intro
            </a>
            <a href="" className="text-2xl font-syncopate  font-bold">
              Features
            </a>
            <a href="" className="text-2xl font-bold">
              Footer
            </a>
          </div> */}
          <h1 className="text-3xl font-syncopate font-bold">Menu</h1>
        </nav>
        <h1 className="text-2xl font-syncopate font-bold md:text-4xl lg:text-3xl uppercase">
          Flirty Flowers
        </h1>
        <div className="hidden md:block">
          <p className=" text-4xl font-bold font-syncopate lg:text-3xl uppercase">
            Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//TODO:Import React-router-dom
//1.UseNavLinks
//2. What more states can i add ? Look it up
