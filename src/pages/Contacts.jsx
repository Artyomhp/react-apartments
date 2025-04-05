import React from "react";

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h1 className="contacts__title">Контакты</h1>
        <div className="contacts__list">
          <div className="contacts__item">
            <div className="contacts__label">Офис продаж</div>
            <p className="contacts__adress">
              249034, Калужская обл., г. Калуга, ул. Болдина, д. 12 {"\n"}График
              работы: {"\n"} Пн–Пт 9:00–19:00 {"\n"} Сб–Вс 10:00–18:00
            </p>
            <p className="contacts__tel">+7 (495) 221-40-22</p>
            <p className="contacts__mail">uyutnyygorizont@mail.ru</p>
          </div>
          <div className="contacts__item">
            <div className="contacts__label">Юридический отдел</div>
            <p className="contacts__adress">
              249034, Калужская обл., г. Калуга, ул. Болдина, д. 9
            </p>
            <p className="contacts__tel">+7 (495) 221-40-22</p>
            <p className="contacts__mail">uyutnyygorizont@mail.ru</p>
          </div>
          <div className="contacts__item">
            <div className="contacts__label">Бухгалтерский отдел</div>
            <p className="contacts__adress">
              249034, Калужская обл., г. Калуга, ул. Болдина, д. 11
            </p>
            <p className="contacts__tel">+7 (495) 221-40-22</p>
            <p className="contacts__mail">uyutnyygorizont@mail.ru</p>
          </div>
        </div>
        <img
          src="./src/assets/img/location.png"
          alt=""
          className="contacts__img"
        ></img>
      </div>
    </section>
  );
};
