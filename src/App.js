import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Products from './Components/Products';
import Footer from './Components/Footer'
import '../src/assets/css/base.css'
import ContainerInfo from "./Components/Products/Details"

function App() {
  return ( 
          <>
              {/* <ContainerInfo>

              </ContainerInfo> */}
              <Header/>
              <Banner/>
              <Products/>
              <Footer/>
          </>  
  );
}

export default App;
