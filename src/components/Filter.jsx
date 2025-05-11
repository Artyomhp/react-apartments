import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setReset } from "../redux/slices/filterSlice";
import { FilterAreaSlider } from "../components/FilterAreaSlider";
export const Filter = ({ roomValue, onClickRoom, onClickApply }) => {
  const rooms = [1, 2, 3];
  const finishing = ["все", "white-box", "с ремонтом", "без отделки"];
  const arrays = {
    arrArea: [37, 85],
    arrFloor: [1, 8],
  };
  return (
    <div className="filter">
      <ul className="filter__list">
        <li className="filter__item">
          <h5 className="filter__label">Количество комнат</h5>
          <div className="filter__row room">
            <div className="filter__room">
              {rooms.map((obj, id) => (
                <button
                  key={id}
                  onClick={() => onClickRoom(obj)}
                  className={
                    roomValue === obj
                      ? "room__category active"
                      : "room__category"
                  }
                >
                  {obj}
                </button>
              ))}
            </div>
          </div>
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Площадь</h5>
          <FilterAreaSlider defaultValue={arrays.arrArea} min={37} max={85} />
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Отделка</h5>
          <div className="filter__finishing">
            {finishing.map((obj, id) => (
              <button key={id} className="finishing__category">
                {obj}
              </button>
            ))}
          </div>
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Этаж</h5>
          <FilterAreaSlider defaultValue={arrays.arrFloor} min={1} max={8} />
        </li>
        <li className="filter__action">
          <button onClick={() => onClickApply()} className="apply">
            Применить
          </button>
          <button className="reset" onClick={setReset}>
            Сбросить
          </button>
        </li>
      </ul>
    </div>
  );
};
