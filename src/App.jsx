import {
  PlanetTerrain,
  FastestShip,
  FetchFind,
  FetchCounter,
  FetchOrder,
} from './components';

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <FetchOrder />
        <FetchFind />
        <FetchCounter />
      </div>
      <div style={{ display: 'flex' }}>
        <FastestShip />
        <PlanetTerrain />
      </div>
    </>
  );
}

export default App;
