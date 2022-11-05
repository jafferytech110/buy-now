import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Product from './components/products/Product';
import Slider from './components/slider/Slider';
import Testmonials from './components/testimonials/Testmonials';
import Virtual from './components/virtual/Virtual';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testmonials />
      <Footer />
    </div>
  );
}

export default App;
