import { css } from "styled-components";

const theme = {
  /* function */

  setSize: (width, height = null) => css`
    width: ${width};
    height: ${height};
  `,

  setFlex: (justify, align, direction = null) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `,

  setFont: (size, weight, color, family = null) => css`
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
    font-family: ${family};
  `,
};

export default theme;
