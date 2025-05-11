import React from "react";
import axios from "axios";

import { MortgageCalculate } from "../components/MortgageCalculate";
import { MortgageOffer } from "../components/MortgageOffer";

export const Mortgage = () => {
  const [offers, setOffers] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchOffers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://071f957245bab238.mokky.dev/mortgage"
        );
        setOffers(response.data);
      } catch (err) {
        console.error("Ошибка при загрузке ипотечных предложений:", err);
        setError(
          "Не удалось загрузить ипотечные предложения. Пожалуйста, попробуйте позже."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);
  return (
    <div className="mortgage">
      <div className="container">
        <h1 className="mortgage__title">Расчёт ипотеки</h1>
        <div className="mortgage__row">
          <MortgageCalculate />

          {/* <ul className="mortgage__list">
            {offers.map((obj) => (
              <MortgageOffer key={obj.id} {...obj} />
            ))}
          </ul> */}
          {isLoading ? (
            <div>Загрузка предложений...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : offers.length === 0 ? (
            <div>Нет доступных ипотечных предложений.</div>
          ) : (
            <ul className="mortgage__list">
              {offers.map((offer) => (
                <MortgageOffer key={offer.id} {...offer} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
