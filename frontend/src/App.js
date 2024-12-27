
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/productDetail';
function App() {
  return (
   <div className="App"> 
    
   <Router>
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search" element={<Home />}/>
      <Route path="/product/:id"  element={ <ProductDetail />} />
    </Routes>
    </div>
   </Router>

 
   <Footer/>
   </div>
  );
}

export default App;
