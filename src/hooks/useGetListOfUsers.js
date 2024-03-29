import { useState } from 'react';
import { getUsersResponse } from '../helpers/getUsersResponse';

export const useGetListOfUsers = () => {
  // hooks 'useState'
  const [users, setUsers] = useState([]);
  const [loading, handleLoading] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const [letterResult, setLetterResult] = useState('');

  // Function to get list of users
  const getListOfUsers = async () => {
    handleLoading(true);
    try {
      const usersResults = await getUsersResponse();

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

  // Function to get user based on 'age' param
  const getUserByCurrentAge = async age => {
    handleLoading(true);
    try {
      const usersResults = await getUsersResponse();

      // Added 'sort' and 'find' methods to get just one user with age range
      const dataResult = usersResults
        .sort((resultOne, resultTwo) => resultOne.dob.age - resultTwo.dob.age)
        .find(({ dob }) => dob.age >= age);

      !!dataResult && setSingleUser(dataResult);
    } catch (error) {
      throw new Error("Can't find users");
    } finally {
      handleLoading(false);
    }
  };

  // Function to find the most repeted lletter in the the names
  const getRepeatedLetterByName = async () => {
    handleLoading(true);
    try {
      const usersResults = await getUsersResponse(5);

      // Joins usernames into a single string
      const textNames = usersResults
        .map(({ name: { first } }) => `${first.toLowerCase()}`)
        .join('');

      // Arrange the letters in alphabetical order
      const textArray = textNames.split('').sort();

      let count = 1;
      let x = textArray[0];
      let letters = [];
      let list = [];

      // 'For' condition to fint the most repited letter
      for (let index = 1; index <= textArray.length; index++) {
        if (x === textArray[index]) {
          count = count + 1;
        } else {
          letters.push(x);
          list.push(count);
          x = textArray[index];
          count = 1;
        }
      }

      const maxValue = Math.max(...list);
      const maxLetter = list.indexOf(maxValue);

      const finalResult = `The letter that is repeated the most in the names is: ${letters[maxLetter]}, with ${maxValue} repetitions.`;

      setUsers(usersResults);
      setLetterResult(finalResult);
    } catch (error) {
      console.log(error);
      throw new Error("Can't find users");
    } finally {
      handleLoading(false);
    }
  };

  return {
    users,
    loading,
    singleUser,
    letterResult,
    getListOfUsers,
    getUserByCurrentAge,
    getRepeatedLetterByName,
  };
};
