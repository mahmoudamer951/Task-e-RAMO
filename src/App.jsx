import Logo from "./components/Logo";
import NavBtns from "./components/NavBtns";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Listings from "./components/Listings";
import Space from "./components/Space";
import Works from "./components/Works";
import Hybrid from "./components/Hybrid";
import Explore from "./components/Explore";
import Pricing from "./components/Pricing";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Chair from "./components/Chair";
import NewsLeter from "./components/NewsLeter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="flex items-center justify-between gap-2 mt-4">
        <Logo />
        <Navigation />
        <NavBtns />
      </header>

      <Hero />

      <About />

      <Listings />

      <Space />

      <Works />

      <Hybrid />

      <Explore />

      <Pricing />

      <Articles />

      <Contact />

      <Chair />

      <NewsLeter />

      <Footer />
    </>
  );
}

export default App;
