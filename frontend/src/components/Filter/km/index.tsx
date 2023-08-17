import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { RootContainer, StyledSlider } from "./style";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";

const valuetext = (value: number) => {
  return `${value} km`;
};

export const RangeKMSlider = () => {
  const { valueKmCar, setValueKmCar } = useContext(HomeContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValueKmCar(newValue as number[]);
  };

  return (
    <RootContainer>
      <Typography
        id="range-slider"
        gutterBottom
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: "bold",
          margin: "5px 0",
          fontSize: "16px",
        }}
      >
        KM
      </Typography>
      <StyledSlider
        value={valueKmCar}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step={10000}
        max={650000}
      />
    </RootContainer>
  );
};
