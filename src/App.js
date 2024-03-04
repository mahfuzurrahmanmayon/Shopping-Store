import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Navbar from "./components/Navbar";
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllProductsSection from './components/AllProduct';
import "./App.css"
import Women from "./components/Women";
import Men from "./components/Men";
import ViewItem from "./components/ViewItem";
import AddToCart from "./components/AddToCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/all' element={<AllProductsSection />} />
          <Route path='/women' element={<Women />} />  
          <Route path='/men' element={<Men />} />
          <Route path='/cart' element={<AddToCart/>} />
          <Route path='/all/:productId' element={<ViewItem />} />
        </Routes>
      </BrowserRouter>
      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </div>
  );
}

export default App;
