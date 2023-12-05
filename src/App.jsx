import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
// import Card from './components/Card';

import About from './pages/About';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
  const [ currentPage, setCurrentPage ] = useState ('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='App'>
     <Header currentPage={ currentPage } 
     handlePageChange={handlePageChange}/>
     <main>
      {renderPage ()}
     </main>
    <Footer />
    </div>
  )
}

export default App;
