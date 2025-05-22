import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setRoom,
  setArea,
  setFinishing,
  setFloor,
  setApply,
  setReset,
} from "../redux/slices/filterSlice";
import { FilterAreaSlider } from "../components/FilterAreaSlider";
// export const Filter = ({ roomValue, onClickRoom, onClickApply }) => {
export const Filter = ({ onClickApply }) => {
  const dispatch = useDispatch();
  const { room, area, finishing, floor } = useSelector((state) => state.filter);
  const rooms = [1, 2, 3];
  const finishingTypes = ["все", "white-box", "с ремонтом", "без отделки"];
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
                  // onClick={() => onRoomChange(obj)}
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
          <FilterAreaSlider defaultValue={area} min={area[0]} max={area[1]} />
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Отделка</h5>
          <div className="filter__finishing">
            {finishingTypes.map((obj, id) => (
              <button
                key={id}
                onClick={() => dispatch(setFinishing(obj))}
                className={
                  finishing === obj
                    ? "finishing__category active"
                    : "finishing__category"
                }
              >
                {obj}
              </button>
            ))}
          </div>
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Этаж</h5>
          {/* <FilterAreaSlider defaultValue={arrays.arrFloor} min={1} max={8} /> */}
          <FilterAreaSlider
            defaultValue={floor}
            min={floor[0]}
            max={floor[1]}
          />
        </li>
        <li className="filter__action">
          {/* <button onClick={() => onClickApply()} className="apply"> */}
          <button onClick={onClickApply} className="apply">
            Применить
          </button>
          <button
            className="reset"
            // onClick={() => console.log(dispatch(setReset()))}
            onClick={() => dispatch(setReset())}
          >
            Сбросить
          </button>
        </li>
      </ul>
    </div>
  );
};
