import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './FooterDiv/Footer';
import LogoMarquee from './logomarqe/LogoMarquee';
import About from './NavBar/components/About'; // Import the About component
import Search from './SearchDIv/Search';
import Jobs from './JobDiv/Jobs';
import Value from './ValueDiv/Value';

// Component to conditionally render home page content
const HomePageContent = () => (
  <>
    <Search />
    <Jobs />
    <Value />
  </>
);

const App = () => {
  const location = useLocation();

  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <LogoMarquee />
      
      <Routes>
        <Route path="/" element={<HomePageContent />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        {/* Add more routes here as needed */}
      </Routes>
      
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
