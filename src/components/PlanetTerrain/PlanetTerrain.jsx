import { useEffect, useState, useMemo } from 'react';

import { useSwapiListItems } from '../../hooks/useSwapiListItems';

const PlanetTerrain = () => {
  const [terrain, setTerrain] = useState('');
  const { loading, planets, getListOfPlanets } = useSwapiListItems();

  const handleSearch = ({ target }) => setTerrain(target.value);

  const filterPlanets = useMemo(() => {
    const datafilter = planets.filter(planet =>
      planet.terrain.toLowerCase().includes(terrain.toLowerCase())
    );
    return datafilter.sort(
      (firstItem, secondItem) => secondItem.population - firstItem.population
    );
  }, [planets, terrain]);

  useEffect(() => {
    getListOfPlanets();
  }, []);

  return (
    <div>
      <h1>Planet by terrain</h1>
      <div>
        <input type='text' value={terrain} onChange={handleSearch} />
      </div>
      {loading ? <p>Loading...</p> : null}

      {filterPlanets.length !== 0 &&
        !loading &&
        filterPlanets.slice(0, 1).map(planet => (
          <div key={planet.url}>
            <p>Name: {planet.name}</p>
            <p>Terrain: {planet.terrain}</p>
            <br />
          </div>
        ))}
    </div>
  );
};

export default PlanetTerrain;
