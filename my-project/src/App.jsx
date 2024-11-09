import React from 'react';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';
import Baner from './component/herob/baner';
import Subscribe from './component/sucscribe/subscribe';
import Baner2 from './component/herob/baner2';
import Footer from './component/Footer/Footer';


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
      <Services />
     <Baner/>
     <Subscribe/>
     <Baner2/>
     <Footer/>
    </main>
  );
};

export default App;
