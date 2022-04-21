import React from 'react';
import Pricing from './components/Pricing';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required</p>
      </div>
      <Pricing />
      <div className="footer">
        <p>
          Interactive Pricing Component - A Frontendmentor challenge - developed
          by Bashar Khdr
        </p>
      </div>
    </div>
  );
};

export default App;
