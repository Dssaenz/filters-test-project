import { Section } from './styles';

const MainContainer = ({ title = 'Main title', children }) => (
  <Section>
    <h1>{title}</h1>
    {children}
  </Section>
);

export default MainContainer;
