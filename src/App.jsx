import Calculate from "./components/Calculate";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Trade from "./components/Trade";
import Why from "./components/Why";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />

      {/* temporary div */}
      {/* <div className="h-[2000px]"></div> */}
    </div>
  );
};

export default App;
