import styled from 'styled-components';

export const Input = styled.input`
  font-size: 15px;
  background-color: ${props => props.theme.colors.white};
  width: 40%;
  border: none;
  padding: 5px 10px;
  margin-right: 1rem;

  &:focus,
  &:active {
    outline: none;
  }
`;
