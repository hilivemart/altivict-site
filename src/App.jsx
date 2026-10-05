import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';
import PageHome from './pages/Home.jsx';
import PageProducts from './pages/Products.jsx';
import PageOemOdm from './pages/OemOdm.jsx';
import PageFactory from './pages/Factory.jsx';
import PageGallery from './pages/Gallery.jsx';
import PageGuides from './pages/Guides.jsx';
import PageFaq from './pages/Faq.jsx';
import PageContact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
      <div className="site">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/products" element={<PageProducts />} />
            <Route path="/oem-odm" element={<PageOemOdm />} />
            <Route path="/factory" element={<PageFactory />} />
            <Route path="/gallery" element={<PageGallery />} />
            <Route path="/guides" element={<PageGuides />} />
            <Route path="/faq" element={<PageFaq />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="*" element={<PageHome />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}
