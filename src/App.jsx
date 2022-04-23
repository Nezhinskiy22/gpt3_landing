import Blog from "./containers/blog/Blog";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Possibility from "./containers/possibility/Possibility";
import Feature from "./components/feature/Feature";
import CTA from "./components/cta/CTA";
import Footer from "./containers/footer/Footer";
import Brand from "./components/brand/Brand";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
