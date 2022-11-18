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

export const UserCard = styled.div`
  margin-top: 20px;
  display: flex;
  width: 70%;
  border-radius: 8px;
  padding: 10px 4% 10px 4%;
  background: ${props => props.theme.colors.darkGray};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .avatar {
    border-radius: 50%;
    width: 64px;
    margin-right: 1rem;
  }
  h4,
  p {
    margin: 0;
  }
  h4 {
    margin-top: 10px;
    font-size: 18px;
    display: inline-block;
    position: relative;
    color: ${props => props.theme.colors.dark};
  }

  p {
    margin-top: 5px;
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
  }
`;
