import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <h2>Welcome to Our Online Shop</h2>
        <Header />
        <Products />
        <Footer />

    </div>
  );
};

export default Home;
