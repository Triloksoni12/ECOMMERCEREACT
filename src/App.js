import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Shop from "./Pages/shop";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Cart" element={<Cart />}/>
                <Route path="/Contact" element={<Contact />}/>
                <Route path="/Blog" element={<Blog />}/>
                <Route path="/Shop" element={<Shop />}/>


      </Routes>
    <Footer />
    </div>
  );
}

export default App;
