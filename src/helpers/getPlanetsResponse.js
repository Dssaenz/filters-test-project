import { swapiApi } from '../api/swapiApi';

export const getPlanetsResponse = async () => {
  let promiseLoop = [];

  for (let index = 0; index < 6; index++) {
    promiseLoop[index] = await swapiApi
      .get(`/planets/?page=${index + 1}`)
      .then(resp => resp.data.results);
  }

  const dataResult = await Promise.all(promiseLoop);
  const resp = dataResult.flatMap(value => [...value]);

  // Filter to omit planets with undefined population
  const filterResponse = resp.filter(
    element => !element.population.includes('unknown')
  );

  const newArray = filterResponse.map(value => ({
    url: value.url,
    name: value.name,
    terrain: value.terrain,
    population: parseInt(value.population),
  }));

  return newArray;
};
