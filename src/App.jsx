import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Offer from "./Component/Offer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/uudai" element={<Offer/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
