import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';
// import './style.css';
export default function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}
