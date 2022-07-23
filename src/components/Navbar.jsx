import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="gradient-bg-welcome">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Exchange</a>
        </li> 
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Wallets</a>
        </li>
        <li>
          <button className="btn  btn-primary btn-sm">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
