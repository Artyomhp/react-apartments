import ReactSlider from "react-slider";

export const FilterAreaSlider = ({ defaultValue, onChange, min, max }) => {
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
      ariaLabel={["Lower thumb", "Upper thumb"]}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      minDistance={1}
    />
  );
};
