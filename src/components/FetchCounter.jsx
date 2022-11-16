import { useEffect } from 'react';
import { useGetListOfUsers } from '../hooks/useGetListOfUsers';

const FetchCounter = () => {
  const { users, loading, letterResult, getRepeatedLetterByName } =
    useGetListOfUsers();

  useEffect(() => {
    getRepeatedLetterByName();
  }, []);

  return (
    <div style={{ width: '50%' }}>
      <h1>Fetch & count</h1>
      {loading ? 'Cargando' : null}
      {users?.map(({ cell, name }) => (
        <div key={cell}>
          <p>{name.first}</p>
        </div>
      ))}
      <p>{letterResult}</p>
    </div>
  );
};

export default FetchCounter;
