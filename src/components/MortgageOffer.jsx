import React from "react";

export const MortgageOffer = (offer) => {
  if (!offer) {
    return "Загрузка...";
  }
  return (
    <li className="offer">
      <div className="offer__img">
        <img src={offer.imageUrl} alt=""></img>
      </div>
      <ul className="offer__proposals">
        <li className="proposals__item">
          <span className="label">Ставка</span>
          <span className="text">от {offer.rate}%</span>
        </li>
        <li className="proposals__item">
          <span className="label">Срок кредита</span>
          <span className="text">до {offer.term} лет</span>
        </li>
        <li className="proposals__item">
          <span className="label">Перв. взнос</span>
          <span className="text">от {offer.deposit}%</span>
        </li>
        <li className="proposals__item">
          <span className="label">Ежемес. платёж</span>
          <span className="text"> {offer.payment} ₽</span>
        </li>
      </ul>
    </li>
  );
};
