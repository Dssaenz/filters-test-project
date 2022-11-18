import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  font-weight: bold;
  padding: 6px 10px;
  z-index: 1;
  &:before {
    border-radius: 4px;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.lightBlue};
    position: absolute;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform ease-in-out 0.2s;
  }
  &:hover {
    cursor: pointer;
    &:before {
      transform: scaleX(1);
    }
  }
`;

export const Section = styled.div`
  width: 55%;
  margin: 30px 0 0 5px;
  border-radius: 10px;
  padding: 10px 20px;
  background: ${props => props.theme.colors.darkGray};
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
