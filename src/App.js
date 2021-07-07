import './styles/global.css'
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Vitrine from "./components/Vitrine";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Vitrine />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
