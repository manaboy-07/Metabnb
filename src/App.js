/** @format */

import LandingPg from "./components/LandingPg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Display from "./components/Display";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPg />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
