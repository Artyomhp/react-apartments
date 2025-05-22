// Catalog.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Filter } from "../components/Filter";
import { ApartmentBlock } from "../components/ApartmentBlock";
import { fetchApartments } from "../redux/slices/apartmentsSlice";
import { setApply, setReset } from "../redux/slices/filterSlice";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { appliedFilters } = useSelector((state) => state.filter);

  const [filters, setFilters] = useState({
    room: null,
    area: [37, 85],
    finishing: "все",
    floor: [1, 8],
  });

  const handleRoomChange = (room) => {
    setFilters((prev) => ({ ...prev, room }));
  };

  const onClickApply = () => {
    dispatch(setApply());
    // getApartments();
  };

  const handleFloorChange = (floor) => {
    setFilters((prev) => ({ ...prev, floor }));
  };

  const apartments = items.map((obj, id) => (
    <Link to={`/apartment/${obj.id}`} key={id}>
      <ApartmentBlock {...obj} />
    </Link>
  ));

  const handleApply = () => {
    dispatch(setApply(filters));
    dispatch(fetchApartments(filters));
  };

  const handleReset = () => {
    const defaultFilters = {
      room: null,
      area: [37, 85],
      finishing: "все",
      floor: [1, 8],
    };
    setFilters(defaultFilters);
    dispatch(setReset());
    dispatch(fetchApartments(defaultFilters));
  };

  React.useEffect(() => {
    dispatch(fetchApartments());
  }, []);

  React.useEffect(() => {
    dispatch(fetchApartments(appliedFilters));
    console.log(appliedFilters);
  }, [appliedFilters]);
  return (
    <div className="catalog">
      <div className="container">
        <h1 className="catalog__title">Каталог квартир</h1>
        <div className="catalog__wrapper">
          <Filter
            roomValue={filters.room}
            areaValue={filters.area}
            floorValue={filters.floor}
            finishingValue={filters.finishing}
            onRoomChange={handleRoomChange}
            onAreaChange={handleAreaChange}
            onFloorChange={handleFloorChange}
            onFinishingChange={handleFinishingChange}
            onApply={handleApply}
            onReset={handleReset}
          />
          <div className="catalog__block">
            {status === "loading" && <div>Загрузка...</div>}
            {status === "succeeded" && (
              <ul className="catalog__list">
                {items.map((obj) => (
                  <Link to={`/apartment/${obj.id}`} key={obj.id}>
                    <ApartmentBlock {...obj} />
                  </Link>
                ))}
              </ul>
            )}
            {status === "failed" && <div>Ошибка загрузки</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
