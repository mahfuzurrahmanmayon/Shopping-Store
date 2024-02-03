import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Navbar from "./components/Navbar";
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllProductsSection from './components/AllProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/all' element={<AllProductsSection />} />
          <Route path='/women' element={<AllProductsSection />} />
          <Route path='/men' element={<AllProductsSection />} />
          <Route path='/cart' element={<AllProductsSection />} />
        </Routes>
      </BrowserRouter>

      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </div>
  );
}

export default App;
