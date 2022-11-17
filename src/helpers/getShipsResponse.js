import { swapiApi } from '../api/swapiApi';

export const getShipsResponse = async () => {
  let promiseLoop = [];

  for (let index = 0; index < 4; index++) {
    promiseLoop[index] = await swapiApi
      .get(`/starships/?page=${index + 1}`)
      .then(resp => resp.data.results);
  }

  const dataResult = await Promise.all(promiseLoop);
  const resp = dataResult.flatMap(value => [...value]);

  // Filter to omit ships with undefined passengers
  const filterWithoutPassengers = resp.filter(
    element =>
      !element.passengers.includes('unknown') &&
      !element.passengers.includes('n/a')
  );

  // Filter to omit ships with undefined consumables
  const shipConsumables = filterWithoutPassengers.filter(
    element => !element.consumables.includes('unknown')
  );

  const newArray = shipConsumables.map(itemData => ({
    name: itemData.name,
    films: itemData.films,
    consumables: itemData.consumables,
    starship_class: itemData.starship_class,
    passengers: parseInt(itemData.passengers),
  }));

  return newArray;
};
