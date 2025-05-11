import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { formatNumber } from "../shared/lib/add-price-space";

export const FullApartment = () => {
  const [apartment, setApartment] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchApartment() {
      try {
        const { data } = await axios.get(
          "https://071f957245bab238.mokky.dev/items/" + id
        );
        setApartment(data);
      } catch {
        alert("проблема");
        navigate("/");
      }
    }
    fetchApartment();
  }, [id]);
  if (!apartment) {
    return "Загрузка...";
  }

  return (
    <div className="apartment">
      <div className="container">
        <div className="apartment__wrapper">
          <img
            className="apartment__img"
            src={`../src/assets/img/apartments/${apartment.area}.png`}
            alt=""
          ></img>
          <div className="apartment__right">
            <h2 className="apartment__title">{apartment.room}-комнатная</h2>
            <div className="apartment__characteristics">
              <div className="apartment__name">
                <span className="name__price">Стоимость</span>
                <span className="name__entrance">Подъезд</span>
                <span className="name__floor">Этаж</span>
                <span className="name__renovation">Отделка</span>
                <span className="name__square">Площадь</span>
              </div>
              <div className="apartment__value">
                <span className="price">{formatNumber(apartment.price)} ₽</span>
                <span className="entrance">Подъезд {apartment.entrance}</span>
                <span className="apartment__floor">
                  Этаж {apartment.floor} из 8
                </span>
                <span className="apartment__renovation">
                  {apartment.finishing}
                </span>
                <span className="apartment__square">{apartment.area} м²</span>
              </div>
            </div>
            <Link to="/mortgage">
              <button className="apartment__contact">Рассчитать ипотеку</button>
            </Link>
            <Link to="/contacts">
              <button className="apartment__contact">Связаться</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
