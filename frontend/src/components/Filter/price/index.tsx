import { useContext, ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import { RootContainer, StyledSlider } from "./style";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";

const valuetext = (value: number) => {
  return `R$ ${value}`;
};

export const RangeSlider = () => {
  const { valueCar, setValueCar } = useContext(HomeContext);

  const handleChange = (event: ChangeEvent, newValue: number | number[]) => {
    setValueCar(newValue as number[]);
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
        Preço
      </Typography>
      <StyledSlider
        value={valueCar}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step={10000}
        max={550000}
      />
    </RootContainer>
  );
};
