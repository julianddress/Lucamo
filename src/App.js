import './App.css';
import '../src/assets/css/base.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Stock from './Components/Stock'
import Footer from './Components/Footer'

function App() {
  return ( 
          <>
              <Header/>
              <Banner/>
              <Stock/>
              <Footer/>
          </>  
  );
}

export default App;
