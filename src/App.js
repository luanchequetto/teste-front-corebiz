import './styles/global.css'
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Vitrine from "./components/Vitrine";
import { CartProvider } from '../src/contexts/CartContext'

function App() {  

  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Banner />
        <Vitrine />
        <Newsletter />
        <Footer />
      </CartProvider>
    </div>

  );
}

export default App;
