import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  overflow: scroll;
  height: 440px;
  padding-left: 1rem;
  @media all and (min-width: 480px) {
    width: 50%;
  }
  h1 {
    color: ${props => props.theme.colors.title};
  }
`;
