import React from "react";

import { addLineBreak } from "../shared/lib/add-line-break";

export const Chat = () => {
  return (
    <div className="office">
      <div className="container">
        <div className="office__wrapper">
          <h2 className="office__label">Чат с менеджером</h2>
          <span className="office__message right">
            <p>Здравствуйте. Я хочу квартиру( Что мне делать?</p>
          </span>
          <span className="office__message left">
            Здравствуйте, Семён. Понимаем Ваше разочарование. Можем предложить
            Вам двухкомнатную квартиру{" "}
          </span>
          <span className="office__message right">Спасибо за помощь!</span>
          <span className="office__message left">
            Были рады Вам помочь! Приходите в наш офис и мы подберём Вам лучший
            вариант
          </span>
          <input
            type="text"
            className="office__input"
            placeholder="Сообщение"
          ></input>
        </div>
      </div>
    </div>
  );
};
