import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setRoom, setFinishing, setApply } from "../redux/slices/filterSlice";
import { FilterAreaSlider } from "../components/FilterAreaSlider";
export const Filter = ({
  roomValue,
  areaValue,
  floorValue,
  finishingValue,
  onRoomChange,
  onAreaChange,
  onFloorChange,
  onFinishingChange,
  onApply,
  onReset,
}) => {
  const rooms = [1, 2, 3];
  const finishingTypes = ["все", "white-box", "с ремонтом", "без отделки"];

  const handleFinishingClick = (finishType) => {
    dispatch(setFinishing(finishType));
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
          <FilterAreaSlider
            defaultValue={areaValue}
            min={37}
            max={85}
            onChange={onAreaChange}
          />
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Отделка</h5>
          <div className="filter__finishing">
            {finishingTypes.map((obj, id) => (
              <button
                key={id}
                // onClick={onFinishingChange(obj)}
                className="finishing__category"
              >
                {obj}
              </button>
            ))}
          </div>
        </li>
        <li className="filter__item">
          <h5 className="filter__label">Этаж</h5>
          <FilterAreaSlider
            name="floor"
            defaultValue={floorValue}
            min={1}
            max={8}
            onChange={onFloorChange}
          />
        </li>
        <li className="filter__action">
          <button
            // onClick={onApply}
            className="apply"
          >
            Применить
          </button>
          <button
            className="reset"
            // onClick={onReset}
          >
            Сбросить
          </button>
        </li>
      </ul>
    </div>
  );
};
