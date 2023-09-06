import styled from "styled-components";
import Slider from "@material-ui/core/Slider";

export const RootContainer = styled.div`
  width: 240px;

  color: var(--primary-color);
`;

export const StyledSlider = styled(Slider)`
.MuiSlider-valueLabel {
    color: var(--gray);
    font-size: 9px;
  }
`;
