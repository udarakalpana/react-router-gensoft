import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home.jsx";
import About from "../components/about/About.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
