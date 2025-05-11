import ReactSlider from "react-slider";

export const FilterAreaSlider = ({ defaultValue, min, max, withTracks }) => {
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
      ariaLabel={["Lower thumb", "Upper thumb"]}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      minDistance={1}
    />
  );
};
