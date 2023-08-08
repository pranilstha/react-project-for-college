import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <>
      <nav>
        <nav class="navbar">
          <div class="navbar-logo">
            <img src="bookstore-icon.png" alt="Bookstore Logo"/>
          </div>
          <ul class="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default NavigationBar;
