/** @format */

import LandingPg from "./components/LandingPg";
import Navbar from "./components/Navbar";
import "./App.css";
import Display from "./components/Display";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPg />
      <Display />
    </div>
  );
}

export default App;
