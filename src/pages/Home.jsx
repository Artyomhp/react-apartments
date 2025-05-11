import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Preview } from "../components/Preview";
import { Infrastructure } from "../components/Infrastructure";

export const Home = () => {
  return (
    <>
      <Preview />
      <div className="about">
        <div className="container">
          <h2 className="about__title title">
            Уникальный проект в динамично развивающемся районе Калуги
          </h2>
          <p className="about__description">
            ЖК «Уютный горизонт» расположен в Ленинском районе на пересечении
            ключевых маршрутов локации – в 1 минуте от действующей станции метро
            и автотрассы СБВ (дублёр МКАД) с удобным съездом на парковку Здесь
            проходит единственный путь от жилых районов к метро, что
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
              <p className="about-imgs__label">Панорамное остекление лоджий</p>
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
      <Infrastructure />
      <div className="questions">
        <div className="container">
          <div className="questions__inner">
            <h3 className="questions__label">
              Остались вопросы? Спросите в{" "}
              <Link to="contacts">
                <span className="bold">чате с менеджером</span>
              </Link>{" "}
              либо назначьте встречу
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
