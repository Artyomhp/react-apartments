import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <div className="header__logo logo">
              <img src="./src/assets/img/icons/logo (blue).png" alt=""></img>
              <span className="header__name name">УЮТНЫЙ ГОРИЗОНТ</span>
            </div>
          </Link>
          <nav className="header__menu menu">
            <ul className="header__menu--list">
              <Link to="/catalog">
                <li className="menu__item">Каталог</li>
              </Link>
              <Link to="about-company">
                <li className="menu__item">О компании</li>
              </Link>
              <Link to="contacts">
                <li className="menu__item">Контакты</li>
              </Link>
            </ul>
          </nav>
          <div className="menu__item--user">Личный кабинет</div>
        </div>
      </div>
    </header>
  );
};
