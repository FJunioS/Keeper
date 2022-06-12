import { createGlobalStyle } from "styled-components";
import { fonts } from "./Theme";

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  *, &::before, &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.source};
  }
  body {
    font-size: 100%;
  }
`;
