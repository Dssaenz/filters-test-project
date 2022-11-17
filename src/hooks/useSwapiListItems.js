import { useState } from 'react';

import { getShipsResponse } from '../helpers/getShipsResponse';
import { getPlanetsResponse } from '../helpers/getPlanetsResponse';

export const useSwapiListItems = () => {
  // hooks 'useState'
  const [planets, setPLanets] = useState([]);
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

  // Function to get list of planets
  const getListOfPlanets = async () => {
    handleLoading(true);
    try {
      const dataResult = await getPlanetsResponse();
      setPLanets(dataResult);
    } catch (error) {
      throw new Error("Can't find ships");
    } finally {
      handleLoading(false);
    }
  };

  return {
    planets,
    loading,
    mainShip,
    getListOfShips,
    getListOfPlanets,
  };
};
