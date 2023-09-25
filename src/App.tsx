import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog/Blog";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";

function App() {
   
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/works" element={<Works />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
