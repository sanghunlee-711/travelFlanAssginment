import { css } from "styled-components";

const theme = {
  /* font */
  libre: "Libre Baskerville",
  alata: "Alata",
  lora: "Lora",
  comfortaa: "Comfortaa",

  /* color */
  titleBlack: "#000000",
  borderBlack: "#333333",
  contentsGray: "#4d4d4d",
  CartCountGray: "#999999",
  dateTextGray: "#b3b3b3",
  white: "#ffffff",

  /* function */
  footerHover: css`
    &:link,
    &:visited,
    &:active {
      color: black;
    }

    &:hover {
      transition: ease 250ms color;
      color: #999999;
    }
  `,

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
