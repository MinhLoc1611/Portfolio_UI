import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog/Blog";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import { useMediaQuery } from "@mui/material";

function App() {
    const isMobile = useMediaQuery('(min-width:900px)')
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/blog" element={<Blog isMobile={isMobile} />}/>
        <Route path="/works" element={<Works isMobile={isMobile} />}/>
        <Route path="/contact" element={<Contact isMobile={isMobile} />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
