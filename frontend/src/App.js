import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <Router>
    
  <Header></Header>
  <Nav />

  <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/about" exact element={<NosotrosPage />} />
    <Route path="/services" exact element={<NovedadesPage />} />
    <Route path="/contact" exact element={<ContactoPage />} />
  </Routes>
 

   <Footer />

    </Router> 

    );
}

export default App;

 
    
   