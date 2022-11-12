/** @format */

import LandingPg from "./components/LandingPg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Place from "./components/Place";
import Display from "./components/Display";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Place />
      {/* <LandingPg />
      <Display /> */}
      <Footer />
    </div>
  );
}

export default App;
