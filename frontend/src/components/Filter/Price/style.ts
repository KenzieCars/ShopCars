import styled from "styled-components";
import Slider from "@material-ui/core/Slider";

export const RootContainer = styled.div`
  width: 240px;
`;

export const StyledSlider = styled(Slider)`
  /* .MuiSlider-thumb {
    width: 10px;
    height: 10px;
    margin-top: -8px;
    margin-left: -9px;
  } */

  .MuiSlider-valueLabel {
    font-size: 9px;
  }
`;
