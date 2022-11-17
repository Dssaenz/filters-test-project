import { useState } from 'react';
import { Button, Section } from './styles';

import Spinner from '../Spinner/Spinner';
import InputField from '../InputField/InputField';
import MainContainer from '../MainContainer/MainContainer';

import { useSwapiListItems } from '../../hooks/useSwapiListItems';

const FastestShip = () => {
  const [peopleNumber, setPeopleNumber] = useState(0);
  const { loading, mainShip, getListOfShips } = useSwapiListItems();

  const onInputChange = ({ target }) => setPeopleNumber(target.value);

  const onSearchUser = () => {
    if (peopleNumber < 1) return null;
    getListOfShips(peopleNumber);
  };

  return (
    <MainContainer title='Fastest ship'>
      <InputField type='number' name='peopleNumber' onChange={onInputChange} />
      <Button onClick={onSearchUser}>Search User</Button>
      {loading ? <Spinner /> : null}
      {Object.keys(mainShip).length !== 0 && !loading && (
        <Section>
          <p>
            <b>Name:</b> {mainShip.name}
          </p>
          <p>
            <b>Starship class:</b> {mainShip.starship_class}
          </p>
          <p>
            <b>Number of passengers:</b> {mainShip.passengers}
          </p>
          <p>
            <b>Travel time:</b> {mainShip.consumables}
          </p>
        </Section>
      )}
    </MainContainer>
  );
};

export default FastestShip;
