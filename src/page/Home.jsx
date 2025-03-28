import React from 'react'
import Navbar from '../component/Navbar'
import Imagesider from '../component/Imagesider'
import Services from '../component/Services';
import Info from '../component/Info';
import Photogellry from '../component/Photogellry';
import Footer from '../component/Footer';
import About from './About';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Imagesider />
      <About/>
      <Services/>
      <Info/>
      <Photogellry/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default Home