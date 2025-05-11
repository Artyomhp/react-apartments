import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/icons/logo (blue).png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <div className="header__logo logo">
              <img src={logo} alt=""></img>
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
          <Link to="#">
            <div className="menu__item--number">+7 (495) 221-40-22</div>
          </Link>
        </div>
      </div>
    </header>
  );
};
