import { randomUserApi } from '../api/randomUserApi';

export const getUsersResponse = async (limit = 10) => {
  const resp = await randomUserApi.get(`/?results=${limit}`);
  const { results: usersResults } = resp.data;

  return usersResults;
};
