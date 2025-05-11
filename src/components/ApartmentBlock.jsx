import React from "react";

import { formatNumber } from "../shared/lib/add-price-space";

export const ApartmentBlock = ({
  imageUrl,
  room,
  area,
  entrance,
  floor,
  finishing,
  price,
}) => {
  return (
    <li className="catalog__item">
      <div className="catalog__img">
        <img src={imageUrl} alt=""></img>
      </div>
      <div className="catalog__description">
        <span className="catalog__room">{room}-комнатная</span>
        <span className="catalog__square">{area} м²</span>
        <span className="catalog__entrance">подъезд {entrance}</span>
        <span className="catalog__floor">этаж {floor} из 8</span>
        <span className="catalog__finishing">{finishing}</span>
        <span className="catalog__price">{formatNumber(price)} ₽</span>
      </div>
    </li>
  );
};
