import About from "./Components/About";
import CallToAction from "./Components/CallToAction";
import Features from "./Components/Features";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CallToAction />
      {/* <About /> */}
    </>
  );
};
export default App;
