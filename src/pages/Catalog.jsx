import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Filter } from "../components/Filter";
import { ApartmentBlock } from "../components/ApartmentBlock";
import { FilterAreaSlider } from "../components/FilterAreaSlider";
import { fetchApartments } from "../redux/slices/apartmentsSlice";
import { setApply, setReset, setRoom } from "../redux/slices/filterSlice";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { appliedFilters } = useSelector((state) => state.filter);

  const { items } = useSelector((state) => state.apartments);
  const { room, finishing } = useSelector((state) => state.filter);
  const roomActiveRef = React.useRef(false);
  // const rooms = room > 0 ? `room=${room}` : "";
  // const areas = area >

  const onClickRoom = (index) => {
    dispatch(setRoom(index));
  };
  const onClickArea = (array) => {
    dispatch(setArea(array));
  };

  const onClickApply = () => {
    dispatch(setApply());
    // getApartments();
  };

  const checkArea = () => {
    area > arr[0] && area < arr[arr.length - 1]
      ? console.log(area)
      : console.log("не найдено");
  };

  const apartments = items.map((obj, id) => (
    <Link to={`/apartment/${obj.id}`} key={id}>
      <ApartmentBlock {...obj} />
    </Link>
  ));

  const getApartments = async () => {
    const rooms = room > 0 ? `room=${room}` : "";

    dispatch(fetchApartments({ rooms }));
  };

  React.useEffect(() => {
    getApartments();
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
            roomValue={room}
            onClickRoom={onClickRoom}
            onClickApply={onClickApply}
          />
          <div className="catalog__block">
            <ul className="catalog__list">{apartments}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
