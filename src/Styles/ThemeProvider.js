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

  /*Modal Window css */
  ModalContainer: () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(217, 188, 186, 0.25);
  `,

  ModalWrapper: () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 35vh;
    left: 35vw;
    width: 30vw;
    border-radius: 0.5rem;
    background-color: white;
    @media only screen and (max-width: 1000px) {
      top: 82px;
      left: 0;
      width: 100vw;
      height: 30vh;
    }
  `,
  ModalTitle: () => css`
    font-size: 24px;
    line-height: 54px;
  `,
  ModalInput: () => css`
    width: 80%;
    height: 32px;
    margin: 5px;
    padding-left: 10px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 1rem;
  `,
};

export default theme;
