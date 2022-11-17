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

  const newArray = resp.map(itemData => ({
    name: itemData.name,
    films: itemData.films,
    passengers: itemData.passengers,
    consumables: itemData.consumables,
    starship_class: itemData.starship_class,
  }));

  return newArray;
};
