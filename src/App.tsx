import "./App.css";
import Footer from "./components/Footer";
import Astral_Slider from "./components/AstralSlider";
import CardsDisplay from "./components/CardsDisplay";

function App() {

  return (
    <>
      <div className="app"></div>
      <CardsDisplay />
      <Astral_Slider/>
      <Footer />
    </>
  );
}

export default App;
