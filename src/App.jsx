import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;