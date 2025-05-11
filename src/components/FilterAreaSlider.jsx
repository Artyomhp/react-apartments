import ReactSlider from "react-slider";

export const FilterAreaSlider = ({ defaultValue, min, max, onChange }) => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      thumbActiveClassName="example-thumb-active"
      trackClassName="example-track"
      markClassName="example-mark"
      defaultValue={defaultValue}
      min={min}
      max={max}
      onChange={onChange}
      ariaLabel={["Минимальное значение", "Максимальное значение"]}
      ariaValuetext={(state) => `Значение ${state.valueNow}`}
      // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      minDistance={1}
    />
  );
};
