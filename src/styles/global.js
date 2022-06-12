import styled from "styled-components";

export const GlobalStyle = styled.GlobalStyleComponent`
  html, body, #root {
    height: 100%;
  }
  *, &::before, &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  body {
    font-size: 100%;
  }
`;
