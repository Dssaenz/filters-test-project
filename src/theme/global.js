import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.colors.backgroundColor};
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
  }
`;
