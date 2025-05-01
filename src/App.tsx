import "./App.css";
import Footer from "./components/Footer";
import Astral_Slider from "./components/AstralSlider";
import CardsDisplay from "./components/CardsDisplay";

function App() {
  return (
    <>
      <CardsDisplay />
      <div className="relative">
        <div className="overlay top-0 left-0 w-full h-full"></div>
        <div className="background h-64 flex flex-col justify-center items-center z-0">
          <div className="relative text-white text-center z-20">
            <h1 className="text-[3rem] font-[Lexend]">
              Welcome to Elysian Realm
            </h1>
            <h3 className="text-xl font-[Lexend]">
              Recommended builds for Captains
            </h3>
            <h3 className="italic text-xl font-[Lexend]">
              Version 8.1 (Updating)
            </h3>
          </div>
        </div>
      </div>
      <Astral_Slider />
      <Footer />
    </>
  );
}

export default App;
