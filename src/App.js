import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import './style.css';
export default function App() {
  return (
    <div>
      <div classname="bg-img">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}
