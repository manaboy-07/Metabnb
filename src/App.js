/** @format */

import LandingPg from "./components/LandingPg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Place from "./components/Place";
import Display from "./components/Display";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<LandingPg />} />
          <Route path='/place' element={<Place />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
