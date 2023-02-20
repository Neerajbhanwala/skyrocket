import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
<BrowserRouter>
<Header />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  <Footer />
</BrowserRouter>


    </>
  );
}

export default App;
