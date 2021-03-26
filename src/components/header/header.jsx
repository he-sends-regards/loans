import React from 'react';
import './header.css';
import LangChangeIcon from './img/lang-change.svg';

const Header = () => {
  return (
    <header>
      <span>LoanAid.AI</span>
      <div className="header__controls">
        <a href="" className="controls__login">Login</a>
        <div className="controls__lang">
          <img className="controls__lang_logo" src={LangChangeIcon} alt="" />
          <button>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
