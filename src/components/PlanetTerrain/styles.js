import styled from 'styled-components';

export const Section = styled.div`
  width: 55%;
  margin: 30px 0 0 5px;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  p {
    font-size: 15px;
    letter-spacing: 1.2px;
    word-spacing: 0.8px;
    color: ${props => props.theme.colors.dark};
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
`;
