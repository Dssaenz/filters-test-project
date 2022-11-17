import { useEffect, useState, useMemo } from 'react';

import { Section } from './styles';

import Spinner from '../Spinner/Spinner';
import InputField from '../InputField/InputField';
import MainContainer from '../MainContainer/MainContainer';

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
    <MainContainer title='Planet by terrain'>
      <div>
        <InputField type='text' value={terrain} onChange={handleSearch} />
      </div>
      {loading ? <Spinner /> : null}

      {filterPlanets.length !== 0 &&
        !loading &&
        filterPlanets.slice(0, 1).map(planet => (
          <Section key={planet.url}>
            <p>
              <b>Name:</b> {planet.name}
            </p>
            <p>
              <b>Terrain:</b> {planet.terrain}
            </p>
          </Section>
        ))}
    </MainContainer>
  );
};

export default PlanetTerrain;
