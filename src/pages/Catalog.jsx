import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <h1 className="catalog__title">Каталог квартир</h1>
        <div className="catalog__wrapper">
          <div className="filter">
            <ul className="filter__list">
              <li className="filter__item">
                <h5 className="filter__label">Количество комнат</h5>
                <div className="filter__row room">
                  <div className="filter__room">
                    <button className="room__category">1</button>
                    <button className="room__category">2</button>
                    <button className="room__category">3</button>
                  </div>
                </div>
              </li>
              <li className="filter__item">
                <h5 className="filter__label">Площадь</h5>
                <div className="filter__row square">
                  <input
                    type="number"
                    className="filter__square"
                    placeholder="от 16"
                  ></input>
                  <input
                    type="number"
                    className="filter__square"
                    placeholder="до 62"
                  ></input>
                </div>
              </li>
              <li className="filter__item">
                <h5 className="filter__label">Отделка</h5>
                <div className="filter__row renovation">
                  <div className="renovation__top">
                    <button className="all">все</button>
                    <button className="wb">white-box</button>
                  </div>
                  <div className="renovation__top">
                    <button className="remont">с ремонтом</button>
                    <button className="notrenovation">без отделки</button>
                  </div>
                </div>
              </li>
              <li className="filter__item">
                <h5 className="filter__label">Этаж</h5>
                <div className="filter__row floor">
                  <input
                    type="number"
                    className="filter__square"
                    placeholder="от 1"
                  ></input>
                  <input
                    type="number"
                    className="filter__square"
                    placeholder="до 6"
                  ></input>
                </div>
              </li>
              <li className="filter__action">
                <button className="apply">Применить</button>
                <button className="reset">Сбросить</button>
              </li>
            </ul>
          </div>
          <div className="catalog__block">
            <ul className="catalog__list">
              <li className="catalog__item">
                <a href="../html/84.25.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/84.25.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">3-комнатная</span>
                    <span className="catalog__square">84.25 м²</span>
                    <span className="catalog__entrance">подъезд 3</span>
                    <span className="catalog__floor">этаж 7 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">11 373 750 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/84.25-2.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/84.25.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">3-комнатная</span>
                    <span className="catalog__square">84.25 м²</span>
                    <span className="catalog__entrance">подъезд 3</span>
                    <span className="catalog__floor">этаж 8 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">11 373 750 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/84.25-3.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/84.25.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">3-комнатная</span>
                    <span className="catalog__square">84.25 м²</span>
                    <span className="catalog__entrance">подъезд 3</span>
                    <span className="catalog__floor">этаж 5 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">11 373 750 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/64.9.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/64.9.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">2-комнатная</span>
                    <span className="catalog__square">64.9 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 4 из 8</span>
                    <span className="catalog__renovation">white box</span>
                    <span className="catalog__price">9 410 000 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/61.23.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/61.23.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">2-комнатная</span>
                    <span className="catalog__square">61.23 м²</span>
                    <span className="catalog__entrance">подъезд 3</span>
                    <span className="catalog__floor">этаж 5 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">8 266 050 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/61.23-2.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/61.23.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">3-комнатная</span>
                    <span className="catalog__square">61.23 м²</span>
                    <span className="catalog__entrance">подъезд 3</span>
                    <span className="catalog__floor">этаж 6 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">8 266 050 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/52.73.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/52.73.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">52.73 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 2 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">7 013 090 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/51.8.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/51.8.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">51.8 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 7 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">6 941 200 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/51.48.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/51.48.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">51.48 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 3 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">6 846 840 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/48.05.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/48.05.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">48.05 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 2 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">6 390 650 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/47.2.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/47.2.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">47.2 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 6 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">6 277 600 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/45.72.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/45.72.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">45.72 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 2 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">6 080 760₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/45.49.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/45.49.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">45.49 м²</span>
                    <span className="catalog__entrance">подъезд 1</span>
                    <span className="catalog__floor">этаж 2 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">6 050 170 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/44.95.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/44.95.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">44.95 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 4 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">5 978 350 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/43.73.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/43.73.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">43.73 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 7 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">5 859 820 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/43.73.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/43.73.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">43.73 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 8 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">5 859 820 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/43.46.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/43.46.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">43.46 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 8 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">5 910 560 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/42.72.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/42.72.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">42.72 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 2 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">5 681 760 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/38.29.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/38.29.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">38.29 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 5 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">5 092 570 ₽</span>
                  </div>
                </a>
              </li>
              <li className="catalog__item">
                <a href="../html/37.54.html">
                  <div className="catalog__img">
                    <img
                      src="./src/assets/img/apartments/37.54.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="catalog__description">
                    <span className="catalog__room">1-комнатная</span>
                    <span className="catalog__square">37.54 м²</span>
                    <span className="catalog__entrance">подъезд 2</span>
                    <span className="catalog__floor">этаж 6 из 8</span>
                    <span className="catalog__renovation">без отделки</span>
                    <span className="catalog__price">4 992 820 ₽</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
