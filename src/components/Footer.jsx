import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo logo">
            <a href="index.html">
              <img src="./src/assets/img/icons/logo (blue).png" alt=""></img>
            </a>
            <div className="footer__name name">
              <a href="index.html">Уютный горизонт</a>
            </div>
          </div>
          <div className="footer__row">
            <nav className="footer__menu menu">
              <ul className="footer__menu--list">
                <li className="menu__item">
                  <a href="html/catalog.html">Каталог</a>
                </li>
                <li className="menu__item">
                  <a href="html/price.html">Прайс</a>
                </li>
                <li className="menu__item">
                  <a href="html/about-company.html">О компании</a>
                </li>
                <li className="menu__item">
                  <a href="html/contacts.html">Контакты</a>
                </li>
                <li className="menu__item">
                  <a href="html/log-in.html">Личный кабинет</a>
                </li>
              </ul>
            </nav>
            <div className="footer__link">
              <div className="link__inst link">
                <a href="" className="">
                  <img src="./src/assets/img/icons/insta.svg" alt=""></img>
                </a>
              </div>
              <div className="link__vk link">
                <a href="" className="">
                  <img src="./src/assets/img/icons/vk.svg" alt=""></img>
                </a>
              </div>
              <div className="link__youtube link">
                <a href="" className="">
                  <img src="./src/assets/img/icons/youtube.svg" alt=""></img>
                </a>
              </div>
              <div className="link__email link">
                <a href="" className="">
                  uyutnyygorizont@mail.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
