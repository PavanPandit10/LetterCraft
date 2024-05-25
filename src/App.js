// import logo from './logo.svg';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Homepage/Home';
import About from './Pages/Aboutpage/About';
import Contact from './Pages/ContactUspage/Contact';
import Language from './Pages/Languagepage/Language'
import Certified from './Pages/Certifiedpage/Certified';
import Career from './Pages/Careerpage/Career';
import Industry from './Pages/Industrypage/Component1'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>
    
       <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/language" element={<Language/>}/>
              <Route path="/certified" element={<Certified/>}/>
              <Route path="/career" element={<Career/>}/>
              <Route path="/industry" element={<Industry/>}/>
          </Routes>
            <Footer/>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
