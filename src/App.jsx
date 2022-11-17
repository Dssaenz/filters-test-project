import styled from 'styled-components';

import {
  PlanetTerrain,
  FastestShip,
  FetchFind,
  FetchCounter,
  FetchOrder,
} from './components';

const SectionWrapper = styled.div`
  display: block;
  @media all and (min-width: 480px) {
    display: flex;
  }
`;

function App() {
  return (
    <>
      <SectionWrapper>
        <FetchOrder />
        <FetchFind />
        <FetchCounter />
      </SectionWrapper>
      <SectionWrapper>
        <FastestShip />
        <PlanetTerrain />
      </SectionWrapper>
    </>
  );
}

export default App;
