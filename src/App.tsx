import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PlanDetails } from './pages/PlanDetails';
import { JingleDetails } from './pages/JingleDetails';
import { LogoDetails } from './pages/LogoDetails';
import { WorkWithUs } from './pages/WorkWithUs';
import { OfficialRepresentatives } from './pages/OfficialRepresentatives';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/plan-details" element={<PlanDetails />} />
          <Route path="/jingle-details" element={<JingleDetails />} />
          <Route path="/logo-details" element={<LogoDetails />} />
          <Route path="/trabaja-con-nosotros" element={<WorkWithUs />} />
          <Route path="/representantes-oficiales" element={<OfficialRepresentatives />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;