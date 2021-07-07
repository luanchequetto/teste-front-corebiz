import './styles/global.css'
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Vitrine from "./components/Vitrine";
import {useState} from 'react'

function App() {
  console.log('tem' + localStorage.getItem('cartItens'))

  const [cartItens, setCartItens] = useState(localStorage.getItem('cartItens'))
  
  return (
    <div className="App">
      <Header cartItens={cartItens}/>
      <Banner />
      <Vitrine setCartItens={setCartItens} cartItens={cartItens}/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
