import { useState } from 'react';
import { randomUserApi } from '../api/randomUserApi';

export const useGetListOfUsers = (results = 10) => {
  // hooks
  const [users, setUsers] = useState([]);
  const [loading, handleLoading] = useState(false);
  console.log(results);

  // Function to get list of users
  const getListOfUsers = async () => {
    handleLoading(true);
    try {
      const resp = await randomUserApi.get(`/?results=${results}`);
      const { results: usersResults } = resp.data;

      // Added sort method to order users by name
      const data = usersResults.sort((firstValue, secondValue) =>
        firstValue.name.first > secondValue.name.first
          ? 1
          : secondValue.name.first > firstValue.name.first
          ? -1
          : 0
      );

      setUsers(data);
    } catch (error) {
      console.log(error);
      throw new Error("Can't find users");
    } finally {
      handleLoading(false);
    }
  };

  return { users, loading, getListOfUsers };
};
