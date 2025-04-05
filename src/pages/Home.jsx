import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="main">
        <div className="preview">
          <div className="container">
            <div className="preview__title">
              <h1>ПРОДАЖА КВАРТИР В ДОМЕ МЕЧТЫ</h1>
            </div>
            <div className="preview__image">
              <img src="./src/assets/img/домик-2.png" alt=""></img>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <h2 className="about__title title">
              Уникальный проект в динамично развивающемся районе Калуги
            </h2>
            <p className="about__description">
              ЖК «Уютный горизонт» расположен в Ленинском районе на пересечении
              ключевых маршрутов локации – в 1 минуте от действующей станции{" "}
              метро и автотрассы СБВ (дублёр МКАД) с удобным съездом на парковку{" "}
              Здесь проходит единственный путь от жилых районов к метро, что
              обеспечивает высокую активность пешеходного трафика.
            </p>

            <div className="about-imgs">
              <div className="about-imgs__item--1">
                <img src="./src/assets/img/project/пол.png" alt=""></img>
                <p className="about-imgs__label">Тёплые полы</p>
              </div>
              <div className="about-imgs__item--2">
                <img src="./src/assets/img/project/домофон.png" alt=""></img>
                <p className="about-imgs__label">Умный домофон</p>
              </div>
              <div className="about-imgs__item--4">
                <img src="./src/assets/img/project/остекление.png" alt=""></img>
                <p className="about-imgs__label">
                  Панорамное остекление лоджий
                </p>
              </div>
              <div className="about-imgs__item--5">
                <img src="./src/assets/img/project/отопление.png" alt=""></img>
                <p className="about-imgs__label">Индивидуальное отопление</p>
              </div>
              <div className="about-imgs__item--3">
                <img
                  src="./src/assets/img/project/видеонаблюдение.png"
                  alt=""
                ></img>
                <p className="about-imgs__label">
                  Видеонаблюдение придомовой территории и подъезда
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="container">
            <div className="questions__inner">
              <h3 className="questions__label">
                Остались вопросы? Спросите в чате с менеджером либо назначьте
                встречу
              </h3>
              <p className="questions__description">
                Сделать это можно в личном кабинете:
              </p>
              <div className="questions__action">
                <a href="html/log-in.html" className="questions__btn">
                  ВХОД
                </a>
                <a href="html/registration.html" className="questions__btn">
                  РЕГИСТРАЦИЯ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="infra">
          <div className="container">
            <div className="infra__title title">
              Район с готовой инфраструктурой
            </div>
            <div className="infra-imgs">
              <div className="infra-imgs__item">
                <img src="./src/assets/img/infra/спорт.jpg" alt=""></img>
                <p className="infra-imgs__label">Спортивные площадки</p>
              </div>
              <div className="infra-imgs__item">
                <img src="./src/assets/img/infra/отдых.jpg" alt=""></img>
                <p className="infra-imgs__label">Озеленённая территория</p>
              </div>
              <div className="infra-imgs__item">
                <img src="./src/assets/img/infra/парковка.jpg" alt=""></img>
                <p className="infra-imgs__label">
                  парковка с электро-зарядками
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
