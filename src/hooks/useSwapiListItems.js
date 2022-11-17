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

      // First: Filter to get a ship validating number of passengers
      const dataPassengers = dataResult.filter(
        element => element.passengers >= passengers
      );

      // Second: Filter to get a ship which part of the trilogy
      const shipTrilogy = dataPassengers.filter(element =>
        element.films.some(film => parseInt(film.slice(-2, -1)) >= 4)
      );

      // Third: Order ships
      const orderShips = shipTrilogy.sort(
        (firstItem, secondItem) => firstItem.passengers - secondItem.passengers
      );

      if (orderShips.length === 0) return setMainShips({});
      setMainShips(orderShips[0]);
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
