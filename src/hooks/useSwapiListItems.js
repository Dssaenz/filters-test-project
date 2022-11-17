import { useState } from 'react';

import { getShipsResponse } from '../helpers/getShipsResponse';

export const useSwapiListItems = () => {
  const [mainShip, setMainShips] = useState({});
  const [loading, handleLoading] = useState(false);

  const getListOfShips = async passengers => {
    handleLoading(true);
    try {
      const dataResult = await getShipsResponse();

      // First filter to omit ships with undefined passengers
      const filterWithoutPassengers = dataResult.filter(
        element =>
          !element.passengers.includes('unknown') &&
          !element.passengers.includes('n/a')
      );

      // Second filter to get a ship validating number of passengers
      const dataPassengers = filterWithoutPassengers.filter(
        element => parseInt(element.passengers) >= passengers
      );

      // Third filter to get a ship which part of the trilogy
      const shipTrilogy = dataPassengers.filter(element =>
        element.films.some(film => parseInt(film.slice(-2, -1)) >= 4)
      );

      // Fourth filter to omit ships with undefined consumables
      const shipConsumables = shipTrilogy.filter(
        element => !element.consumables.includes('unknown')
      );

      setMainShips(shipConsumables[0]);
    } catch (error) {
      throw new Error("Can't find ships");
    } finally {
      handleLoading(false);
    }
  };

  return {
    loading,
    mainShip,
    getListOfShips,
  };
};

//24
