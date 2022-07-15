import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online book buying platform</h1>
            <h2>
              Find your dream book with <span className="purple">Bookwise</span>
            </h2>
            
              <button onClick={() => window.location.replace("/#features")}className="btn">Browse books</button>
              
            
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
