import styled from 'styled-components';

const Section = styled.div`
  width: 50%;
  overflow: scroll;
  height: 440px;
  padding-left: 1rem;
`;

const MainContainer = ({ title = 'Main title', children }) => (
  <Section>
    <h1>{title}</h1>
    {children}
  </Section>
);

export default MainContainer;
