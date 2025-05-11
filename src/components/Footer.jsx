import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/icons/logo (blue).png";
import inst from "../assets/img/icons/insta.svg";
import vk from "../assets/img/icons/vk.svg";
import youtube from "../assets/img/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo logo">
            <a href="index.html">
              <img src={logo} alt=""></img>
            </a>
            <div className="footer__name name">Уютный горизонт</div>
          </div>
          <div className="footer__row">
            <nav className="footer__menu menu">
              <ul className="footer__menu--list">
                <Link to="catalog">
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
            <div className="footer__link">
              <div className="link__inst link">
                <Link to="https://www.instagram.com/">
                  <img src={inst} alt=""></img>
                </Link>
              </div>
              <div className="link__vk link">
                <Link to="https://vk.com/">
                  <img src={vk} alt=""></img>
                </Link>
              </div>
              <div className="link__youtube link">
                <Link to="https://www.youtube.com/">
                  <img src={youtube} alt=""></img>
                </Link>
              </div>
              <div className="link__email link">
                <Link to="#">uyutnyygorizont@mail.ru</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
