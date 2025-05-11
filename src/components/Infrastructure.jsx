import React from "react";

export const Infrastructure = () => {
  return (
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
            <p className="infra-imgs__label">парковка с электро-зарядками</p>
          </div>
        </div>
      </div>
    </div>
  );
};
