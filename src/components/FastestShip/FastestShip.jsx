import { useState } from 'react';

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
    <div>
      <h1>Fastest ship</h1>
      <input type='number' name='peopleNumber' onChange={onInputChange} />
      <button onClick={onSearchUser}>Search User</button>
      {loading ? <p>Loading...</p> : null}
      {Object.keys(mainShip).length !== 0 && !loading && (
        <>
          <p>Name: {mainShip.name}</p>
          <p>Starship class: {mainShip.starship_class}</p>
          <p>Number of passengers: {mainShip.passengers}</p>
          <p>Travel time: {mainShip.consumables}</p>
        </>
      )}
    </div>
  );
};

export default FastestShip;
