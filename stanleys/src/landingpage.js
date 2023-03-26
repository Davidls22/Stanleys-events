import React from 'react';
import StanleyLogo from './stanleys.png';
import './App.css';

function Landing() {
    return (
      <div>
        <nav>
          <a href="./App.js">Contact</a>
          <a href="./App.js">Menu</a>
          <a href="/aboutUs">About Us</a>
        </nav>
        <img src={StanleyLogo} alt="Stanley's Events" />
      </div>
    );
  }

export default Landing;
